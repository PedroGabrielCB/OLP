package com.pedrosousa.PlataformaAprendizagem.controller;

import com.pedrosousa.PlataformaAprendizagem.model.Curso;
import com.pedrosousa.PlataformaAprendizagem.model.Evento;
import com.pedrosousa.PlataformaAprendizagem.model.Inscricao;
import com.pedrosousa.PlataformaAprendizagem.repository.CursoRepository;
import com.pedrosousa.PlataformaAprendizagem.repository.EventoRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cursos")
public class CursoController {

    private final CursoRepository cursoRepository;
    public CursoController(CursoRepository cursoRepository){
        this.cursoRepository = cursoRepository;
    }

    @GetMapping("/")
    public List<Curso> findAllCurso(){
        return cursoRepository.findAllCurso();
    }

    @GetMapping("/{idcurso}")
    public List<Curso> findCursoByID(@PathVariable Long idcurso){
        return cursoRepository.findCursoById(idcurso);
    }


    @GetMapping("/tags/{tags}")
    public List<Curso> findCursoByTag(@PathVariable String tags){
        return cursoRepository.findCursoByTag(tags);
    }
}
