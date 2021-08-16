package dev.marco.example.springboot.service;

import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Answer;
import dev.marco.example.springboot.model.Quiz;
import dev.marco.example.springboot.model.User;
import dev.marco.example.springboot.model.impl.QuizAccomplishedImpl;

import java.math.BigInteger;
import java.util.List;
import java.util.Map;

public interface GameService {
    int ONE_ANSWER = 1;
    int NUMBER_OF_QUESTIONS = 10;
    int NUMBER_OF_USER_ANSWERS = 10;

    void setTestConnection() throws DAOConfigException;
    Quiz sendGameQuiz(String title) throws DAOLogicException, QuizDoesNotExistException, QuizException, QuestionDoesNotExistException, AnswerDoesNotExistException;
    List<Answer> validateAnswers(Quiz quiz, User user, List<Answer> answers) throws QuestionDoesNotExistException, DAOLogicException, AnswerDoesNotExistException, QuizDoesNotExistException, QuizException;
    void setIsFavorite(User user, QuizAccomplishedImpl quizAccomplished) throws DAOLogicException;
}
