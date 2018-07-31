package prematricula;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import prematricula.entity.Aluno;
import prematricula.entity.Disciplina;
import prematricula.repository.DisciplinaRepository;
import prematricula.services.AlunoService;
import prematricula.services.DisciplinaService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "+")
public class Facade {

	@Autowired
	private AlunoService alunoService;
//
	@Autowired
	private DisciplinaService disciplinaService;
//	
//	@Autowired
//	private CoordenadorRepository coordenadorRepository;

	@RequestMapping(method = RequestMethod.GET, value = "/alunos")
	public List<Aluno> alunos() {
		return new ArrayList<Aluno>();
	}

	@PostMapping(value = "/alunos")
	public void addAluno(@RequestBody Aluno aluno) {
		alunoService.saveAluno(aluno);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/disciplinas")
	public List<Disciplina> disciplinas() {
		return disciplinaService.findAll();
	}

	@RequestMapping(method = RequestMethod.GET, value = "/disciplinaslouca")
	public Disciplina getDisc() {
		return new Disciplina("1", "f", 6, 2, "grade antiga", "obrigatoria");
	}

	@PostMapping(value = "/disciplinas")
	public void addDisciplina(@RequestBody Disciplina disciplina) {
		disciplinaService.saveDisciplina(disciplina);
	}

	@RequestMapping("/hello")
	public String hello() {
		return "hello";
	}
}
