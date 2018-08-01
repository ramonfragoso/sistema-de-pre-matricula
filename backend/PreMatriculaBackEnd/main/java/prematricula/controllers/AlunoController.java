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
@CrossOrigin(origins = "*")
public class AlunoController {

	@Autowired
	private AlunoService alunoService;

	@Autowired
	private DisciplinaService disciplinaService;
	
	@GetMapping(value = "/")
	public List<Aluno> getAlunos() {
		return alunoService.findAll();
	}
	
	@GetMapping(value = "/{email}")
	public Aluno getAluno(@PathVariable String email) {
		return alunoService.findAluno(email);
	}

	@PostMapping(value = "/")
	public void addAluno(@RequestBody Aluno aluno) {
		if(alunoService.findAluno(aluno.getEmail()) == null)
			alunoService.saveAluno(aluno);
	}
	
	@PutMapping(value = "/{email}")
	public void updateAluno(@PathVariable String email, @RequestBody Aluno aluno) {
		if(email.equals(aluno.getEmail()))
			alunoService.saveAluno(aluno);
	}
	
	@DeleteMapping(value = "/{email}")
	public void deleteAluno(@PathVariable String email) {
		this.alunoService.deleteAluno(email);
	}
	
	@GetMapping(value = "/{email}/disciplinas")
	public Set<Disciplina> getDisciplinasFromAluno(@PathVariable String email) {
		return this.alunoService.getDisciplinasFromAluno(email);
	}
	
	@PostMapping(value = "/{email}/disciplinas")
	public void addDisciplinasToAluno(@PathVariable String email, @RequestBody DisciplinasList codigosDisciplinas) {
		Set<Disciplina> disciplinas = new HashSet<>();
		for(String codigoDisciplina : codigosDisciplinas.getCodigos())
			disciplinas.add(disciplinaService.getDisciplina(codigoDisciplina));
		this.alunoService.addDisciplinasToAluno(email, disciplinas);
	}
	
}
