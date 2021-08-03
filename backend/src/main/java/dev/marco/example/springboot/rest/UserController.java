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
        } catch (UserException e) {
            log.error(e.getMessage());
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e.getCause());
        } catch (DAOLogicException | MailException e) {
            log.error(e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        }
    }

    @PostMapping("/auth/local")
    public ResponseEntity<User> tryToAuthorize(@RequestBody UserImpl user) {
        try {
            if(StringUtils.isEmpty(user.getEmail()) || !user.getEmail().matches(mailPattern)) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }
            if(StringUtils.isEmpty(user.getPassword()) || !user.getPassword().matches(passPattern)) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }

            User receivedUser = userService.authorize(user);

            return new ResponseEntity<>(receivedUser, HttpStatus.OK);
        } catch (DAOLogicException e) {
            log.error(e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        } catch (UserException | UserDoesNotExistException e) {
            log.error(e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    @PostMapping("/auth/recover")
    public void recoverPassword(@RequestBody UserImpl user) {
        try {
            if(StringUtils.isEmpty(user.getEmail()) || !user.getEmail().matches(mailPattern)) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }
            log.error("wtf1");
            userService.recoverPassword(user);

        } catch (DAOLogicException | MailException e) {
            log.error("wtf2");
            log.error(e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        } catch (UserException e) {
            log.error("wtf3");
            log.error(e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
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

    public void confirmEmail(String confirmationCode) {
        //free
        try {
            if(StringUtils.isEmpty(confirmationCode)) {
                throw new Exception(MessagesForException.EMAIL_ERROR);
            }
            mailSenderService.confirmEmail(confirmationCode);
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
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        }
    }

    @DeleteMapping("/user")
    public void deleteUser(@RequestBody BigInteger idUser ) {
        try {
            userService.deleteUser(idUser);
        } catch (DAOLogicException e) {
            log.error(e.getMessage(), e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        } catch (UserDoesNotExistException e) {
            log.error(e.getMessage(), e);
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    @PutMapping("/user")
    public void editUser(@RequestBody  UserImpl user) {
        try {
            if (StringUtils.isBlank(user.getFirstName()) || StringUtils.isBlank(user.getLastName()))
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            else userService.updateUsersFullName(user.getId(), user.getFirstName(), user.getLastName());

            if(StringUtils.isBlank(user.getDescription()))
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            else userService.updateUsersDescription(user.getId(), user.getDescription());

            if(StringUtils.isBlank(user.getPassword()))
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            else userService.updateUsersPassword(user.getId(), user.getPassword());
        } catch (DAOLogicException e) {
            log.error(e.getMessage(), e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        } catch (UserDoesNotExistException e) {
            log.error(e.getMessage(), e);
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    public Set<QuizAccomplishedImpl> getAccomplishedQuizes(BigInteger userId) {
        //free
        //return userService.getAccomplishedQuizById(userId);
        return null;
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
