package dev.marco.example.springboot.model;

public interface RegisterRequest {

    void setEmail(String email);

    String getEmail();

    void setPassword(String password);

    String getPassword();

    void setName(String name);

    String getName();

    void setSurname(String surname);

    String getSurname();

}
