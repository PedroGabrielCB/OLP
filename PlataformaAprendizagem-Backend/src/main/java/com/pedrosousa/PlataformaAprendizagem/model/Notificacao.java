package com.pedrosousa.PlataformaAprendizagem.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Notificacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idnotificacao;

    @Column(nullable = false)
    private String tittle;

    @Column(nullable = false)
    private String body;

    @Column(nullable = false)
    private Date data;

    @ManyToOne
    @JoinColumn(name = "idusuario",nullable = true)
    private Usuario usuario;

    public Integer getIdnotificacao() {
        return idnotificacao;
    }

    public void setIdnotificacao(Integer idnotificacao) {
        this.idnotificacao = idnotificacao;
    }

    public String getTittle() {
        return tittle;
    }

    public void setTittle(String tittle) {
        this.tittle = tittle;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
