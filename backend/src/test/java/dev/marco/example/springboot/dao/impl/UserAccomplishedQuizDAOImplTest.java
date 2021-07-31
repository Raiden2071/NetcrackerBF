package dev.marco.example.springboot.dao.impl;

import org.apache.log4j.Logger;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.impl.QuizAccomplishedImpl;

import java.math.BigInteger;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserAccomplishedQuizDAOImplTest {

  private UserDAOImpl userDAO;
  private QuizDAOImpl quizDAO;
  private UserAccomplishedQuizDAOImpl userAccomplishedQuizDAO;

  private static final Logger log = Logger.getLogger(UserAnnouncementDAOImpl.class);


  @Autowired
  void setUserDAO(UserDAOImpl userDAO) {
    this.userDAO = userDAO;
    try {
      userDAO.setTestConnection();
    } catch (DAOConfigException e) {

    }
  }

  @Autowired
  void setQuizDAO(QuizDAOImpl quizDAO) {
    this.quizDAO = quizDAO;
    try {
      quizDAO.setTestConnection();
    } catch (DAOConfigException e) {

    }
  }

  @Autowired
  void setAccomplishedQuizDAO(UserAccomplishedQuizDAOImpl userAccomplishedQuizDAO) {
    this.userAccomplishedQuizDAO = userAccomplishedQuizDAO;
    try {
      userAccomplishedQuizDAO.setTestConnection();
    } catch (DAOConfigException e) {

    }
  }

  @Test
  void getAccomplishedQuizesByUserTest() {
//    try {
//      System.out.println( userAccomplishedQuizDAO.getAccomplishedQuizesByUser(BigInteger.ONE));
//
////      System.out.println(userDAO.getUserById(BigInteger.ONE));
//
//    } catch (DAOLogicException e) {
//      e.printStackTrace();
//    } catch (DAOConfigException e) {
//      e.printStackTrace();
//    } catch (QuizDoesNotExistException e) {
//      e.printStackTrace();
//    }
  }

    @Test
    @Timeout(value = 10000, unit= TimeUnit.MILLISECONDS)
    void addAccomplishedQuiz() {
      try {
        userAccomplishedQuizDAO.addAccomplishedQuiz(BigInteger.ONE, new QuizAccomplishedImpl(
                5, false, BigInteger.ONE));
        Set<QuizAccomplishedImpl> accomplishedSet =  userAccomplishedQuizDAO.getAccomplishedQuizesByUser(BigInteger.ONE);
        assertNotNull(accomplishedSet);
        for(QuizAccomplishedImpl quizAccomplished: accomplishedSet)
          assertNotNull(quizAccomplished);
      } catch (DAOLogicException | QuizDoesNotExistException e) {
        log.error("Error while testing addAccomplishedQuiz " + e.getMessage());
        fail();
      }
    }

    @Test
    @Timeout(value = 10000, unit= TimeUnit.MILLISECONDS)
    void editAccomplishedQuiz() {
        try {
            userAccomplishedQuizDAO.editAccomplishedQuiz(BigInteger.ONE, new QuizAccomplishedImpl(
                    10, true, BigInteger.ONE));
            Set<QuizAccomplishedImpl> accomplishedSet =  userAccomplishedQuizDAO.getAccomplishedQuizesByUser(BigInteger.ONE);
            for(QuizAccomplishedImpl quizAccomplished: accomplishedSet){
              assertEquals(10, quizAccomplished.getCorrectAnswers());
              assertEquals(true, quizAccomplished.getFavourite());
            }
        } catch (DAOLogicException | QuizDoesNotExistException e) {
          log.error("Error while testing addAccomplishedQuiz " + e.getMessage());
          fail();
        }
    }

  @Test
  @Timeout(value = 10000, unit= TimeUnit.MILLISECONDS)
  void getAccomplishedQuizesByUser() {
    try {
      Set<QuizAccomplishedImpl> accomplishedSet =  userAccomplishedQuizDAO.getAccomplishedQuizesByUser(BigInteger.ONE);
      assertNotNull(accomplishedSet);
      for(QuizAccomplishedImpl quizAccomplished: accomplishedSet)
        assertNotNull(quizAccomplished);
    } catch (DAOLogicException | QuizDoesNotExistException e) {
      log.error("Error while testing addAccomplishedQuiz " + e.getMessage());
      fail();
    }
  }

  @Test
  @Timeout(value = 10000, unit= TimeUnit.MILLISECONDS)
  void setIsFavoriteQuiz() {
    try {
      userAccomplishedQuizDAO.setIsFavoriteQuiz(BigInteger.ONE, new QuizAccomplishedImpl(
              0, false, BigInteger.ONE));
      Set<QuizAccomplishedImpl> accomplishedSet =  userAccomplishedQuizDAO.getAccomplishedQuizesByUser(BigInteger.ONE);
      for(QuizAccomplishedImpl quizAccomplished: accomplishedSet)
        assertEquals(false, quizAccomplished.getFavourite());
    } catch (DAOLogicException | QuizDoesNotExistException e) {
      log.error("Error while testing setIsFavoriteQuiz " + e.getMessage());
      fail();
    }
    }

  @Test
  @Timeout(value = 10000, unit= TimeUnit.MILLISECONDS)
  void getAccomplishedQuizById() {
    try {
      QuizAccomplishedImpl quizAccomplished = userAccomplishedQuizDAO.getAccomplishedQuizById(BigInteger.ONE, BigInteger.ONE);
      assertNotNull(quizAccomplished);
    } catch (QuizDoesNotExistException | DAOLogicException e) {
      log.error("Error while testing пetAccomplishedQuizById " + e.getMessage());
      fail();
    }
  }

  @Test
  @Timeout(value = 10000, unit= TimeUnit.MILLISECONDS)
  void isAccomplishedQuiz() {
    try {
      assertTrue(userAccomplishedQuizDAO.isAccomplishedQuiz(BigInteger.ONE, BigInteger.ONE));
      assertFalse(userAccomplishedQuizDAO.isAccomplishedQuiz(BigInteger.ONE, BigInteger.TWO));
    } catch (DAOLogicException e) {
      log.error("Error while testing isAccomplishedQuiz " + e.getMessage());
      fail();
    }

  }
}