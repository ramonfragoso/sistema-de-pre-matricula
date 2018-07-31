package prematricula;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	@Autowired
	private DisciplinaService disciplinaService;
	
	@Autowired
	private CoordenadorService coordenadorService;

	@GetMapping(value = "/alunos")
	public List<Aluno> alunos() {
		return alunoService.findAll();
	}

	@PostMapping(value = "/alunos")
	public void addAluno(@RequestBody Aluno aluno) {
		alunoService.saveAluno(aluno);
	}
	
	@GetMapping(value="/alunoslouco")
	public Aluno getAluno() {
		return new Aluno("ccc", "aaa", "aaa", "nova");
	}

	@GetMapping(value = "/disciplinas")
	public List<Disciplina> disciplinas() {
		return disciplinaService.findAll();
	}

	@GetMapping(value = "/disciplinaslouca")
	public Disciplina getDisc() {
		return new Disciplina("1", "f", 6, 2, "grade antiga", "obrigatoria");
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
