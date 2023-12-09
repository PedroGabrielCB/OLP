package com.pedrosousa.PlataformaAprendizagem.services;

import com.pedrosousa.PlataformaAprendizagem.model.Usuario;
import com.pedrosousa.PlataformaAprendizagem.repository.UsuarioRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    public CustomUserDetailsService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Usuario> optionalUser = usuarioRepository.findUserByEmail(email);

        Usuario user = optionalUser.orElseThrow(() ->
                new UsernameNotFoundException("Usuário não encontrado com o email: " + email));

        List<String> roles = new ArrayList<>();
        roles.add("USER");

        UserDetails userDetails =
                org.springframework.security.core.userdetails.User.builder()
                        .username(user.getEmail())
                        .password(user.getSenha())
                        .roles(roles.toArray(new String[0]))
                        .build();
        return userDetails;
    }
}
