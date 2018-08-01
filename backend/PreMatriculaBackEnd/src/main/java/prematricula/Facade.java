package prematricula;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
import prematricula.entity.Coordenador;
import prematricula.entity.Disciplina;
import prematricula.services.AlunoService;
import prematricula.services.CoordenadorService;
import prematricula.services.DisciplinaService;
import prematricula.util.DisciplinasList;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class Facade {

	@Autowired
	private AlunoService alunoService;

	@GetMapping(value = "/alunos")
	public List<Aluno> getAlunos() {
		return alunoService.findAll();
	}
	
	@GetMapping(value = "/alunos/{email}")
	public Aluno getAluno(@PathVariable String email) {
		return alunoService.findAluno(email);
	}

	@PostMapping(value = "/alunos")
	public void addAluno(@RequestBody Aluno aluno) {
		if(alunoService.findAluno(aluno.getEmail()) == null)
			alunoService.saveAluno(aluno);
	}
	
	@PutMapping(value = "/alunos/{email}")
	public void updateAluno(@PathVariable String email, @RequestBody Aluno aluno) {
		if(email.equals(aluno.getEmail()))
			alunoService.saveAluno(aluno);
	}
	
	@DeleteMapping(value = "/alunos/{email}")
	public void deleteAluno(@PathVariable String email) {
		this.alunoService.deleteAluno(email);
	}
	
	@GetMapping(value = "/alunos/{email}/disciplinas")
	public List<Disciplina> getDisciplinasFromAluno(@PathVariable String email) {
		return this.alunoService.getDisciplinasFromAluno(email);
	}
	
	@PutMapping(value = "/alunos/{email}/disciplinas")
	public void addDisciplinasToAluno(@PathVariable String email, @RequestBody DisciplinasList codigosDisciplinas) {
		List<Disciplina> disciplinas = new ArrayList<>();
		for(String codigoDisciplina : codigosDisciplinas.getCodigos())
			disciplinas.add(disciplinaService.getDisciplina(codigoDisciplina));
		this.alunoService.addDisciplinasToAluno(email, disciplinas);
	}
	
	@Autowired
	private DisciplinaService disciplinaService;
	
	@GetMapping(value = "/disciplinas")
	public List<Disciplina> getDisciplinas() {
		return disciplinaService.findAll();
	}
	
	@GetMapping(value = "/disciplinas/{codigo}")
	public Disciplina getDisciplina(@PathVariable String codigo) {
		return disciplinaService.getDisciplina(codigo);
	}
	
	

	@PostMapping(value = "/disciplinas")
	public void addDisciplina(@RequestBody Map<String, String> json) {
		
		/**
		 {
	"disciplina":{
		"codigo": "col",
		"nome": "xd changed",
		"periodo": 3,
		"qtdCreditos": 2,
		"tipoGrade": "ANTIGA",
		"tipoDisciplina":"OBRIGATORIA"
	},
	"email": "hugo.galvao@ccc.ufcg.edu.br"
}
		 */
		if(disciplinaService.getDisciplina(json.get("codigo")) == null ) {
			Disciplina disciplina = new Disciplina();
			disciplina.setCodigo(json.get("codigo"));
			disciplina.setNome(json.get("nome"));
			disciplina.setPeriodo(Integer.parseInt(json.get("periodo")));
			disciplina.setQtdCreditos(Integer.parseInt(json.get("qtdCreditos")));
			disciplina.setGrade(json.get("tipoGrade"));
			disciplina.setTipoDisciplina(json.get("tipoDisciplina"));
			
			String coordenadorEmail = json.get("coordenadorEmail");
			if(coordenadorService.getCoordenador(coordenadorEmail) != null)
				disciplinaService.saveDisciplina(disciplina);
		}
	}

	
	@PutMapping(value = "/disciplinas/{codigo}")
	public void updateDisciplina(@PathVariable String codigo, @RequestBody Disciplina disciplina) {
		if(codigo.equals(disciplina.getCodigo()))
			this.disciplinaService.saveDisciplina(disciplina);
	}
	
	@DeleteMapping(value = "/disciplinas/{codigo}")
	public void deleteDisciplina(@PathVariable String codigo) {
		this.disciplinaService.deleteDisciplina(codigo);
	}
	
	@Autowired
	private CoordenadorService coordenadorService;
	
	
	@GetMapping("/coordenadores")
	public List<Coordenador> getCoordenadores(){
		return this.coordenadorService.findAll();
	}
	

	@GetMapping("/hello")
	public String hello() {
		return "hello";
	}
}
