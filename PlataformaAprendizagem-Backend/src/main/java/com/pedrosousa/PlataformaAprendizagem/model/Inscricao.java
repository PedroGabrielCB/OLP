package com.pedrosousa.PlataformaAprendizagem.model;
import jakarta.persistence.*;
@Entity
public class Inscricao {
    @Override
    public String toString() {
        return String.format("Inscricao{idinscricao=%d, curso=%s, usuario=%s, progresso=%d, finalizado=%d}",
                idinscricao, curso, usuario, progresso, finalizado);
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idinscricao;

    @ManyToOne
    @JoinColumn(name = "idcurso",nullable = true)
    private Curso curso;

    @ManyToOne
    @JoinColumn(name = "idusuario",nullable = true)
    private Usuario usuario;

    @Column(nullable = true)
    private Integer progresso;

    @Column(nullable = true)
    private Integer finalizado;

    public Integer getId() {
        return idinscricao;
    }

    public void setId(Integer id) {
        this.idinscricao = idinscricao;
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

    public Integer getFinalizado() {
        return finalizado;
    }

    public void setFinalizado(Integer finalizado) {
        this.finalizado = finalizado;
    }

    public Integer getProgresso() {
        return progresso;
    }

    public void setProgresso(Integer progresso) {
        this.progresso = progresso;
    }


}
