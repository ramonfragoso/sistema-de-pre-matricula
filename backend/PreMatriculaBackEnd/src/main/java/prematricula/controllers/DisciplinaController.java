package prematricula.controllers;

import java.util.List;
import java.util.Map;
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
import prematricula.services.CoordenadorService;
import prematricula.services.DisciplinaService;

@RestController
@RequestMapping("/api/disciplinas")
@CrossOrigin
public class DisciplinaController {

	@Autowired
	private DisciplinaService disciplinaService;
	
	@Autowired
	private CoordenadorService coordenadorService;
	
	@GetMapping(value = "")
	public List<Disciplina> getDisciplinas() {
		return disciplinaService.findAll();
	}
	
	@GetMapping(value = "/{codigo}")
	public Disciplina getDisciplina(@PathVariable String codigo) {
		return disciplinaService.getDisciplina(codigo);
	}
	
	@GetMapping(value = "/{codigo}/alunos")
	public Set<Aluno> getAlunosFromDisciplina(@PathVariable String codigo){
		return disciplinaService.getAlunosFromDisciplina(codigo);
	}
	
	

	@PostMapping(value = "")
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
			
			String coordenadorEmail = json.get("coordenadorEmail");
			if(coordenadorService.getCoordenador(coordenadorEmail) != null)
				disciplinaService.saveDisciplina(disciplina);
		}
	}

	
	@PutMapping(value = "/{codigo}")
	public void updateDisciplina(@PathVariable String codigo, @RequestBody Disciplina disciplina) {
		if(codigo.equals(disciplina.getCodigo()))
			this.disciplinaService.saveDisciplina(disciplina);
	}
	
	@DeleteMapping(value = "/{codigo}")
	public void deleteDisciplina(@PathVariable String codigo) {
		this.disciplinaService.deleteDisciplina(codigo);
	}
	
}
