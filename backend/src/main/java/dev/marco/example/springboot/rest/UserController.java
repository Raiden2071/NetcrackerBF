package dev.marco.example.springboot.rest;

import dev.marco.example.springboot.model.RegisterRequest;
import dev.marco.example.springboot.model.impl.LoginRequestImpl;
import org.apache.commons.lang3.StringUtils;
import dev.marco.example.springboot.model.impl.QuizAccomplishedImpl;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.User;
import dev.marco.example.springboot.model.impl.UserImpl;
import dev.marco.example.springboot.service.MailSenderService;
import dev.marco.example.springboot.service.UserService;
import dev.marco.example.springboot.util.RegexPatterns;

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
            if(!user.getEmail().matches(mailPattern)) {
                throw new UserException(MessagesForException.INVALID_EMAIL);
            }
            if(!user.getPassword().matches(passPattern)) {
                throw new UserException(MessagesForException.INVALID_PASSWORD);
            }
            User receivedUser = userService.authorize(user);

            return ResponseEntity.ok(receivedUser);
        } catch (DAOLogicException | UserException e) {
            log.error(e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }

    public void deleteUser(User user) {

    }

    public void editUser(User user) {

    }

    @PostMapping("/recover")
    public void recoverPassword(@RequestBody String email) {
        try {
            User user = new UserImpl.UserBuilder()
                    .setEmail(email)
                    .build();
            userService.recoverPassword(user);
        } catch (DAOLogicException | MailException | UserException e) {
            log.error("a");
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

    public User getUser(BigInteger userId) {
        //User user = userService.getUserById(userId);
        return null;
    }

    public Set<QuizAccomplishedImpl> getAccomplishedQuizes(BigInteger userId) {
        //free
        //return userService.getAccomplishedQuizById(userId);
        return null;
    }
}
