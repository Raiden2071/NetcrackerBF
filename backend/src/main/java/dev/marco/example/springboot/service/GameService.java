package dev.marco.example.springboot.service;

import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Answer;
import dev.marco.example.springboot.model.Quiz;
import dev.marco.example.springboot.model.User;
import dev.marco.example.springboot.model.impl.QuizAccomplishedImpl;

import java.util.List;

public interface GameService {
    void setTestConnection() throws DAOConfigException;
    void sendGameQuiz(String title);
    void validateAnswers(Quiz quiz, User user, List<Answer> answers) throws QuestionDoesNotExistException, DAOLogicException, AnswerDoesNotExistException, QuizDoesNotExistException;
    void setIsFavorite(User user, QuizAccomplishedImpl quizAccomplished) throws DAOLogicException;
}
