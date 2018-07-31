package prematricula;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import prematricula.entity.Aluno;
import prematricula.entity.Disciplina;
import prematricula.services.AlunoService;
import prematricula.services.CoordenadorService;
import prematricula.services.DisciplinaService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "+")
public class Facade {

	@Autowired
	private AlunoService alunoService;

	@GetMapping(value = "/alunos")
	public List<Aluno> getAlunos() {
		return alunoService.findAll();
	}

	@PostMapping(value = "/alunos")
	public void addAluno(@RequestBody Aluno aluno) {
		alunoService.saveAluno(aluno);
	}
	
	@PutMapping(value = "/alunos/{mail}")
	public void updateAluno(@PathVariable String email, @RequestBody Aluno aluno) {
		if(email.equals(aluno.getEmail()))
			alunoService.saveAluno(aluno);
	}
	
	@DeleteMapping(value = "/alunos/{email}")
	public void deleteAluno(@PathVariable String email) {
		this.alunoService.deleteAluno(email);
	}
	
	@Autowired
	private DisciplinaService disciplinaService;
	
	@Autowired
	private CoordenadorService coordenadorService;

	@GetMapping(value = "/disciplinas")
	public List<Disciplina> getDisciplinas() {
		return disciplinaService.findAll();
	}

	@PostMapping(value = "/disciplinas")
	public void addDisciplina(@RequestBody Disciplina disciplina) {
		disciplinaService.saveDisciplina(disciplina);
	}

	@GetMapping("/hello")
	public String hello() {
		return "hello";
	}
}
