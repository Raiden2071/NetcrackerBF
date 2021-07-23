package ua.netcracker.netcrackerquizb.dao.impl;

import java.math.BigInteger;
import java.util.Set;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;
import ua.netcracker.netcrackerquizb.dao.UserDao;
import ua.netcracker.netcrackerquizb.dao.mapper.UserMapper;
import ua.netcracker.netcrackerquizb.model.User;

@Repository
public class UserDaoImpl  implements UserDao {

  //  добавить в параметры получения accomplished и favorite quizes
  public static final String SEARCH_USER_BY_ID_SQL = "SELECT * FROM usr WHERE id=(?)";
  public static final String SEARCH_USER_BY_EMAIL_SQL = "SELECT * FROM usr WHERE email=(?)";
  public static final String DELETE_USER_BY_ID = "DELETE FROM usr WHERE id=(?)";
  public static final String CREATE_USER = "INSERT INTRO usr (email, first_name, last_name, passwd) VALUES (?,?,?,?)";
//  public static final String GET_AUTHORIZE_USER = "SELECT "
//    в бд нет поля boolean active

  public static final String SEARCH_USER_BY_EMAIL_CODE = "SELECT * FROM usr WHERE email_code=(?)";

  @Override
  public User getUserById(BigInteger id) {
   return null;
  }

  @Override
  public User getUserByEmail(String email) {
  return null;
  }

  @Override
  public void deleteUser(BigInteger id) {

  }

  @Override
  public User createUser(String email, String lastName, String firstName, String password) {
//
    return null;
    //      создание юзера
  }

  @Override
  public User updateUsersName(User user, String newName) {
    return null;
  }

  @Override
  public User updateUsersPassword(User user, String newPassword) {
    return null;
  }

  @Override
  public User getAuthorizeUser(String email, String password) {
    return null;
  }

  @Override
  public User updateUsersDescription(BigInteger id, String newDescription) {
    return null;
  }

  @Override
  public Set<BigInteger> getAccomplishedQuizes(BigInteger id) {
    return null;
  }

  @Override
  public Set<BigInteger> getFavoriteQuizes(BigInteger id) {
    return null;
  }

  @Override
  public void addAccomplishedQuiz(BigInteger id) {

  }

  @Override
  public void addFavoriteQuiz(BigInteger id) {

  }

  @Override
  public void removeFavoriteQuiz(BigInteger id) {

  }

  @Override
  public String getUserByEmailCode(String code) {

//    return template != null ?
//        template.queryForObject(SEARCH_USER_BY_EMAIL_CODE, mapper, code) : null;
//    добавить User return
    return null;
  }

  @Override
  public void activateUser(BigInteger id) {

  }
}
