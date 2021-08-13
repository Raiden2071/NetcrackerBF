package dev.marco.example.springboot.service;

import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Quiz;
import dev.marco.example.springboot.model.QuizType;
import dev.marco.example.springboot.model.impl.QuizImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.math.BigInteger;
import java.util.List;

public interface QuizService {

    int MIN_LENGTH_TITLE = 2;
    int MAX_LENGTH_TITLE = 30;
    int MIN_LENGTH_DESCRIPTION = 5;
    int MAX_LENGTH_DESCRIPTION = 500;

    Quiz buildNewQuiz(Quiz quiz) throws QuizException, DAOLogicException, UserException, QuestionException, AnswerDoesNotExistException;

    void updateQuiz(BigInteger id, Quiz updatedQuiz) throws QuizDoesNotExistException, DAOLogicException, QuestionDoesNotExistException;

    void deleteQuiz(Quiz quiz) throws QuizDoesNotExistException, DAOLogicException, UserDoesNotExistException, UserException;

    QuizImpl getQuizById(BigInteger id) throws QuizDoesNotExistException, DAOLogicException, QuizException, QuestionDoesNotExistException;

    List<Quiz> getQuizzesByType(QuizType quizType) throws QuizDoesNotExistException, DAOLogicException;

    List<Quiz> getAllQuizzes() throws QuizDoesNotExistException, DAOLogicException;

    List<Quiz> getLastCreatedQuizzes(int count) throws QuizDoesNotExistException, DAOLogicException;

    Quiz getQuizByTitle(String title) throws QuizDoesNotExistException, DAOLogicException, QuizException;

    void validateNewQuiz(Quiz quiz) throws QuizException, UserException, QuestionException;

    void setTestConnection() throws DAOConfigException;

    Page<Quiz> getQuizzesLikeTitle(Pageable pageable, String title) throws QuizException;

    Page<Quiz> getQuizzesByPage(Pageable pageable) throws QuizException;

}
