package dev.marco.example.springboot.rest;

import dev.marco.example.springboot.model.impl.QuizImpl;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.*;
import dev.marco.example.springboot.service.QuizService;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigInteger;
import java.util.Collection;
import java.util.List;

import static dev.marco.example.springboot.exception.MessagesForException.*;

@RestController
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @Autowired
    public void setTestConnection() throws DAOConfigException {
        quizService.setTestConnection();
    }

    private static final Logger log = Logger.getLogger(QuizController.class);

    //done
    @GetMapping("/")
    public List<Quiz> showAllQuizzes() {
        try {
            List<Quiz> quizzes = quizService.getAllQuizzes();
            if (quizzes.isEmpty()) {
                log.error(QUIZ_NOT_FOUND_EXCEPTION);
                throw new ResponseStatusException(HttpStatus.NOT_FOUND);
            }
            return quizzes;
        } catch (QuizDoesNotExistException e) {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        }

    }

    //done
    @GetMapping("/{id}")
    public Quiz getQuizById(@PathVariable BigInteger id) {
        try {
            Quiz quiz = quizService.getQuizById(id);
            if (quiz == null) {
                log.error(QUIZ_NOT_FOUND_EXCEPTION);
                throw new ResponseStatusException(HttpStatus.NOT_FOUND);
            }
            return quiz;
        } catch (QuizDoesNotExistException | QuizException e) {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        }

    }

    @PostMapping("/")
    public Quiz createQuiz(@RequestBody QuizImpl quiz) throws DAOLogicException, UserException, QuizException, QuestionException {
        return quizService.buildNewQuiz(
                quiz.getTitle(),
                quiz.getDescription(),
                quiz.getQuizType(),
                quiz.getCreatorId(),
                quiz.getQuestions()
                );
    }


    //done
    @PutMapping("/{id}")
    public Quiz updateQuiz(@PathVariable BigInteger id,
                           @RequestBody QuizImpl updatedQuiz) {
        try {
            Quiz quiz = quizService.getQuizById(id);
            if (quiz == null) {
                log.error(QUIZ_NOT_FOUND_EXCEPTION);
                throw new ResponseStatusException(HttpStatus.NOT_FOUND);
            }
            quizService.updateQuiz(id, updatedQuiz);
            return updatedQuiz;

        } catch (QuizDoesNotExistException | QuizException e) {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        } catch (QuestionDoesNotExistException e) {
            log.error(QUESTION_NOT_FOUND + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }

    }

    //done
    @DeleteMapping("/{id}")
    public void deleteQuiz(@PathVariable BigInteger id) {
        try {
            Quiz quiz = quizService.getQuizById(id);
            if (quiz == null) {
                log.error(QUIZ_NOT_FOUND_EXCEPTION);
                throw new ResponseStatusException(HttpStatus.NOT_FOUND);
            }
            quizService.deleteQuiz(quiz);
        } catch (QuizDoesNotExistException | QuizException e) {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        } catch (UserException | UserDoesNotExistException e) {
            log.error(USER_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }


    @GetMapping("/filter")
    public List<Quiz> showAllFilterQuizzes(@RequestBody User user, Filter filter) {
        switch (filter) {
            case DATE:
                break;
            case QUIZTYPE:
                break;
            case COMPLETED:
                break;
            case FAVORITES:
                break;
            default:
        }
        return null;
    }

    @GetMapping("/game/{id}")
    public void quizGame(String title, User user, Collection<Answer> answers) {

    }

    @GetMapping("/game/end")
    public void finishQuiz(String title, User user, Collection<Answer> answers) {

    }


}
