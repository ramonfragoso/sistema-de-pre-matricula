package prematricula.facade;

import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;

import prematricula.entity.Aluno;
import prematricula.entity.Coordenador;
import prematricula.entity.Disciplina;
import prematricula.util.DisciplinasList;

@Service
public interface OrdenarServiceFacade {

	public List<Aluno> findAllAlunos();
	public void saveAluno(Aluno aluno);
	public Aluno findAluno(String slug);
	public void deleteAluno(String slug);
	public void addDisciplinasToAluno(String slug, DisciplinasList disciplinasList);
	public Set<Disciplina> findAllDisciplinasOfAluno(String slug);
	
	public List<Disciplina> findAllDisciplinas();
	public Disciplina findDisciplina(String codigoDisciplina);
	public void saveDisciplina(Disciplina disciplina);
	public void deleteDisciplina(String codigo);
	public Set<Aluno> findAllAlunoOfDisciplina(String codigo);
	
	public List<Coordenador> findAllCoordenadores();
	public Coordenador getCoordenador(String email);
	public void saveCoordenador(Coordenador coordenador);
}
