package dev.marco.example.springboot.service.impl;

import dev.marco.example.springboot.dao.AnswerDAO;
import dev.marco.example.springboot.dao.QuestionDAO;
import dev.marco.example.springboot.model.*;
import dev.marco.example.springboot.model.impl.AnswerImpl;
import dev.marco.example.springboot.model.impl.QuestionImpl;
import dev.marco.example.springboot.security.JwtUser;
import dev.marco.example.springboot.service.UserService;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import dev.marco.example.springboot.dao.QuizDAO;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.impl.QuizImpl;
import dev.marco.example.springboot.service.QuizService;

import java.math.BigInteger;
import java.sql.Date;
import java.util.List;

import static dev.marco.example.springboot.exception.MessagesForException.*;

@Service
public class QuizServiceImpl implements QuizService {

    private static final Logger log = Logger.getLogger(QuizServiceImpl.class);

    private final QuizDAO quizDAO;
    private final QuestionDAO questionDAO;
    private final AnswerDAO answerDAO;
    private final UserService userService;

    @Autowired
    public QuizServiceImpl(QuizDAO quizDAO, QuestionDAO questionDAO, AnswerDAO answerDAO, UserService userService) {
        this.quizDAO = quizDAO;
        this.questionDAO = questionDAO;
        this.answerDAO = answerDAO;
        this.userService = userService;
    }

    @Override
    public void setTestConnection() throws DAOConfigException {
        quizDAO.setTestConnection();
        questionDAO.setTestConnection();
        answerDAO.setTestConnection();
        userService.setTestConnection();
    }

