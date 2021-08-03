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

  String SYMBOLS = "1234567890qwertyuiopasdfghjklzxcvbnm";
  String EMAIL_SUBJECT = "Email confirmation for quiz";
//  String TEXT_HTML = "<p><a href=\"http://localhost:8080/confirm?code=%s\">Confirm email</a></p>";

  String TEXT_HTML = "<form action=\"http://localhost:8080/confirm?code=%s\" method=\"post\">\n"
      + "   <button type=\"submit\">Confirm email</button>\n"
      + "  </form>";


  String TEXT_TYPE = "text/html";
  String PATH_PROPERTY = "email.properties";
  String HOST_EMAIL_NAME = "HOST_EMAIL_NAME";
  String HOST_EMAIL_PASSWORD = "HOST_EMAIL_PASSWORD";

  boolean sendEmail(User user) throws UserException, MailException;

  String generateCode() throws DAOLogicException;

  User confirmEmail(String code) throws UserException, DAOLogicException;

  void generateNewPassword(String email) throws MailException;

  void setProperties(Properties properties) throws MailException;

  Message prepareMessage(Session session, String from, String to, String code)
      throws MailException;

  void setTestConnection() throws DAOConfigException;
}
