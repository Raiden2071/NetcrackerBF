package dev.marco.example.springboot.rest;

import org.apache.commons.lang3.StringUtils;
import dev.marco.example.springboot.model.impl.QuizAccomplishedImpl;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.User;
import dev.marco.example.springboot.model.impl.UserImpl;
import dev.marco.example.springboot.service.MailSenderService;
import dev.marco.example.springboot.service.UserService;
import dev.marco.example.springboot.util.RegexPatterns;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigInteger;
import java.util.Set;

import static dev.marco.example.springboot.exception.MessagesForException.*;

@RestController
public class UserController implements RegexPatterns {

    private static final Logger log = Logger.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private MailSenderService mailSenderService;

    @Autowired
    public void setTestConnection() throws DAOConfigException {
        userService.setTestConnection();
        mailSenderService.setTestConnection();
    }

    @PostMapping("/auth/local/register")
    public void createUser(@RequestBody UserImpl user) {
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

            mailSenderService.sendEmail(user1);
        } catch (DAOLogicException | MailException | UserException e) {
            log.error(e.getMessage());
        }
    }

    @PostMapping("/auth/local")
    public ResponseEntity<User> tryToAuthorize(@RequestBody UserImpl user) {
        try {
            if (!user.getEmail().matches(mailPattern)) {
                throw new UserException(MessagesForException.INVALID_EMAIL);
            }
            if (!user.getPassword().matches(passPattern)) {
                throw new UserException(MessagesForException.INVALID_PASSWORD);
            }
            User receivedUser = userService.authorize(user);

            return ResponseEntity.ok(receivedUser);
        } catch (DAOLogicException | UserException | UserDoesNotExistException e) {
            log.error(e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/recover")
    public void recoverPassword(@RequestBody String email) {
        try {
            User user = new UserImpl.UserBuilder()
                    .setEmail(email)
                    .build();
            if (!userService.recoverPassword(user)) {
                log.error(MessagesForException.EMAIL_ERROR);
                throw new MailException(MessagesForException.EMAIL_ERROR);
            }
        } catch (DAOLogicException | MailException | UserException e) {
            log.error("Error while recoverPassword() with email=" + email + " " + e.getMessage());
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
    public void confirmEmail(@RequestParam String code) {
        try {
            if (StringUtils.isEmpty(code)) {
                throw new MailException(MessagesForException.EMAIL_ERROR);
            }
            mailSenderService.confirmEmail(code);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/user")
    public User getUser(@RequestBody BigInteger idUser) {
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

    @GetMapping("/user/acc_quiz")
    public Set<QuizAccomplishedImpl> getAccomplishedQuizzes(@RequestParam BigInteger userId) {
        try {
            return userService.getAccomplishedQuizesByUser(userId);
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        } catch (QuizDoesNotExistException e) {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (UserDoesNotExistException e) {
            log.error(USER_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    @GetMapping("/user/favorite")
    public Set<QuizAccomplishedImpl> getFavoriteQuizesByUser(@RequestBody UserImpl user) {
        try {
            return userService.getFavoriteQuizesByUser(user.getId());
        } catch (DAOLogicException | UserDoesNotExistException | QuizDoesNotExistException e) {
            log.error(e.getMessage(), e);
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }
}
