package dev.marco.example.springboot.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.marco.example.springboot.model.Quiz;
import dev.marco.example.springboot.model.QuizType;
import dev.marco.example.springboot.model.impl.QuizImpl;
import dev.marco.example.springboot.service.QuizService;
import org.apache.log4j.Logger;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

@SpringBootTest
@AutoConfigureMockMvc
public class QuizControllerTest {
    private static final Logger log = Logger.getLogger(QuizControllerTest.class);

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private QuizService quizService;

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void showAllQuizzesTest() throws Exception {

        List<Quiz> quizzes = quizService.getAllQuizzes();
        assertNotNull(quizzes);
        verify(quizService, Mockito.times(1)).getAllQuizzes();

    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void getQuizByIdTest() throws Exception {
        when(quizService.getQuizById(BigInteger.valueOf(1)))
                .thenReturn(QuizImpl.QuizBuilder()
                        .setId(BigInteger.valueOf(1))
                        .setTitle("NewQuiz")
                        .setDescription("Description of NewQuiz")
                        .setCreatorId(BigInteger.valueOf(3))
                        .setQuizType(QuizType.MATHEMATICS)
                        .build());

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .get("/quiz/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(BigInteger.ONE))
                .andExpect(MockMvcResultMatchers.jsonPath("$.title").value("NewQuiz"));

    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void deleteQuizTest() throws Exception {

        when(quizService.getQuizById(BigInteger.valueOf(1)))
                .thenReturn(QuizImpl.QuizBuilder()
                        .setId(BigInteger.valueOf(1))
                        .setTitle("NewQuiz")
                        .setDescription("Description of NewQuiz")
                        .setCreatorId(BigInteger.valueOf(3))
                        .setQuizType(QuizType.MATHEMATICS)
                        .build());

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .delete("/quiz/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }


    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void updateQuizTest() throws Exception {

        Quiz quiz = QuizImpl.QuizBuilder()
                .setId(BigInteger.valueOf(2))
                .setTitle("Testing your Light!!!")
                .setDescription("Light!!!")
                .setQuizType(QuizType.SCIENCE)
                .setCreationDate(new Date(System.currentTimeMillis()))
                .setCreatorId(BigInteger.valueOf(7))
                .build();

        when(quizService.getQuizById(BigInteger.valueOf(2)))
                .thenReturn(quiz);

        this.mockMvc.perform(MockMvcRequestBuilders
                        .put("/quiz/{id}", 2)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(quiz))
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void showAllFilterQuizzes() {

    }


}
