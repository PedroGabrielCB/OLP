package com.pedrosousa.PlataformaAprendizagem.controller;

import com.pedrosousa.PlataformaAprendizagem.model.Evento;
import com.pedrosousa.PlataformaAprendizagem.model.Inscricao;
import com.pedrosousa.PlataformaAprendizagem.repository.EventoRepository;
import com.pedrosousa.PlataformaAprendizagem.repository.InscricaoRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/eventos")
public class EventoController {

    private final EventoRepository eventoRepository;

    public EventoController(EventoRepository eventoRepository){
        this.eventoRepository = eventoRepository;
    }

    @GetMapping("/")
    public List<Evento> getAllEvento(){
        return eventoRepository.findAllEvento();
    }
}
