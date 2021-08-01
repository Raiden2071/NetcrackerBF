package dev.marco.example.springboot.model.impl;

import dev.marco.example.springboot.model.LoginRequest;

public class LoginRequestImpl implements LoginRequest {

    private String identifier;
    private String password;

    public LoginRequestImpl(String email, String password) {
        this.identifier = email;
        this.password = password;
    }

    @Override
    public String getEmail() {
        return identifier;
    }

    @Override
    public void setEmail(String email) {
        this.identifier = email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public void setPassword(String password) {
        this.password = password;
    }
}
