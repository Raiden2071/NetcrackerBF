package dev.marco.example.springboot.rest;

import dev.marco.example.springboot.model.impl.QuizAccomplishedImpl;
import dev.marco.example.springboot.model.impl.QuizImpl;
import dev.marco.example.springboot.service.UserService;
import dev.marco.example.springboot.service.GameService;
import dev.marco.example.springboot.util.ApiAddresses;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.*;
import dev.marco.example.springboot.service.QuizService;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigInteger;
import java.util.List;

import static dev.marco.example.springboot.exception.MessagesForException.*;
import static dev.marco.example.springboot.util.ApiAddresses.API_QUIZ;

@RestController
@RequestMapping(API_QUIZ)
public class QuizController implements ApiAddresses {

    private final QuizService quizService;
    private final UserService userService;
    private final GameService gameService;

    private static final Logger log = Logger.getLogger(QuizController.class);

    @Autowired
    public QuizController(QuizService quizService, UserService userService, GameService gameService) {
        this.quizService = quizService;
        this.userService = userService;
        this.gameService = gameService;
    }

    public void setTestConnection() throws DAOConfigException {
        quizService.setTestConnection();
        userService.setTestConnection();
        gameService.setTestConnection();
    }

    @GetMapping(API_ALL_QUIZZES)
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

    @GetMapping
    public List<Quiz> showQuizzesByPage(@RequestParam int page) {
        try {
            List<Quiz> quizzes = quizService.getQuizzesByPage(page);
            if (quizzes.isEmpty()) {
                log.error(QUIZ_NOT_FOUND_EXCEPTION);
                throw new ResponseStatusException(HttpStatus.NOT_FOUND);
            }
            return quizzes;
        } catch (QuizException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    @GetMapping(API_GET_QUIZ_BY_TITLE)
    public List<Quiz> getQuizzesLikeTitle(@RequestParam String title) {
        try {
            return quizService.getQuizzesLikeTitle(title);
        } catch (QuizException e) {
            log.error(QUIZ_NOT_FOUND_EXCEPTION);
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    @GetMapping(API_GET_QUIZ_BY_ID)
    public Quiz getQuizById(@PathVariable BigInteger id) {
        try {
            Quiz quiz = quizService.getQuizById(id);
            if (quiz == null) {
                log.error(QUIZ_NOT_FOUND_EXCEPTION);
                throw new ResponseStatusException(HttpStatus.NOT_FOUND);
            }
            return quiz;
        } catch (QuizDoesNotExistException | QuizException | QuestionDoesNotExistException e) {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        }
    }

    @PostMapping("/")
    public Quiz createQuiz(@RequestBody QuizImpl quiz) {
        try {
            return quizService.buildNewQuiz(quiz);
        } catch (QuestionException e) {
            log.error(QUESTION_NOT_FOUND + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (UserException e) {
            log.error(USER_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (QuizException e) {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (AnswerDoesNotExistException e) {
            log.error(getAnswerByIdNotFoundExc + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        }
    }

    @PutMapping(API_UPDATE_QUIZ)
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
        } catch (QuestionDoesNotExistException e) {
            log.error(QUESTION_NOT_FOUND + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        }

    }

    @DeleteMapping(API_DELETE_QUIZ)
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
        } catch (UserException | UserDoesNotExistException e) {
            log.error(USER_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (QuestionDoesNotExistException e) {
            log.error(QUESTION_NOT_FOUND + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        }
    }

    @GetMapping(API_SHOW_ALL_FILTER_QUIZZES)
    public List<Quiz> showAllFilterQuizzes(@RequestParam BigInteger id, @RequestParam Filter filter) {
        try {
            return Filter.getQuzziesByFilter(filter, id, quizService, userService);
        } catch (UserDoesNotExistException e) {
            log.error(USERS_DOESNT_EXIT + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(),
                    e.getCause());
        } catch (QuizDoesNotExistException e) {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    @GetMapping(API_QUIZ_GAME)
    public Quiz quizGame(@PathVariable String title) {
        try {
            return gameService.sendGameQuiz(title);
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        } catch (QuizDoesNotExistException | QuizException e) {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (QuestionDoesNotExistException e) {
            log.error(QUESTION_NOT_FOUND + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (AnswerDoesNotExistException e) {
            log.error(ANSWER_NOT_FOUND + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    @PostMapping(API_FINISH_QUIZ)
    public void finishQuiz(@RequestBody ParamsInFinishQuiz params) {
        try {
            Quiz quiz = quizService.getQuizById(params.quizId);
            gameService.validateAnswers(quiz, params.user, params.answers);
        } catch (QuizDoesNotExistException | QuizException e) {
            log.error(QUIZ_NOT_FOUND_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        } catch (QuestionDoesNotExistException e) {
            log.error(QUESTION_NOT_FOUND + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        } catch (AnswerDoesNotExistException e) {
            log.error(ANSWER_NOT_FOUND + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    @PutMapping(API_LIKE_QUIZ)
    public void setLikeOnQuiz(@PathVariable BigInteger id, @RequestBody QuizAccomplishedImpl quizAccomplished) {
        try {
            User user = userService.getUserById(id);
            gameService.setIsFavorite(user, quizAccomplished);
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        } catch (UserDoesNotExistException e) {
            log.error(USERS_DOESNT_EXIT + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    static class ParamsInFinishQuiz {
        BigInteger quizId;
        User user;
        List<Answer> answers;

        public ParamsInFinishQuiz(BigInteger quizId, User user, List<Answer> answers) {
            this.quizId = quizId;
            this.user = user;
            this.answers = answers;
        }
    }
}
