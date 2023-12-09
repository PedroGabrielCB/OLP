package com.pedrosousa.PlataformaAprendizagem.controller;

import com.pedrosousa.PlataformaAprendizagem.model.Usuario;
import com.pedrosousa.PlataformaAprendizagem.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @PostMapping("/salvar")
    public ResponseEntity<Usuario> salvarUsuario(@RequestBody @Valid Usuario usuario) {
        Usuario savedUsuario = usuarioRepository.save(usuario);
        return ResponseEntity.ok(savedUsuario);
    }


}