package dev.marco.example.springboot.model;

public interface LoginRequest {

    String getEmail();

    void setEmail(String email);

    String getPassword();

    void setPassword(String password);

}
