package com.pedrosousa.PlataformaAprendizagem.controller;

import com.pedrosousa.PlataformaAprendizagem.model.Curso;
import com.pedrosousa.PlataformaAprendizagem.model.Inscricao;
import com.pedrosousa.PlataformaAprendizagem.model.Notificacao;
import com.pedrosousa.PlataformaAprendizagem.model.Usuario;
import com.pedrosousa.PlataformaAprendizagem.repository.InscricaoRepository;
import com.pedrosousa.PlataformaAprendizagem.repository.NotificacaoRepository;
import com.pedrosousa.PlataformaAprendizagem.repository.UsuarioRepository;
import org.aspectj.weaver.ast.Not;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/notificacoes")
public class NotificacaoController {
    private final NotificacaoRepository notificacaoRepository;
    private final UsuarioRepository usuarioRepository;
    public NotificacaoController(NotificacaoRepository notificacaoRepository,UsuarioRepository usuarioRepository){
        this.notificacaoRepository = notificacaoRepository;
        this.usuarioRepository = usuarioRepository;
    }
    @PostMapping
    public ResponseEntity<?> criarNotificacao(@RequestBody Map<String, Object> requestBody) {
        System.out.println("Recebendo requisição com o seguinte JSON: " + requestBody);

        // Extrair campos do corpo da solicitação
        Integer idusuario = (Integer) requestBody.get("idusuario");
        String tittle = (String) requestBody.get("tittle");
        String body = (String) requestBody.get("body");

        Date data;
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            data = dateFormat.parse((String) requestBody.get("data"));
        } catch (java.text.ParseException e) {
            return ResponseEntity.badRequest().body("Formato de data inválido");
        }

        Usuario usuario = null;
        if (idusuario != null) {
            usuario = usuarioRepository.findById(Long.valueOf(idusuario))
                    .orElseThrow(() -> new NoSuchElementException("Usuário não encontrado com o ID: " + idusuario));
        }

        // Criar uma nova instância de Notificacao
        Notificacao novaNotificacao = new Notificacao();
        novaNotificacao.setUsuario(usuario);
        novaNotificacao.setTittle(tittle);
        novaNotificacao.setBody(body);
        novaNotificacao.setData(data);

        // Salvar a nova notificação no banco de dados
        Notificacao notificacaoSalva = notificacaoRepository.save(novaNotificacao);

        return ResponseEntity.ok().body(notificacaoSalva);
    }


    @GetMapping("/{idusuario}")
    public List<Notificacao> getNotificationByUsuario(@PathVariable Integer idusuario){
        return notificacaoRepository.findNotificacao(idusuario);
    }
}
