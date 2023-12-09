package com.pedrosousa.PlataformaAprendizagem.controller;

import com.pedrosousa.PlataformaAprendizagem.model.Conteudo;
import com.pedrosousa.PlataformaAprendizagem.model.Inscricao;
import com.pedrosousa.PlataformaAprendizagem.repository.ConteudoRepository;
import com.pedrosousa.PlataformaAprendizagem.repository.InscricaoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/conteudo")
public class ConteudoController {

    private final ConteudoRepository conteudoRepository;

    public ConteudoController(ConteudoRepository conteudoRepository){
        this.conteudoRepository = conteudoRepository;
    }

    @GetMapping("/{idcurso}/{idusuario}")
    public List<Conteudo> findConteudoByUsuario(@PathVariable Integer idcurso,@PathVariable Integer idusuario){
        return conteudoRepository.findConteudoByUsuario(idusuario,idcurso);
    }

    @PutMapping("/{idconteudo}")
    public ResponseEntity<?> updateConteudoFinalizado(@PathVariable Integer idconteudo, @RequestBody Map<String, Object> requestBody) {
        try {
            Integer concluido = (Integer) requestBody.get("concluido");

            conteudoRepository.updateConteudoFinalizado(idconteudo, concluido);

            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao atualizar o progresso da inscrição.");
        }
    }
}
