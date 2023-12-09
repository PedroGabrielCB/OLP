package com.pedrosousa.PlataformaAprendizagem.repository;

import com.pedrosousa.PlataformaAprendizagem.model.Evento;
import com.pedrosousa.PlataformaAprendizagem.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface EventoRepository  extends JpaRepository<Evento,Long> {

    @Query(value = "SELECT * FROM evento", nativeQuery = true)
    List<Evento> findAllEvento();
}
