package prematricula.facade;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import prematricula.entity.Aluno;
import prematricula.entity.Coordenador;
import prematricula.entity.Disciplina;
import prematricula.services.AlunoService;
import prematricula.services.CoordenadorService;
import prematricula.services.DisciplinaService;
import prematricula.util.DisciplinasList;

@Component
public class OrdenarServiceFacadeImpl implements OrdenarServiceFacade{
	
	@Autowired
	AlunoService alunoService;
	
	@Autowired
	CoordenadorService coordenadorService;
	
	@Autowired
	DisciplinaService disciplinaService;

	@Override
	public List<Aluno> findAllAlunos() {
		return this.alunoService.findAll();
	}

	@Override
	public void saveAluno(Aluno aluno) {
		this.alunoService.save(aluno);
	}

	@Override
	public Aluno findAluno(String slug) {
		return this.alunoService.findAluno(slug);
	}

	@Override
	public void deleteAluno(String slug) {
		this.alunoService.deleteAluno(slug);
	}

	@Override
	public void addDisciplinasToAluno(String slug, DisciplinasList disciplinasList) {
		Set<Disciplina> disciplinas = this.disciplinaService.getDisciplinas(disciplinasList);
		this.alunoService.updateDisciplinas(slug, disciplinas);
	}
	
	@Override
	public Set<Disciplina> findAllDisciplinasOfAluno(String slug) {
		return this.alunoService.findAllDisciplinasOfAluno(slug);
	}

	@Override
	public List<Disciplina> findAllDisciplinas() {
		return this.disciplinaService.findAll();
	}

	@Override
	public Disciplina findDisciplina(String codigoDisciplina) {
		return this.disciplinaService.findDisciplina(codigoDisciplina);
	}

	@Override
	public void saveDisciplina(Disciplina disciplina) {
		this.disciplinaService.saveDisciplina(disciplina);
	}

	@Override
	public void deleteDisciplina(String codigo) {
		this.disciplinaService.deleteDisciplina(codigo);
	}

	@Override
	public Set<Aluno> findAllAlunoOfDisciplina(String codigo) {
		return this.disciplinaService.findAllAlunoOfDisciplina(codigo);
	}
	
	@Override
	public List<Coordenador> findAllCoordenadores() {
		return this.coordenadorService.findAll();
	}

	@Override
	public Coordenador getCoordenador(String email) {
		return this.coordenadorService.getCoordenador(email);
	}

	@Override
	public void saveCoordenador(Coordenador coordenador) {
		this.coordenadorService.saveCoordenador(coordenador);
	}

}
