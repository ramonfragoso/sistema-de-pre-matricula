package prematricula.controllers;

import java.util.HashSet;
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
import prematricula.services.AlunoService;
import prematricula.services.DisciplinaService;
import prematricula.util.DisciplinasList;

@RestController
@RequestMapping("/api/alunos")
@CrossOrigin
public class AlunoController {

	@Autowired
	private AlunoService alunoService;

	@Autowired
	private DisciplinaService disciplinaService;
	
	@GetMapping(value = "")
	public List<Aluno> getAlunos() {
		return alunoService.findAll();
	}
	
	@GetMapping(value = "/{slug}")
	public Aluno getAluno(@PathVariable String slug) {
		return alunoService.findAluno(slug);
	}

	@PostMapping(value = "")
	public void addAluno(@RequestBody Aluno aluno) {
		if(alunoService.findAluno(aluno.getSlugEmail()) == null)
			alunoService.saveAluno(aluno);
	}
	
	@PutMapping(value = "/{slug}")
	public void updateAluno(@PathVariable String slug, @RequestBody Aluno aluno) {
		if(slug.equals(aluno.getSlugEmail()))
			alunoService.saveAluno(aluno);
	}
	
	@DeleteMapping(value = "/{slug}")
	public void deleteAluno(@PathVariable String slug) {
		this.alunoService.deleteAluno(slug);
	}
	
	@GetMapping(value = "/{slug}/disciplinas")
	public Set<Disciplina> getDisciplinasFromAluno(@PathVariable String slug) {
		return this.alunoService.getDisciplinasFromAluno(slug);
	}
	
	@PostMapping(value = "/{slug}/disciplinas")
	public void addDisciplinasToAluno(@PathVariable String slug, @RequestBody DisciplinasList codigosDisciplinas) {
		Set<Disciplina> disciplinas = new HashSet<>();
		for(String codigoDisciplina : codigosDisciplinas.getCodigos())
			disciplinas.add(disciplinaService.getDisciplina(codigoDisciplina));
		this.alunoService.addDisciplinasToAluno(slug, disciplinas);
	}
	
}
