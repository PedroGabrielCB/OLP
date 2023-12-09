package com.pedrosousa.PlataformaAprendizagem.repository;

import com.pedrosousa.PlataformaAprendizagem.model.Conteudo;
import com.pedrosousa.PlataformaAprendizagem.model.Curso;
import com.pedrosousa.PlataformaAprendizagem.model.Inscricao;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ConteudoRepository  extends JpaRepository<Conteudo,Long> {

    @Query(value = "SELECT * FROM conteudo WHERE idusuario = :idusuario AND idcurso = :idcurso", nativeQuery = true)
    List<Conteudo> findConteudoByUsuario(@Param("idusuario") Integer idusuario,@Param("idcurso") Integer idcurso);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Conteudo SET concluido = :concluido WHERE idconteudo = :idconteudo")
    void updateConteudoFinalizado(@Param("idconteudo") Integer idconteudo, @Param("concluido") Integer concluido);

}
