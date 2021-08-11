package dev.marco.example.springboot.rest;

import dev.marco.example.springboot.model.impl.QuizAccomplishedImpl;
import dev.marco.example.springboot.model.impl.QuizImpl;
import dev.marco.example.springboot.service.UserService;
import dev.marco.example.springboot.service.GameService;
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
@RestController
@RequestMapping("/quiz")
public class QuizController {

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

    //@Autowired
    public void setTestConnection() throws DAOConfigException {
        quizService.setTestConnection();
        userService.setTestConnection();
        gameService.setTestConnection();
    }


    @GetMapping("/all")
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
            List<Quiz> quizzes = quizService.getQuizzes(page);
            //int count = quizService.getCountOfPagesQuiz();

            if (quizzes.isEmpty()) {
                log.error(QUIZ_NOT_FOUND_EXCEPTION);
                throw new ResponseStatusException(HttpStatus.NOT_FOUND);
            }
            return quizzes;
        } catch (QuizException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }

    @GetMapping("/countOfPages")
    public int getCountOfPages() {
        try {
            return quizService.getCountOfPagesQuiz();
        } catch (QuizException e) {
            log.error(PAGE_DOES_NOT_EXIST + e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }


    @GetMapping("/{id}")
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
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
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
        }

    }


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

    @DeleteMapping("/{id}")
    public void deleteQuiz(@PathVariable BigInteger id) {
        try {
            Quiz quiz = quizService.getQuizById(id);
            if (quiz == null) {
                log.error(QUIZ_NOT_FOUND_EXCEPTION);
                throw new ResponseStatusException(HttpStatus.NOT_FOUND);
            }
            quizService.deleteQuiz(quiz);
        } catch (QuizDoesNotExistException | QuizException | QuestionDoesNotExistException e) {
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
    public List<Quiz> showAllFilterQuizzes(@RequestParam BigInteger id, @RequestParam Filter filter) {
        try {
            return Filter.getQuziesByFilter(filter, id, quizService, userService);
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

    // without tests
    @GetMapping("/game/{title}")
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

    // without tests
    @PostMapping("/game/end")
    public void finishQuiz(@RequestBody ParamsInFinishQuiz params) {
        try {
            Quiz quizByTitle = quizService.getQuizByTitle(params.title);
            gameService.validateAnswers(quizByTitle, params.user, params.answers);
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

    // without tests
    @PutMapping("/like/{id}")
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
        String title;
        User user;
        List<Answer> answers;

        public ParamsInFinishQuiz(String title, User user, List<Answer> answers) {
            this.title = title;
            this.user = user;
            this.answers = answers;
        }
    }
}
