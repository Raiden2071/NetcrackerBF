package dev.marco.example.springboot.rest;

import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.User;
import dev.marco.example.springboot.model.impl.QuizAccomplishedImpl;
import dev.marco.example.springboot.model.impl.UserImpl;
import dev.marco.example.springboot.security.JwtTokenProvider;
import dev.marco.example.springboot.service.MailSenderService;
import dev.marco.example.springboot.service.UserService;
import dev.marco.example.springboot.util.RegexPatterns;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import static dev.marco.example.springboot.exception.MessagesForException.*;

@RestController
public class UserController implements RegexPatterns {

    private static final Logger log = Logger.getLogger(UserController.class);

    private final UserService userService;
    private final MailSenderService mailSenderService;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    public UserController(UserService userService, MailSenderService mailSenderService,
                          AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider) {
        this.userService = userService;
        this.mailSenderService = mailSenderService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Autowired
    public void setTestConnection() throws DAOConfigException {
        userService.setTestConnection();
        mailSenderService.setTestConnection();
    }

    @PostMapping("/auth/local/register")
    public ResponseEntity<Object> createUser(@RequestBody UserImpl user) {
        log.info("mail: " + user.getEmail() + "firstName: " + user.getFirstName());
        try {
            userService.validateNewUser(
                    user.getEmail(),
                    user.getPassword(),
                    user.getFirstName(),
                    user.getLastName());
            BigInteger userId = userService.buildNewUser(
                    user.getEmail(),
                    user.getPassword(),
                    user.getFirstName(),
                    user.getLastName());

            User user1 = new UserImpl.UserBuilder()
                    .setId(userId)
                    .setEmail(user.getEmail())
                    .build();

            if (!mailSenderService.sendEmail(user1)) {
                throw new MailException(EMAIL_ERROR);
            }
            return ResponseEntity.ok().build();

        } catch (DAOLogicException | MailException | UserException e) {
            log.error(e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/test")
    public String test() {
        return "Test";
    }


    @GetMapping("/testAdmin")
    public String testAdmin() {
        return "TestAdmin";
    }

    @PostMapping("/auth/local")
    public ResponseEntity<Map<String, Object>> tryToAuthorize(@RequestBody UserImpl user) {
        try {
            if (StringUtils.isEmpty(user.getEmail()) || !user.getEmail().matches(mailPattern)) {
                log.error("tryToAuthorize email not valid");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }
            if (StringUtils.isEmpty(user.getPassword())/* || !user.getPassword().matches(passPattern)*/) {
                log.error("tryToAuthorize password not valid");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }

            User receivedUser = userService.authorize(user);

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
            String token = jwtTokenProvider.createToken(user.getEmail());

            Map<String, Object> response = new HashMap<>();
            response.put("user", receivedUser);
            response.put("jwt", token);

            return ResponseEntity.ok(response);
        } catch (DAOLogicException e) {
            log.error(e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        } catch (UserException | UserDoesNotExistException e) {
            log.error(e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (AuthenticationException e) {
            log.error("AuthenticationException " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
            //throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    /*
    @PostMapping("/auth/recover")
    public void recoverPassword1(@RequestBody UserImpl user) {
        try {
            if (StringUtils.isEmpty(user.getEmail()) || !user.getEmail().matches(mailPattern)) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }
            userService.recoverPassword(user);

        } catch (DAOLogicException | MailException e) {
            log.error(e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        } catch (UserException e) {
            log.error(e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    @PostMapping("/recover")
    public ResponseEntity<Object> recoverPassword2(@RequestBody String email) {
        try {
            User user = new UserImpl.UserBuilder()
                    .setEmail(email)
                    .build();
            if (!userService.recoverPassword(user)) {
                log.error(MessagesForException.EMAIL_ERROR);
                throw new MailException(MessagesForException.EMAIL_ERROR);
            }
            return ResponseEntity.ok().build();
        } catch (DAOLogicException | MailException | UserException e) {
            log.error("Error while recoverPassword() with email=" + email + " " + e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }

     */

    @PostMapping("/auth/recover")
    public ResponseEntity<Object> recoverPassword(@RequestBody UserImpl receivedUser) {
        try {
            User user = new UserImpl.UserBuilder()
                    .setEmail(receivedUser.getEmail())
                    .build();
            if (!userService.recoverPassword(user)) {
                log.error(MessagesForException.EMAIL_ERROR);
                throw new MailException(MessagesForException.EMAIL_ERROR);
            }
            return ResponseEntity.ok().build();
        } catch (DAOLogicException | MailException | UserException e) {
            log.error("Error while recoverPassword() with email=" + receivedUser.getEmail() + " " + e.getMessage());
            return ResponseEntity.badRequest().build();

        }
    }

    @PutMapping("/updatePassword")
    public void updatePassword(BigInteger id, String newPassword) throws UserException {
        try {
            if (id == null) {
                throw new UserDoesNotExistException(MessagesForException.USER_NOT_FOUND_EXCEPTION);
            }
            if (!newPassword.matches(passPattern)) {
                throw new UserException(MessagesForException.INVALID_PASSWORD);
            }
            userService.updateUsersPassword(id, newPassword);
        } catch (DAOLogicException | UserDoesNotExistException e) {
            e.printStackTrace();
        }
    }

    public void registrationConfirm(User user) {
        //free

    }

    @PostMapping("/confirm")
    public ResponseEntity<User> confirmEmail(@RequestParam String code) {
        try {
            if (StringUtils.isEmpty(code)) {
                throw new MailException(MessagesForException.EMAIL_ERROR);
            }

            User user = mailSenderService.confirmEmail(code);

            if (user == null)
                throw new MailException(EMAIL_ERROR);
            return ResponseEntity.ok(user);
        } catch (DAOLogicException | MailException | UserException e) {
            log.error(EMAIL_ERROR);
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/user/{idUser}")
    public User getUser(@PathVariable BigInteger idUser) {
        try {
            return userService.getUserById(idUser);
        } catch (UserDoesNotExistException e) {
            log.error(e.getMessage(), e);
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (DAOLogicException e) {
            log.error(e.getMessage(), e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(),
                    e.getCause());
        }
    }

    @DeleteMapping("/user")
    public void deleteUser(@RequestBody BigInteger idUser) {
        try {
            userService.deleteUser(idUser);
        } catch (DAOLogicException e) {
            log.error(e.getMessage(), e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(),
                    e.getCause());
        } catch (UserDoesNotExistException e) {
            log.error(e.getMessage(), e);
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    @PutMapping("/user")
    public void editUser(@RequestBody UserImpl user) {
        try {
            if (StringUtils.isBlank(user.getFirstName()) || StringUtils.isBlank(user.getLastName())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            } else {
                userService.updateUsersFullName(user.getId(), user.getFirstName(), user.getLastName());
            }

            if (StringUtils.isBlank(user.getDescription())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            } else {
                userService.updateUsersDescription(user.getId(), user.getDescription());
            }

            if (StringUtils.isBlank(user.getPassword())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            } else {
                userService.updateUsersPassword(user.getId(), user.getPassword());
            }
        } catch (DAOLogicException e) {
            log.error(e.getMessage(), e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(),
                    e.getCause());
        } catch (UserDoesNotExistException e) {
            log.error(e.getMessage(), e);
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }


    @GetMapping("/user/acc_quiz/{userId}")
    public Set<QuizAccomplishedImpl> getAccomplishedQuizzesByUser(@PathVariable BigInteger userId) {
        try {
            return userService.getAccomplishedQuizesByUser(userId);
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(),
                    e.getCause());
        } catch (QuizDoesNotExistException e) {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (UserDoesNotExistException e) {
            log.error(USER_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    @GetMapping("/user/favorite/{id}")
    public Set<QuizAccomplishedImpl> getFavoriteQuizesByUser(@PathVariable BigInteger id) {
        try {
            return userService.getFavoriteQuizesByUser(id);
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(),
                    e.getCause());
        } catch (QuizDoesNotExistException e) {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (UserDoesNotExistException e) {
            log.error(USER_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }
}
