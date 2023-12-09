package com.pedrosousa.PlataformaAprendizagem.model;

import jakarta.persistence.*;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idusuario;

    @Column(nullable = true)
    private String nome;

    @Column(nullable = true)
    private String sobrenome;

    @Column(nullable = true)
    private String email;

    @Column(nullable = true)
    private String senha;

    // Construtor padrão sem argumentos
    public Usuario() {
    }

    public Long getId() {
        return idusuario;
    }

    public void setId(Long id) {
        this.idusuario = idusuario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Usuario(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }
}
