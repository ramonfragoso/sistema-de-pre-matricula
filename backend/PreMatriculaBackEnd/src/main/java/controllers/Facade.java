package controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import entity.Aluno;
import entity.Disciplina;
import services.AlunoService;
import services.CoordenadorService;
import services.DisciplinaService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "+")
public class Facade {

	@Autowired
	AlunoService alunoService;
	@Autowired
	DisciplinaService disciplinaService;
	@Autowired
	CoordenadorService coordenadorService;
	
	@RequestMapping(value = "/aluno/cadastrardados",method = RequestMethod.POST)
	public void salvarAluno(@RequestBody Aluno aluno){
		alunoService.salvarAluno(aluno);
	}
	
	@RequestMapping(value = "/coordenador/cadastrardisciplina",method = RequestMethod.POST)
	public void criarDisciplina(@RequestBody Disciplina disciplina){
		disciplinaService.criarDisciplina(disciplina);
	}
	
	@RequestMapping(value = "/aluno/{email}",method = RequestMethod.GET)
	public List<Disciplina> disciplinasAluno(@PathVariable("email") String email){
		return alunoService.disciplinasAluno(email);
	}
	
	
	@RequestMapping(value = "/{email}",method = RequestMethod.GET)
	public String verFuncao(@PathVariable("email") String email){
		String funcao = "";
		if(coordenadorService.ehCoordenador(email)){
			funcao = "coordenador";
		}else if(alunoService.primeiroLogin(email)){
			funcao = "aluno nao cadastrado";
		}else{
			funcao = "aluno cadastrado";
		}
		return funcao;
	}
	
	@RequestMapping(value ="/aluno/fazerprematricula",method = RequestMethod.POST)
	public void fazerPreMatricula(@RequestBody Disciplina[] disciplinas, String email){
		Aluno aluno = alunoService.acharAluno(email);
		alunoService.matricularDisciplinas(email, disciplinas);
	}
	
	@RequestMapping(value = "/coordenador/alunosdisciplina",method = RequestMethod.GET)
	public List<Aluno> alunosCursamDisciplina(@RequestBody Long id){
		Disciplina disciplina = disciplinaService.getDisciplina(id);
		return alunoService.cursamDisciplina(disciplina);
	}
	
	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String helloWorld() {
		return "Hello, strange!";
	}
	
	
	
}
