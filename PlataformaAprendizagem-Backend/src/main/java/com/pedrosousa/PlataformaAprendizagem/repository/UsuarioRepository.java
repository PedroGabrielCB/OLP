package com.pedrosousa.PlataformaAprendizagem.repository;

import com.pedrosousa.PlataformaAprendizagem.model.Inscricao;
import com.pedrosousa.PlataformaAprendizagem.model.User;
import com.pedrosousa.PlataformaAprendizagem.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepository  extends JpaRepository<Usuario, Long> {
    @Query(value = "SELECT * FROM usuarios WHERE email = :email", nativeQuery = true)
    Optional<Usuario> findUserByEmailNew(@Param("email") String email);

    Optional<Usuario> findUserByEmail(String email);
}
