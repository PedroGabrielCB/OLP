package com.pedrosousa.PlataformaAprendizagem.model;

import jakarta.persistence.*;

@Entity
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idprofessor;

    @Column(nullable = false)
    private String nome;

    public Integer getId() {
        return idprofessor;
    }

    public void setId(Integer id) {
        this.idprofessor = idprofessor;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
