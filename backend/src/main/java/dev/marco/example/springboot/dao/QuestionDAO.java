package dev.marco.example.springboot.dao;



import dev.marco.example.springboot.exception.DAOConfigException;
import dev.marco.example.springboot.exception.DAOLogicException;
import dev.marco.example.springboot.exception.QuestionDoesNotExistException;
import dev.marco.example.springboot.model.Question;
import dev.marco.example.springboot.model.impl.AnswerImpl;
import dev.marco.example.springboot.model.impl.QuestionImpl;

import java.math.BigInteger;
import java.util.List;

public interface QuestionDAO {

    final String questionIdColumn = "id_question";
    final String questionNameColumn = "question_name";
    final String questionTypeColumn = "question_type";
    final String questionQuizIdColumn = "quiz";

    final String PROPERTY_GET_QUESTION_BY_ID = "GET_QUESTION_BY_ID";
    final String PROPERTY_GET_QUESTION_BY_DATA = "GET_QUESTION_BY_DATA";
    final String PROPERTY_CREATE_QUESTION = "CREATE_QUESTION";
    final String PROPERTY_GET_QUESTION_ID_BY_DATA = "GET_QUESTION_ID_BY_DATA";
    final String PROPERTY_DELETE_QUESTION = "DELETE_QUESTION";
    final String PROPERTY_GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS";
    final String PROPERTY_UPDATE_QUESTION = "UPDATE_QUESTION";

    void setTestConnection() throws DAOConfigException;

    Question getQuestionById(BigInteger id, List<AnswerImpl> answers) throws QuestionDoesNotExistException, DAOLogicException;

    Question getQuestionByData(String questionText, BigInteger quizId) throws QuestionDoesNotExistException, DAOLogicException;

    Question createQuestion(Question question, BigInteger id) throws QuestionDoesNotExistException, DAOLogicException;

    void deleteQuestion(Question question) throws QuestionDoesNotExistException, DAOLogicException;

    List<QuestionImpl> getAllQuestions(BigInteger id) throws QuestionDoesNotExistException, DAOLogicException;

    void updateQuestion(Question question) throws DAOLogicException;

}
