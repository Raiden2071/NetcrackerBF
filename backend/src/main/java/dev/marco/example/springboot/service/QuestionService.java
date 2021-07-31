package dev.marco.example.springboot.service;

import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Question;

import java.math.BigInteger;
import java.util.List;

public interface QuestionService {

    void setTestConnection() throws DAOConfigException;

    Question createQuestion(Question question, BigInteger quizId) throws DAOLogicException, QuestionDoesNotExistException, QuestionException, AnswerDoesNotExistException;

    void updateQuestion(Question updatedQuestion) throws DAOLogicException, QuestionDoesNotExistException, QuestionException;

    void deleteQuestion(Question question) throws DAOLogicException, QuestionDoesNotExistException;

    Question getQuestionById(BigInteger questionId) throws DAOLogicException, QuestionDoesNotExistException, AnswerDoesNotExistException;

    Question getQuestionByData(String questionText, BigInteger quizId) throws DAOLogicException, QuestionDoesNotExistException, AnswerDoesNotExistException;

    List<Question> getQuestionsByQuiz(BigInteger quizId) throws DAOLogicException, QuestionDoesNotExistException, AnswerDoesNotExistException;

}
