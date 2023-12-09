package com.pedrosousa.PlataformaAprendizagem.repository;

import com.pedrosousa.PlataformaAprendizagem.model.Evento;
import com.pedrosousa.PlataformaAprendizagem.model.Inscricao;
import com.pedrosousa.PlataformaAprendizagem.model.Notificacao;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface NotificacaoRepository extends JpaRepository<Notificacao,Long> {

    @Query(value = "SELECT * FROM opl.notificacao WHERE idusuario = :idusuario OR idusuario IS NULL;", nativeQuery = true)
    List<Notificacao> findNotificacao(@Param("idusuario") Integer idusuario);

    @Transactional
    @Query(value = "INSERT INTO notificacao (idusuario, tittle, body, data) VALUES (:idusuario, :tittle, :body, :data)", nativeQuery = true)
    Inscricao insertNotificacao(
            @Param("idusuario") Integer idusuario,
            @Param("tittle") String tittle,
            @Param("body") String body,
            @Param("data") Date data
    );

}
