package dev.marco.example.springboot.model;

public interface RegisterRequest {

    void setEmail(String email);

    String getEmail();

    void setPassword(String password);

    String getPassword();

    void setFirstName(String firstName);

    String getFirstName();

    void setLastName(String lastName);

    String getLastName();

}
