package prematricula.controllers;

import java.util.ArrayList;
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
import prematricula.entity.Coordenador;
import prematricula.entity.Disciplina;
import prematricula.facade.OrdenarServiceFacade;
import prematricula.services.CoordenadorService;
import prematricula.services.DisciplinaService;

@RestController
@RequestMapping("/api/disciplinas")
@CrossOrigin
public class DisciplinaController {

	@Autowired
	OrdenarServiceFacade ordenarServiceFacade;
	
	@GetMapping(value = "")
	public List<Disciplina> getDisciplinas() {
		return this.ordenarServiceFacade.findAllDisciplinas();
	}
	
	@GetMapping(value = "/{codigo}")
	public Disciplina getDisciplina(@PathVariable String codigo) {
		return this.ordenarServiceFacade.findDisciplina(codigo);
	}
	
	@GetMapping(value = "/{codigo}/alunos")
	public Set<Aluno> getAlunosFromDisciplina(@PathVariable String codigo){
		return this.ordenarServiceFacade.findAllAlunoOfDisciplina(codigo);
	}

	@PostMapping(value = "")
	public void addDisciplina(@RequestBody Map<String, String> json) {
		String codigoDisciplina = json.get("codigo");
		Disciplina disciplina = this.ordenarServiceFacade.findDisciplina(codigoDisciplina);
		if(disciplina == null ) {
			Disciplina nDisciplina = new Disciplina();
			nDisciplina.setCodigo(json.get("codigo"));
			nDisciplina.setNome(json.get("nome"));
			nDisciplina.setPeriodo(Integer.parseInt(json.get("periodo")));
			nDisciplina.setQtdCreditos(Integer.parseInt(json.get("qtdCreditos")));
			nDisciplina.setGrade(json.get("tipoGrade"));
			
			String coordenadorEmail = json.get("coordenadorEmail");
			Coordenador coordenador = this.ordenarServiceFacade.getCoordenador(coordenadorEmail);
			if(coordenador != null)
				this.ordenarServiceFacade.saveDisciplina(disciplina);
		}
	}

	
	@PutMapping(value = "/{codigo}")
	public void updateDisciplina(@PathVariable String codigo, @RequestBody Disciplina disciplina) {
		if(codigo.equals(disciplina.getCodigo()))
			this.ordenarServiceFacade.saveDisciplina(disciplina);
	}
	
	@DeleteMapping(value = "/{codigo}")
	public void deleteDisciplina(@PathVariable String codigo) {
		this.ordenarServiceFacade.deleteDisciplina(codigo);
	}
	
}
