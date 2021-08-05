package dev.marco.example.springboot.dao.impl;

import org.apache.log4j.Logger;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import dev.marco.example.springboot.exception.AnswerDoesNotExistException;
import dev.marco.example.springboot.exception.DAOConfigException;
import dev.marco.example.springboot.exception.DAOLogicException;
import dev.marco.example.springboot.model.Answer;
import dev.marco.example.springboot.model.impl.AnswerImpl;

import java.math.BigInteger;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.fail;

@SpringBootTest
public class AnswerDAOImplTest {

    private AnswerDAOImpl answerDAO;
    private static final Logger log = Logger.getLogger(AnswerDAOImplTest.class);

    @Autowired
    private void setDAO(AnswerDAOImpl answerDAO) {
        this.answerDAO = answerDAO;
        try {
            answerDAO.setTestConnection();
        } catch (DAOConfigException e) {
            log.error("Error while setting test connection in AnswerDAOImplTest " + e.getMessage());
            fail();
        }
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void getAnswerByIdTest() {
        try {
            Answer answer = answerDAO.getAnswerById(BigInteger.ONE);
            log.debug("TEST AnswerDAOImplTest");
            assertNotNull(answer);
            assertEquals("America", answer.getValue());
        } catch (DAOLogicException | AnswerDoesNotExistException e) {
            log.error("Error while testing getAnswerByIdTest " + e.getMessage());
            fail();
        }
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void getLastAnswerIdByTitleTest() {
        try {
            String aboba = "Aboba";
            Answer answerByTitle = new AnswerImpl(aboba, true, BigInteger.ONE);
            answerDAO.createAnswer(answerByTitle);

            BigInteger id = answerDAO.getLastAnswerIdByTitle(aboba);
            Answer answerByTitleTest = answerDAO.getAnswerById(id);
            assertNotNull(answerByTitleTest);

            assertEquals(answerByTitleTest.getAnswer(), answerByTitle.getAnswer());
            assertEquals(answerByTitleTest.getValue(), answerByTitle.getValue());
            assertEquals(answerByTitleTest.getQuestionId(), answerByTitle.getQuestionId());

            answerDAO.deleteAnswer(id);
        } catch (DAOLogicException | AnswerDoesNotExistException e) {
            log.error("Error while testing getLastAnswerIdByTitleTest " + e.getMessage());
            fail();
        }
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void createAnswerTest() {
        try {
            String antarctica = "Antarctica";
            Answer answerImpl = new AnswerImpl(antarctica, false, BigInteger.ONE);

            log.debug("createAnswerTest: value = " + antarctica);
            answerDAO.createAnswer(answerImpl);
            BigInteger id = answerDAO.getLastAnswerIdByTitle(antarctica);
            Answer anAnswer = answerDAO.getAnswerById(id);
            assertNotNull(anAnswer);

            assertEquals(anAnswer.getValue(), answerImpl.getValue());
            assertEquals(anAnswer.getAnswer(), answerImpl.getAnswer());
            assertEquals(anAnswer.getQuestionId(), answerImpl.getQuestionId());

            answerDAO.deleteAnswer(id);
        } catch (DAOLogicException | AnswerDoesNotExistException e) {
            log.error("Error while testing createAnswerTest " + e.getMessage());
            fail();
        }
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void deleteAnswerTest() {
        try {
            String mars = "Mars";
            Answer ans = new AnswerImpl(mars, false, BigInteger.ONE);
            answerDAO.createAnswer(ans);

            BigInteger id = answerDAO.getLastAnswerIdByTitle(mars);
            Answer nullAnswer = answerDAO.getAnswerById(id);
            assertNotNull(nullAnswer);
            log.debug("deleteAnswerTest: id = " + id);

            answerDAO.deleteAnswer(id);
        } catch (DAOLogicException | AnswerDoesNotExistException e) {
            log.error("Error while testing deleteAnswerTest " + e.getMessage());
            fail();
        }
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void updateAnswerTest() {
        try {
            String moon = "Moon";
            Answer newAnswer = new AnswerImpl(moon, false, BigInteger.TWO);
            answerDAO.createAnswer(newAnswer);

            BigInteger id = answerDAO.getLastAnswerIdByTitle(moon);
            Answer testNewAnswer = answerDAO.getAnswerById(id);
            assertNotNull(testNewAnswer);

            String sun = "Sun";
            testNewAnswer.setValue(sun);
            testNewAnswer.setAnswer(true);
            testNewAnswer.setQuestionId(BigInteger.valueOf(3));
            answerDAO.updateAnswer(testNewAnswer);

            Answer finalAnswer = answerDAO.getAnswerById(id);
            assertNotNull(finalAnswer);

            assertEquals(testNewAnswer.getAnswer(), finalAnswer.getAnswer());
            assertEquals(testNewAnswer.getQuestionId(), finalAnswer.getQuestionId());
            assertEquals(testNewAnswer.getValue(), finalAnswer.getValue());

            answerDAO.deleteAnswer(id);
        } catch (DAOLogicException | AnswerDoesNotExistException e) {
            log.error("Error while testing updateAnswerTest " + e.getMessage());
            fail();
        }
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void getAnswersByQuestionIdTest() {
        try {
            BigInteger questionId = BigInteger.TWO;

            List<AnswerImpl> answersForSecondQuestion = answerDAO.getAnswersByQuestionId(questionId);
            assertEquals("America", answersForSecondQuestion.get(0).getValue());
            assertEquals("Asia", answersForSecondQuestion.get(1).getValue());
            assertEquals("Africa", answersForSecondQuestion.get(2).getValue());
            assertEquals("Europe", answersForSecondQuestion.get(3).getValue());

        } catch (DAOLogicException | AnswerDoesNotExistException e) {
            log.error("Error while testing getAnswersByQuestionIdTest " + e.getMessage());
            fail();
        }
    }
}


