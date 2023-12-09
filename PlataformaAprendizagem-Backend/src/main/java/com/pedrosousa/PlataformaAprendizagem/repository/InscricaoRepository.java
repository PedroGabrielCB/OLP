package com.pedrosousa.PlataformaAprendizagem.repository;

import com.pedrosousa.PlataformaAprendizagem.model.Inscricao;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InscricaoRepository extends JpaRepository<Inscricao, Long> {

    @Query(value = "SELECT * from inscricao WHERE idusuario  = :idusuario", nativeQuery = true)
    List<Inscricao> findInscricaoByUsuario(@Param("idusuario") Integer idusuario);

    @Transactional
    @Query(value = "INSERT INTO inscricao (idcurso, idusuario, progresso, finalizado) VALUES (:idcurso, :idusuario, :progresso, :finalizado)", nativeQuery = true)
    Inscricao insertInscricaoByUsuario(
            @Param("idcurso") Integer idcurso,
            @Param("idusuario") Integer idusuario,
            @Param("progresso") Integer progresso,
            @Param("finalizado") Integer finalizado
    );

    @Transactional
    @Modifying
    @Query(value = "UPDATE Inscricao SET progresso = progresso + :novoProgresso WHERE idinscricao = :idinscricao")
    void updateInscricaoProgresso(@Param("idinscricao") Integer idinscricao, @Param("novoProgresso") Integer novoProgresso);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Inscricao SET finalizado = :finalizado WHERE idinscricao = :idinscricao")
    void updateInscricaoFinalizado(@Param("idinscricao") Integer idinscricao, @Param("finalizado") Integer finalizado);
}
