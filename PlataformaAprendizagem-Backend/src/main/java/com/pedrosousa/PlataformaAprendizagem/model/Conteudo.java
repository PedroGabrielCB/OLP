package com.pedrosousa.PlataformaAprendizagem.model;

import jakarta.persistence.*;

@Entity
public class Conteudo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idconteudo;

    @Column(nullable = false)
    private String titulo;
    @Lob
    @Column(nullable = false)
    private String body;
    @Column(nullable = false)
    private Integer concluido;
    @Column(nullable = false)
    private Integer tempo;
    @ManyToOne
    @JoinColumn(name = "idcurso",nullable = false)
    private Curso curso;
    @ManyToOne
    @JoinColumn(name = "idusuario",nullable = false)
    private Usuario usuario;

    public Integer getIdconteudo() {
        return idconteudo;
    }

    public void setIdconteudo(Integer idconteudo) {
        this.idconteudo = idconteudo;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Integer getConcluido() {
        return concluido;
    }

    public void setConcluido(Integer concluido) {
        this.concluido = concluido;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Integer getTempo() {
        return tempo;
    }

    public void setTempo(Integer tempo) {
        this.tempo = tempo;
    }
}
