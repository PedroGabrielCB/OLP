package com.pedrosousa.PlataformaAprendizagem.controller;

import com.pedrosousa.PlataformaAprendizagem.auth.JwtUtil;
import com.pedrosousa.PlataformaAprendizagem.model.Usuario;
import com.pedrosousa.PlataformaAprendizagem.model.request.LoginReq;
import com.pedrosousa.PlataformaAprendizagem.model.response.ErroRes;
import com.pedrosousa.PlataformaAprendizagem.model.response.LoginRes;
import com.pedrosousa.PlataformaAprendizagem.repository.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping("/rest/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UsuarioRepository usuarioRepository;
    private final JwtUtil jwtUtil;

    public AuthController(AuthenticationManager authenticationManager, UsuarioRepository usuarioRepository, JwtUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.usuarioRepository = usuarioRepository;
        this.jwtUtil = jwtUtil;
    }

    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity login(@RequestBody LoginReq loginReq) {

        try {
            Authentication authentication =
                    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginReq.getEmail(), loginReq.getPassword()));
            String email = authentication.getName();

            Optional<Usuario> usuarioOptional = usuarioRepository.findUserByEmail(email);

            if (usuarioOptional.isPresent()) {
                Usuario user = usuarioOptional.get();
                String token = jwtUtil.createToken(user);

                LoginRes loginRes = new LoginRes(email, token, user.getId());

                return ResponseEntity.ok(loginRes);
            } else {
                // Usuário não encontrado no banco de dados
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErroRes(HttpStatus.BAD_REQUEST, "User not found"));
            }

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErroRes(HttpStatus.BAD_REQUEST, "Invalid username or password"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErroRes(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }
}
