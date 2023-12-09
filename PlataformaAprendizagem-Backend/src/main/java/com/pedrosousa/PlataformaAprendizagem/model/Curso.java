package com.pedrosousa.PlataformaAprendizagem.model;
import jakarta.persistence.*;

@Entity
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idcurso;

    @Column(nullable = true)
    private String nome;

    @Column(nullable = true)
    private Integer carga_horaria;

    @Column(nullable = true)
    private String tags;

    @ManyToOne
    @JoinColumn(name = "idprofessor",nullable = true)
    private Professor professor;

    public Long getId() {
        return idcurso;
    }

    public void setId(Long idcurso) {
        this.idcurso = idcurso;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getCargaHoraria() {
        return carga_horaria;
    }

    public void setCargaHoraria(Integer cargaHoraria) {
        this.carga_horaria = cargaHoraria;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }
}
