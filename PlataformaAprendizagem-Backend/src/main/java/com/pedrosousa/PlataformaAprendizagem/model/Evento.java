package com.pedrosousa.PlataformaAprendizagem.model;

import jakarta.persistence.*;

@Entity
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idevento;

    @Column(nullable = false)
    private String nome;

    @ManyToOne
    @JoinColumn(name = "idprofessor",nullable = false)
    private Professor professor;

    public Integer getIdevento() {
        return idevento;
    }

    public void setIdevento(Integer idevento) {
        this.idevento = idevento;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }
}
