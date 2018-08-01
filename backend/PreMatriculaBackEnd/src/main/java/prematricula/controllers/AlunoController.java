package prematricula.controllers;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import prematricula.entity.Aluno;
import prematricula.entity.Disciplina;
import prematricula.facade.OrdenarServiceFacade;
import prematricula.util.DisciplinasList;

@RestController
@RequestMapping("/api/alunos")
@CrossOrigin
public class AlunoController {

	@Autowired
	private OrdenarServiceFacade ordenarServiceFacade;
	
	@GetMapping(value = "")
	public List<Aluno> findAlunos() {
		return this.ordenarServiceFacade.findAllAlunos();
	}
	
	@GetMapping(value = "/{slug}")
	public Aluno getAluno(@PathVariable String slug) {
		return this.ordenarServiceFacade.findAluno(slug);
	}

	@PostMapping(value = "")
	public void addAluno(@RequestBody Aluno aluno) {
		Aluno alunoNoBd = this.ordenarServiceFacade.findAluno(aluno.getSlugEmail());
		if(alunoNoBd == null)
			this.ordenarServiceFacade.saveAluno(aluno);
	}
	
	@PutMapping(value = "/{slug}")
	public void updateAluno(@PathVariable String slug, @RequestBody Aluno aluno) {
		if(slug.equals(aluno.getSlugEmail()))
			this.ordenarServiceFacade.saveAluno(aluno);
	}
	
	@DeleteMapping(value = "/{slug}")
	public void deleteAluno(@PathVariable String slug) {
		this.ordenarServiceFacade.deleteAluno(slug);
	}
	
	@GetMapping(value = "/{slug}/disciplinas")
	public Set<Disciplina> findAllDisciplinasOfAluno(@PathVariable String slug) {
		return this.ordenarServiceFacade.findAllDisciplinasOfAluno(slug);
	}
	
	@PostMapping(value = "/{slug}/disciplinas")
	public void addDisciplinasToAluno(@PathVariable String slug, @RequestBody DisciplinasList disciplinasList) {
		this.ordenarServiceFacade.addDisciplinasToAluno(slug, disciplinasList);
	}
	
}
