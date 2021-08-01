package dev.marco.example.springboot.model.impl;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import dev.marco.example.springboot.model.RegisterRequest;

@JsonDeserialize(builder = UserImpl.UserBuilder.class)
public class RegisterRequestImpl implements RegisterRequest {

    private String firstName;
    private String lastName;
    private String email;
    private String password;

    public RegisterRequestImpl() {
    }

    public RegisterRequestImpl(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    @Override
    public String getEmail() {
        return email;
    }

    @Override
    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String getFirstName() {
        return firstName;
    }

    @Override
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Override
    public String getLastName() {
        return lastName;
    }

    @Override
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