    @Override
    public Quiz buildNewQuiz(Quiz quiz) throws QuizException, DAOLogicException, QuestionException, UserException, AnswerDoesNotExistException {
        try {
            boolean isExist = quizDAO.existQuizByTitle(quiz.getTitle());

            if (isExist) {
                log.error(QUIZ_ALREADY_EXISTS);
                throw new QuizException(QUIZ_ALREADY_EXISTS);
            }
            JwtUser user = (JwtUser) SecurityContextHolder.getContext().getAuthentication()
                    .getPrincipal();
            BigInteger userId = BigInteger.valueOf(user.getId());

            Quiz newQuiz = QuizImpl.QuizBuilder()
                    .setTitle(quiz.getTitle())
                    .setDescription(quiz.getDescription())
                    .setQuizType(quiz.getQuizType())
                    .setCreationDate(new Date(System.currentTimeMillis()))
                    .setCreatorId(userId)
                    .setQuestions(quiz.getQuestions())
                    .build();

            validateNewQuiz(newQuiz);

            Quiz quizGame = quizDAO.createQuiz(newQuiz);

            List<QuestionImpl> questions = newQuiz.getQuestions();
            for (Question question : questions) {
                Question questionWithId = questionDAO.createQuestion(question, quizGame.getId());

                List<AnswerImpl> answers = questionWithId.getAnswers();
                for (AnswerImpl answer : answers) {
                    answer.setQuestionId(questionWithId.getId());
                    BigInteger id = answerDAO.createAnswer(answer);
                    answer.setId(id);
                }
            }
            return quizGame;

        } catch (UserDoesNotExistException e) {
            log.error(USER_NOT_FOUND_EXCEPTION + e);
            throw new UserException(USER_NOT_FOUND_EXCEPTION, e);
        } catch (UserException e) {
            log.error(USER_HAS_NOT_BEEN_RECEIVED);
            throw new UserException(USER_HAS_NOT_BEEN_RECEIVED, e);
        } catch (QuestionDoesNotExistException e) {
            log.error(QUESTION_NOT_FOUND);
            throw new QuestionException(QUESTION_NOT_FOUND, e);
        } catch (AnswerDoesNotExistException e) {
            log.error(getAnswerByIdNotFoundErr);
            throw new AnswerDoesNotExistException(getAnswerByIdNotFoundErr, e);
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, e);
        }

    }

    @Override
    public void validateNewQuiz(Quiz quiz) throws QuizException, UserException, QuestionException, DAOLogicException, UserDoesNotExistException {
        if (StringUtils.isBlank(quiz.getTitle()) || StringUtils.length(quiz.getTitle()) < MIN_LENGTH_TITLE) {
            log.error(EMPTY_TITLE);
            throw new QuizException(EMPTY_TITLE);
        }
        if (StringUtils.length(quiz.getTitle()) > MAX_LENGTH_TITLE) {
            log.error(LONG_TITLE);
            throw new QuizException(LONG_TITLE);
        }
        if (StringUtils.isBlank(quiz.getDescription()) || StringUtils.length(quiz.getDescription()) < MIN_LENGTH_DESCRIPTION) {
            log.error(EMPTY_DESCRIPTION);
            throw new QuizException(EMPTY_DESCRIPTION);
        }
        if (StringUtils.length(quiz.getDescription()) > MAX_LENGTH_DESCRIPTION) {
            log.error(LONG_DESCRIPTION);
            throw new QuizException(LONG_DESCRIPTION);
        }
        if (quiz.getQuestions().isEmpty()) {
            log.error(QUESTION_EMPTY);
            throw new QuestionException(QUESTION_EMPTY);
        }
        if (quiz.getCreatorId() == null) {
            log.error(USER_NOT_FOUND_EXCEPTION);
            throw new UserException(USER_NOT_FOUND_EXCEPTION);
        }
//        User user = userService.getUserById(quiz.getCreatorId());
//        if(!user.getUserRole().equals(UserRoles.ADMIN)) {
//            log.error(DONT_ENOUGH_RIGHTS);
//            throw new UserException(DONT_ENOUGH_RIGHTS);
//        }

    }

    @Override
    public void updateQuiz(BigInteger id, Quiz quiz) throws QuizDoesNotExistException, DAOLogicException, QuestionDoesNotExistException {

        Quiz quizFromDAO = quizDAO.getQuizById(id);

        if (quizFromDAO != null) {
            List<QuestionImpl> questions = questionDAO.getAllQuestions(quiz.getId());
            quiz.setQuestions(questions);
            quizDAO.updateQuiz(id, quiz);
        } else {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + " in updateQuiz");
            throw new QuizDoesNotExistException(QUIZ_NOT_FOUND_EXCEPTION);
        }
    }

    @Override
    public void deleteQuiz(Quiz quiz)
            throws QuizDoesNotExistException, DAOLogicException {

        Quiz quizFromDAO = quizDAO.getQuizById(quiz.getId());
        if (quizFromDAO != null) {
            quizDAO.deleteQuiz(quiz);
        } else {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + " in deleteQuiz");
            throw new QuizDoesNotExistException(QUIZ_NOT_FOUND_EXCEPTION);
        }
    }

    @Override
    public QuizImpl getQuizById(BigInteger id) throws QuizDoesNotExistException, DAOLogicException, QuizException, QuestionDoesNotExistException {
        if (id == null) {
            log.error(EMPTY_ID);
            throw new QuizException(EMPTY_ID);
        }
        return quizDAO.getQuizById(id);
    }

    @Override
    public List<Quiz> getQuizzesByType(QuizType quizType)
            throws QuizDoesNotExistException, DAOLogicException {
        return quizDAO.getQuizzesByType(quizType);
    }

    @Override
    public List<Quiz> getAllQuizzes() throws QuizDoesNotExistException, DAOLogicException {
        return quizDAO.getAllQuizzes();
    }

    @Override
    public List<Quiz> getLastCreatedQuizzes(int count) throws QuizDoesNotExistException, DAOLogicException {
        return quizDAO.getLastCreatedQuizzes(count);
    }

    @Override
    public Quiz getQuizByTitle(String title)
            throws QuizDoesNotExistException, DAOLogicException, QuizException {
        if (StringUtils.isBlank(title)) {
            log.error(EMPTY_TITLE);
            throw new QuizException(EMPTY_TITLE);
        }
        return quizDAO.getQuizByTitle(title);
    }

    @Override
    public Page<Quiz> getQuizzesLikeTitle(int pageNumber, String title) throws QuizException, PageException {
        if (pageNumber < MIN_PAGE) {
            log.error(PAGE_DOES_NOT_EXIST);
            throw new PageException(PAGE_DOES_NOT_EXIST);
        }
        Pageable pageable = PageRequest.of(--pageNumber, PAGE_SIZE);
        Page<Quiz> page = quizDAO.getQuizzesLikeTitle(pageable, title);
        if(page.getTotalPages() <= pageNumber) {
            log.error(PAGE_DOES_NOT_EXIST);
            throw new PageException(PAGE_DOES_NOT_EXIST);
        }
        return page;
    }


    @Override
    public Page<Quiz> getQuizzesByPage(int pageNumber) throws QuizException, PageException {
        if (pageNumber < MIN_PAGE) {
            log.error(PAGE_DOES_NOT_EXIST);
            throw new PageException(PAGE_DOES_NOT_EXIST);
        }
        Pageable pageable = PageRequest.of(--pageNumber, PAGE_SIZE);
        Page<Quiz> page = quizDAO.getQuizzesByPage(pageable);
        if (!page.hasContent()) {
            log.error(PAGE_DOES_NOT_EXIST);
            throw new PageException(PAGE_DOES_NOT_EXIST);
        }
        return page;
    }
}
