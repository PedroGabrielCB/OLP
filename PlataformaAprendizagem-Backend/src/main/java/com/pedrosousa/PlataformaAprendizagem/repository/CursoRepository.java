package com.pedrosousa.PlataformaAprendizagem.repository;

import com.pedrosousa.PlataformaAprendizagem.model.Curso;
import com.pedrosousa.PlataformaAprendizagem.model.Evento;
import com.pedrosousa.PlataformaAprendizagem.model.Inscricao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CursoRepository   extends JpaRepository<Curso,Long> {
    @Query(value = "SELECT * FROM curso", nativeQuery = true)
    List<Curso> findAllCurso();

    @Query(value = "SELECT * FROM curso where idcurso = :idcurso", nativeQuery = true)
    List<Curso> findCursoById(@Param("idcurso") Long idcurso);

    @Query(value = "SELECT * FROM curso WHERE tags = :tags", nativeQuery = true)
    List<Curso> findCursoByTag(@Param("tags") String tags);

    Optional<Object> findById(Optional<Curso> byId);
}
