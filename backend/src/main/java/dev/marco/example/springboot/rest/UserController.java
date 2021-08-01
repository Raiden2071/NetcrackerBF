package dev.marco.example.springboot.rest;

import dev.marco.example.springboot.model.RegisterRequest;
import dev.marco.example.springboot.model.impl.LoginRequestImpl;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Quiz;
import dev.marco.example.springboot.model.User;
import dev.marco.example.springboot.model.impl.UserImpl;
import dev.marco.example.springboot.service.MailSenderService;
import dev.marco.example.springboot.service.UserService;
import dev.marco.example.springboot.util.RegexPatterns;

import java.math.BigInteger;
import java.util.List;

@RestController
public class UserController implements RegexPatterns {

    private static final Logger log = Logger.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private MailSenderService mailSenderService;

    @PostMapping("/register")
    public void createUser(@RequestBody RegisterRequest registerRequest) {
        try {
            userService.validateNewUser(
                    registerRequest.getEmail(),
                    registerRequest.getPassword(),
                    registerRequest.getName(),
                    registerRequest.getSurname());
            BigInteger userId = userService.buildNewUser(
                    registerRequest.getEmail(),
                    registerRequest.getPassword(),
                    registerRequest.getName(),
                    registerRequest.getSurname());

            User user = new UserImpl.UserBuilder()
                    .setId(userId)
                    .setEmail(registerRequest.getEmail())
                    .build();

            mailSenderService.sendEmail(user);
        } catch (DAOLogicException | MailException | UserException e) {
            log.error("a");
        }
    }

    @GetMapping("/test")
    public String test() {
        return "Test";
    }

    @PostMapping("/login")
    public ResponseEntity<User> tryToAuthorize(@RequestBody LoginRequestImpl user) {
        try { 
            if(!user.getEmail().matches(mailPattern)) {
                throw new UserException(MessagesForException.INVALID_EMAIL);
            }
            if(!user.getPassword().matches(passPattern)) {
                throw new UserException(MessagesForException.INVALID_PASSWORD);
            }
            User responseUser = new UserImpl.UserBuilder()
                    .setEmail(user.getEmail())
                    .setPassword(user.getPassword())
                    .build();
            User receivedUser = userService.authorize(responseUser);

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
    public void updatePassword(BigInteger id, String newPassword) {

        //free
        //userService.updateUsersPassword(id, newPassword);
    }

    public void registrationConfirm(User user) {
        //free
    }

    public void confirmEmail(String confirmationCode) {
        //free
    }

    public User getUser(BigInteger userId) {
        //User user = userService.getUserById(userId);
        return null;
    }

    public List<Quiz> getAccomplishedQuizes(BigInteger userId) {
        //free
        //return userService.getAccomplishedQuizById(userId);
        return null;
    }
}
