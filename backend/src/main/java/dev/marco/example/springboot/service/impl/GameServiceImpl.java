package dev.marco.example.springboot.service.impl;

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
import java.util.List;

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
        quiz.setQuestions(questionList);
        return quiz;
    }

    @Override
    public void validateAnswers(Quiz quiz, User user, List<Answer> answers)
            throws QuestionDoesNotExistException, DAOLogicException, AnswerDoesNotExistException, QuizDoesNotExistException, QuizException {
        BigInteger quizId = quiz.getId();
        BigInteger userId = user.getId();
        List<QuestionImpl> questions = questionDAO.getAllQuestions(quizId);
        int counterOfCorrectAnswers = 0;
        for (int i = 0; i < NUMBER_OF_QUESTIONS; i++) {
            Question question = questions.get(i);
            Answer answer = answers.get(i);
            if (question.getQuestionType().equals(QuestionType.FOUR_ANSWERS)) {
                List<AnswerImpl> fourDefaultAnswers = answerDAO.getAnswersByQuestionId(question.getId());
                for (Answer defAnswer : fourDefaultAnswers) {
                    if(defAnswer.getValue().equals(answer.getValue()) && defAnswer.getAnswer()) {
                        counterOfCorrectAnswers++;
                        break;
                    }
                }
            } else {
                List<AnswerImpl> twoDefaultAnswers = answerDAO.getAnswersByQuestionId(question.getId());
                for (Answer defAnswer : twoDefaultAnswers) {
                    if(defAnswer.getValue().equals(answer.getValue()) && defAnswer.getAnswer()) {
                        counterOfCorrectAnswers++;
                        break;
                    }
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
