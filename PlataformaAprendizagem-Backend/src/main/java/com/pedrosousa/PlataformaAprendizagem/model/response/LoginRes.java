package com.pedrosousa.PlataformaAprendizagem.model.response;

public class LoginRes {
    private String email;
    private String token;
    private Long id;

    public LoginRes(String email, String token, Long id) {
        this.email = email;
        this.token = token;
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
