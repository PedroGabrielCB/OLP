package com.pedrosousa.PlataformaAprendizagem.repository;

import com.pedrosousa.PlataformaAprendizagem.model.Inscricao;
import com.pedrosousa.PlataformaAprendizagem.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
    @Query(value = "SELECT * from professor", nativeQuery = true)
    List<Professor> findProfessor();
}
