package dev.marco.example.springboot.rest;

import dev.marco.example.springboot.model.impl.UserImpl;
import dev.marco.example.springboot.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.math.BigInteger;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    //@Test
    @WithMockUser(username = "spring", password = "secret")
    void authTest() throws Exception {
        this.mockMvc.perform(get("/test"))
                .andExpect(status().is(200));
    }

    //@Test
    @WithMockUser(username = "spring", password = "secret")
    void loginTest() throws Exception {
        this.mockMvc.perform(post("/login")
                .param("email", "mark2@gmail.com")
                .param("password", "testPassword1-")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                //.andExpect(content().json(""))
                .andReturn();
    }

    /*
    @Test
    @WithMockUser(username = "spring", password = "secret")
    void loginTestThrows() throws Exception {
        this.mockMvc.perform(post("/login")
                .param("email", "asdasdasd")
                .param("password", "asddasadasd")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

    }

     */

    @Test
    void shouldCreateMockMVC() {
        assertNotNull(mockMvc);
    }

    @Test
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
                        .get("/user")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("1"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(BigInteger.ONE))
                .andExpect(MockMvcResultMatchers.jsonPath("$.firstName").value("Golum"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.lastName").value("Valuevich"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("golum@gmail.com"));
    }

    @Test
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
    void getFavoriteQuizesByUserTest() {

    }
}