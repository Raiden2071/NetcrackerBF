package dev.marco.example.springboot.service;

import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Question;
import dev.marco.example.springboot.model.Quiz;
import dev.marco.example.springboot.model.QuizType;

import java.math.BigInteger;
import java.util.List;

public interface QuizService {

    int MIN_LENGTH_TITLE = 2;
    int MIN_LENGTH_DESCRIPTION = 5;

    Quiz buildNewQuiz(String title, String description, QuizType quizType, BigInteger userId, List<Question> questions) throws QuizException, DAOLogicException, UserException, QuestionException;

    void updateQuiz(BigInteger id, Quiz updatedQuiz) throws QuizDoesNotExistException, DAOLogicException, QuestionDoesNotExistException;

    void deleteQuiz(Quiz quiz) throws QuizDoesNotExistException, DAOLogicException, UserDoesNotExistException, UserException;

    Quiz getQuizById(BigInteger id) throws QuizDoesNotExistException, DAOLogicException, QuizException;

    List<Quiz> getQuizzesByType(QuizType quizType) throws QuizDoesNotExistException, DAOLogicException;

    List<Quiz> getAllQuizzes() throws QuizDoesNotExistException, DAOLogicException;

    List<Quiz> getLastCreatedQuizzes(BigInteger count) throws QuizDoesNotExistException, DAOLogicException;

    Quiz getQuizByTitle(String title) throws QuizDoesNotExistException, DAOLogicException, QuizException;

    void validateNewQuiz(String title, String description, List<Question> questions, BigInteger creatorId) throws QuizException, UserException, QuestionException;

    void setTestConnection() throws DAOConfigException;
}
