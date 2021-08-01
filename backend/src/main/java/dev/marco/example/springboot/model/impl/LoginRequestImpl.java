package dev.marco.example.springboot.model.impl;

import dev.marco.example.springboot.model.LoginRequest;

public class LoginRequestImpl implements LoginRequest {

    private String email;
    private String password;

    public LoginRequestImpl(String email, String password) {
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
}
