package dev.marco.example.springboot.service;

import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Answer;
import dev.marco.example.springboot.model.Quiz;
import dev.marco.example.springboot.model.User;
import dev.marco.example.springboot.model.impl.QuizAccomplishedImpl;

import java.math.BigInteger;
import java.util.List;

public interface GameService {
    int NUMBER_OF_QUESTIONS = 10;
    void setTestConnection() throws DAOConfigException;
    Quiz sendGameQuiz(String title) throws DAOLogicException, QuizDoesNotExistException, QuizException, QuestionDoesNotExistException, AnswerDoesNotExistException;
    void validateAnswers(Quiz quiz, User user, List<Answer> answers) throws QuestionDoesNotExistException, DAOLogicException, AnswerDoesNotExistException, QuizDoesNotExistException, QuizException;
    void setIsFavorite(User user, QuizAccomplishedImpl quizAccomplished) throws DAOLogicException;
}
