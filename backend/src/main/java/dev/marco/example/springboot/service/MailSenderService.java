package dev.marco.example.springboot.service;

import dev.marco.example.springboot.exception.DAOConfigException;
import dev.marco.example.springboot.exception.DAOLogicException;
import dev.marco.example.springboot.exception.MailException;
import dev.marco.example.springboot.exception.UserException;
import dev.marco.example.springboot.model.User;

import javax.mail.Message;
import javax.mail.Session;
import java.util.Properties;

public interface MailSenderService {

  String SYMBOLS = "1234567890qwertyuiopasdfghjklzxcvbnmQWERRTYUIOPASDFGHJKL";
  String EMAIL_SUBJECT = "Email confirmation for quiz";
  String PASSWORD_SUBJECT = "Recover password";
  String TEXT_PASSWORD = "New password is: %s";

  String TEXT_HTML = "<html>\n"
      + "<body>\n"
      + "<div>\n"
      + "<div>\n"
      + "Hello!\n"
      + "</div>\n"
      + "Today, a certain user has been registered on the site <a href=\"https://netcracker-quiz-0001.herokuapp.com/\">https://netcracker-quiz-0001.herokuapp.com/</a>\n"
      + "using your email address.\n"
      + "<div> If it was you, please confirm your email address by following this link: </div>"
      ;

  String TEXT_INPUT = "<form action=\"http://localhost:8080/confirm?code=%s\" method=\"post\"  style=\"margin-left: 72px;\">\n"
      + "<button type=\"submit\" style=\"display: contents;text-decoration: underline;color: blue;\">Confirm email</button></form>\n"
      + "</div>\n"
      + "<div id=\"footer\">\n"
      + "      Otherwise, if it was not you, then just ignore this letter\n"
      + "</div>\n"
      + "</body>\n"
      + "</html>";

  String TEXT_TYPE = "text/html";
  String PATH_PROPERTY = "email.properties";
  String HOST_EMAIL_NAME = "HOST_EMAIL_NAME";
  String HOST_EMAIL_PASSWORD = "HOST_EMAIL_PASSWORD";

  boolean sendEmail(User user) throws UserException, MailException;

  String generateCode() throws DAOLogicException;

  User confirmEmail(String code) throws UserException, DAOLogicException;

  boolean generateNewPassword(String email) throws MailException;

  void setProperties(Properties properties) throws MailException;

  Message prepareMessage(Session session, String from, String to, String subject,
      String content)
      throws MailException;

  void setTestConnection() throws DAOConfigException;
}
