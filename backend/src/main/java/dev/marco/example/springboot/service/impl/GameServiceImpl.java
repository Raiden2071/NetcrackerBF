package dev.marco.example.springboot.service.impl;

import com.esotericsoftware.kryo.Kryo;
import dev.marco.example.springboot.model.impl.AnswerImpl;
import dev.marco.example.springboot.model.impl.QuestionImpl;
import dev.marco.example.springboot.model.impl.QuizImpl;
import dev.marco.example.springboot.service.QuestionService;
import dev.marco.example.springboot.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import dev.marco.example.springboot.dao.AnswerDAO;
import dev.marco.example.springboot.dao.QuestionDAO;
import dev.marco.example.springboot.dao.UserAccomplishedQuizDAO;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.*;
import dev.marco.example.springboot.model.impl.QuizAccomplishedImpl;
import dev.marco.example.springboot.service.GameService;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GameServiceImpl implements GameService {

    private final QuestionDAO questionDAO;
    private final AnswerDAO answerDAO;
    private final UserAccomplishedQuizDAO userAccomplishedQuizDAO;
    private final QuizService quizService;
    private final QuestionService questionService;

    @Autowired
    public GameServiceImpl(QuestionDAO questionDAO, AnswerDAO answerDAO,
                           UserAccomplishedQuizDAO userAccomplishedQuizDAO, QuizService quizService, QuestionService questionService) {
        this.questionDAO = questionDAO;
        this.answerDAO = answerDAO;
        this.userAccomplishedQuizDAO = userAccomplishedQuizDAO;
        this.quizService = quizService;
        this.questionService = questionService;
    }

    @Override
    public void setTestConnection() throws DAOConfigException {
        questionDAO.setTestConnection();
        answerDAO.setTestConnection();
        userAccomplishedQuizDAO.setTestConnection();
    }

    @Override
    public Quiz sendGameQuiz(String title) throws DAOLogicException, QuizDoesNotExistException,
            QuizException, QuestionDoesNotExistException, AnswerDoesNotExistException {
        Quiz quiz = quizService.getQuizByTitle(title);
        BigInteger quizId = quiz.getId();
        List<QuestionImpl> questionList = questionService.getQuestionsByQuiz(quizId);
        for (Question question : questionList) {
            List<AnswerImpl> answers = question.getAnswers();
            for (AnswerImpl answer : answers) {
                answer.setAnswer(false);
            }
        }
        Kryo kryo = new Kryo();
        kryo.register(java.util.ArrayList.class);
        kryo.register(java.math.BigInteger.class);
        kryo.register(java.sql.Date.class);
        kryo.register(dev.marco.example.springboot.model.QuizType.class);
        kryo.register(dev.marco.example.springboot.model.impl.QuizImpl.class);
        kryo.register(dev.marco.example.springboot.model.impl.QuestionImpl.class);
        kryo.register(dev.marco.example.springboot.model.QuestionType.class);
        kryo.register(dev.marco.example.springboot.model.Answer.class);
        Quiz returnedQuiz = kryo.copy(quiz);
        returnedQuiz.setQuestions(questionList);
        return returnedQuiz;
    }

    @Override
    public List<AnswerImpl> validateAnswers(Quiz quiz, User user, List<AnswerImpl> userAnswers)
            throws QuestionDoesNotExistException, DAOLogicException, AnswerDoesNotExistException, QuizDoesNotExistException, QuizException {
        BigInteger quizId = quiz.getId();
        BigInteger userId = user.getId();
        List<QuestionImpl> questions = questionService.getQuestionsByQuiz(quizId);
        int counterOfCorrectAnswers = 0;
        List<AnswerImpl> frontAnswers = new ArrayList<>(NUMBER_OF_USER_ANSWERS);
        for (int i = 0; i < NUMBER_OF_QUESTIONS; i++) {
            Question question = questions.get(i);
            AnswerImpl userAnswer = userAnswers.get(i);
            List<AnswerImpl> defaultAnswers = answerDAO.getAnswersByQuestionId(question.getId());
            for (AnswerImpl defAnswer : defaultAnswers) {
                String userAnswerValue = userAnswer.getValue();
                if(defAnswer.getValue().equals(userAnswerValue)) {
                    if(defAnswer.getAnswer()) {
                        frontAnswers.add(userAnswer);
                        counterOfCorrectAnswers++;
                    } else {
                        frontAnswers.add(userAnswer);
                    }
                    break;
                }
            }
        }

        boolean isAccomplishedQuiz = userAccomplishedQuizDAO.isAccomplishedQuiz(userId, quizId);
        if (isAccomplishedQuiz) {
            QuizAccomplishedImpl existedQuizAccomplished = userAccomplishedQuizDAO.getAccomplishedQuizById(userId, quizId);
            if (existedQuizAccomplished.getCorrectAnswers() < counterOfCorrectAnswers) {
                existedQuizAccomplished.setCorrectAnswers(counterOfCorrectAnswers);
                userAccomplishedQuizDAO.editAccomplishedQuiz(userId, existedQuizAccomplished);
            }
        } else {
            QuizImpl newQuiz = quizService.getQuizById(quizId);
            QuizAccomplishedImpl quizAccomplished = new QuizAccomplishedImpl(counterOfCorrectAnswers, newQuiz);
            userAccomplishedQuizDAO.addAccomplishedQuiz(userId, quizAccomplished);
        }
        return frontAnswers;
    }

    @Override
    public void setIsFavorite(User user, QuizAccomplishedImpl quizAccomplished) throws DAOLogicException {
        int isFavorite = quizAccomplished.getIntFavourite();
        isFavorite = (isFavorite == 0) ? 1 : 0;
        BigInteger userId = user.getId();
        BigInteger quizId = quizAccomplished.getQuiz().getId();
        userAccomplishedQuizDAO.setIsFavoriteQuiz(userId, quizId, isFavorite);
    }
}
