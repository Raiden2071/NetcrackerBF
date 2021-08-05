package dev.marco.example.springboot.dao.impl;

import org.apache.log4j.Logger;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import dev.marco.example.springboot.exception.DAOConfigException;
import dev.marco.example.springboot.exception.DAOLogicException;
import dev.marco.example.springboot.exception.QuestionDoesNotExistException;
import dev.marco.example.springboot.model.Question;
import dev.marco.example.springboot.model.QuestionType;
import dev.marco.example.springboot.model.impl.QuestionImpl;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class QuestionDAOImplTest {

    private QuestionDAOImpl questionDAO;
    private static final Logger log = Logger.getLogger(QuestionDAOImplTest.class);

    @Autowired
    private void setDAO(QuestionDAOImpl questionDAO) {
        this.questionDAO = questionDAO;
        try {
            questionDAO.setTestConnection();
        } catch (DAOConfigException e) {
            log.error("Error while setting test connection " + e.getMessage());
        }
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void getQuestionByIdTest() {
        try {
            Question question = questionDAO.getQuestionById(BigInteger.ONE, new ArrayList<>());
            assertNotNull(question);
            assertEquals("Ukraine location?", question.getQuestion());
        } catch (DAOLogicException | QuestionDoesNotExistException e) {
            log.error("Error while testing getQuestionByIdTest " + e.getMessage());
            fail();
        }
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void getQuestionByDataTest() {
        try {
            Question question = questionDAO.getQuestionByData("Ukraine location?", BigInteger.valueOf(2));
            assertNotNull(question);
            assertEquals("Ukraine location?", question.getQuestion());
            assertEquals(question.getId(), BigInteger.valueOf(11));
        } catch (DAOLogicException | QuestionDoesNotExistException e) {
            log.error("Error while testing getQuestionByIdTest " + e.getMessage());
            fail();
        }
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void createQuestionTest() {
        try {
            BigInteger quizId = BigInteger.valueOf(1);
            String questionText = "" + new Random().nextInt(500000);
            Question questionModel = new QuestionImpl(
                    questionText,
                    QuestionType.TRUE_FALSE
            );

            log.debug("createQuestionTest: questionText = " + questionText);

            questionDAO.createQuestion(questionModel, quizId);
            boolean isFound = false;
            List<QuestionImpl> questions = questionDAO.getAllQuestions(quizId);
            for (Question question : questions) {
                if (question.getQuestion().equals("" + questionText)) {
                    isFound = true;
                    log.debug("createQuestionTest: found question");
                }
            }
            questionDAO.deleteQuestion(questionModel);

            assertTrue(isFound);
        } catch (DAOLogicException | QuestionDoesNotExistException e) {
            log.error("Error while testing createQuestionTest " + e.getMessage());
            fail();
        }
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void getQuestionsByQuizTest() {
        try {
            List<QuestionImpl> questions = questionDAO.getAllQuestions(BigInteger.valueOf(1));
            for (Question question : questions) {
                assertNotNull(question.getQuestion());
            }
        } catch (DAOLogicException | QuestionDoesNotExistException e) {
            log.error("Error while testing getQuestionsByQuizTest " + e.getMessage());
            fail();
        }
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void updateQuestionTest() {
        try {
            BigInteger questionId = BigInteger.valueOf(3);
            Question questionOld = questionDAO.getQuestionById(questionId, new ArrayList<>());
            Question questionNew = questionOld;
            questionNew.setQuestion("New que");
            questionNew.setQuestionType(QuestionType.FOUR_ANSWERS);

            questionDAO.updateQuestion(questionNew);

            Question questionGot = questionDAO.getQuestionById(questionId, new ArrayList<>());

            questionDAO.updateQuestion(questionOld);
            assertEquals(questionGot.getQuestion(), questionNew.getQuestion());
            assertEquals(questionGot.getQuestionType(), questionNew.getQuestionType());
        } catch (DAOLogicException | QuestionDoesNotExistException e) {
            log.error("Error while testing updateQuestionTest " + e.getMessage());
            fail();
        }
    }
}
