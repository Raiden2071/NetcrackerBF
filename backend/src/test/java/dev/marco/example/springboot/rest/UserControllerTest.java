package dev.marco.example.springboot.rest;

import dev.marco.example.springboot.exception.DAOLogicException;
import dev.marco.example.springboot.exception.UserDoesNotExistException;
import dev.marco.example.springboot.model.impl.QuizAccomplishedImpl;
import dev.marco.example.springboot.model.impl.UserImpl;
import dev.marco.example.springboot.security.JwtTokenFilter;
import dev.marco.example.springboot.security.JwtTokenProvider;
import dev.marco.example.springboot.service.UserService;
import org.apache.log4j.Logger;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;
import org.mockito.internal.matchers.Any;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.HttpMediaTypeException;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigInteger;
import java.util.HashSet;
import java.util.Random;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static dev.marco.example.springboot.exception.MessagesForException.INVALID_USERS_EMAIL;
import static dev.marco.example.springboot.model.User.EMAIL_PATTERN;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@EnableAutoConfiguration(exclude = SecurityAutoConfiguration.class)
@SpringBootTest
@AutoConfigureMockMvc()
class UserControllerTest {

    private static final Logger log = Logger.getLogger(UserControllerTest.class);

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;


    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void loginTest() {
        try {
            String content = "{\n   \"email\":\"kk@gmail.com\",\n   \"password\":\"testPassword5-\"\n}";

            this.mockMvc.perform(post("/auth/local")
                    .content(content)
                    .contentType(MediaType.APPLICATION_JSON)
                    .accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andReturn();

        } catch (Exception e) {
            log.error(e.getMessage());
        }
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void loginBadRequestTest() {
        try {
            String content = "{\n   \"email\":\"kk@gmail.com\",\n   \"password\":\"notAPassword\"\n}";

            this.mockMvc.perform(post("/auth/local")
                    .content(content)
                    .contentType(MediaType.APPLICATION_JSON)
                    .accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isNotFound())
                    .andReturn();

        } catch (Exception e) {
            log.error(e.getMessage());
        }
    }

    /*
    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void registerTest() throws Exception {
        int num = new Random().nextInt(500000);
        String content = "{\n\t\"firstName\":\"asdasd\"," +
                "\n\t\"lastName\":\"asdasd\",\n   " +
                "\"email\":\"newUser" + num + "@gmail.com\",\n   " +
                "\"password\":\"testP123assword1-\"\n}";

        this.mockMvc.perform(post("/auth/local/register")
                .content(content)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
    }
     */

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void registerAlredyExistsTest() throws Exception {
        String content = "{\n\t\"firstName\":\"Mamba\"," +
                "\n\t\"lastName\":\"Sigma\",\n   " +
                "\"email\":\"masig@gmail.com\",\n   " +
                "\"password\":\"testPassword3-\"\n}";

        this.mockMvc.perform(post("/auth/local/register")
                .content(content)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest())
                .andReturn();
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void registerBadDataTest() throws Exception {
        String content = "{\n\t\"firstName\":\"1\"," +
                "\n\t\"2\":\"Sigma\",\n   " +
                "\"email\":\"3\",\n   " +
                "\"password\":\"4\"\n}";

        this.mockMvc.perform(post("/auth/local/register")
                .content(content)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest())
                .andReturn();
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void recoverTest() throws Exception {
        String content = "{\n\t\"email\":\"Olvik@gmail.com\"\n}";

        when(userService.getUserById(any(BigInteger.class)))
            .thenThrow(UserDoesNotExistException.class);

        this.mockMvc.perform(post("/auth/recover")
                .content(content)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void shouldCreateMockMVC() {
        assertNotNull(mockMvc);
    }

    @Test
    @WithMockUser(username="kk@gmail.com", password = "$2a$04$B1NyyzfmSl3tdYCN2YmKs..mVnqrJdeocFaNRtTRnqC.9KA/04Tne",roles={"ADMIN"})
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void getUserTest() throws Exception {
        when(userService.getUserById(BigInteger.ONE))
                .thenReturn(new UserImpl.UserBuilder()
                        .setId(BigInteger.ONE)
                        .setFirstName("Golum")
                        .setLastName("Valuevich")
                        .setEmail("golum@gmail.com")
                        .build()
                );

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .get("/user/{idUser}", BigInteger.ONE))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(BigInteger.ONE))
                .andExpect(MockMvcResultMatchers.jsonPath("$.firstName").value("Golum"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.lastName").value("Valuevich"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("golum@gmail.com"));
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void deleteUserTest() throws Exception {

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .delete("/user")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("1"))
                .andExpect(MockMvcResultMatchers.status().isOk());

        verify(userService).deleteUser(BigInteger.ONE);
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void editUserTest() throws Exception {

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .put("/user")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{ \"id\": 1,"+
                                " \"firstName\":\"Leopold\"," +
                                " \"lastName\":\"Kotanovich\"," +
                                " \"description\":\"i like to play billiards\"," +
                                " \"password\":\"12345Qwerty\"}"))
                .andExpect(MockMvcResultMatchers.status().isOk());

        verify(userService).updateUsersFullName(BigInteger.ONE, "Leopold", "Kotanovich");
        verify(userService).updateUsersDescription(BigInteger.ONE, "i like to play billiards");
        verify(userService).updateUsersPassword(BigInteger.ONE, "12345Qwerty");
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void getUserShouldReturnResponseStatusExceptionNotFound() throws Exception {
        when(userService.getUserById(any(BigInteger.class)))
                .thenThrow(UserDoesNotExistException.class);

        this.mockMvc.perform(MockMvcRequestBuilders
                        .get("/user/{idUser}", BigInteger.ONE))
                .andExpect(result -> assertTrue(result.getResolvedException() instanceof ResponseStatusException))
                .andExpect(result -> assertEquals(HttpStatus.NOT_FOUND.value(), result.getResponse().getStatus()));
    }


    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void getUserShouldReturnResponseStatusExceptionInternalServerError() throws Exception {
        when(userService.getUserById(any(BigInteger.class)))
                .thenThrow(DAOLogicException.class);

        this.mockMvc.perform(MockMvcRequestBuilders
                        .get("/user/{idUser}", BigInteger.ONE))
                .andExpect(result -> assertTrue(result.getResolvedException() instanceof ResponseStatusException))
                .andExpect(result -> assertEquals(HttpStatus.INTERNAL_SERVER_ERROR.value(), result.getResponse().getStatus()));
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void getFavoriteQuizesByUserTest() throws Exception {
        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .get("/user/favorite")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{ \"id\": 1 }"))
                .andExpect(MockMvcResultMatchers.status().isOk());

        verify(userService).getFavoriteQuizesByUser(BigInteger.valueOf(1));
    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void confirmEmailTest() throws Exception {
        userService.buildNewUser("test@gmail.com", "Qwerty123", "testName", "testLastName");

    }

    @Test
    @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
    void getAccomplishedQuizzesByUser() throws Exception {
        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .get("/user/acc_quiz/2")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        verify(userService).getAccomplishedQuizesByUser(BigInteger.TWO);
    }
}