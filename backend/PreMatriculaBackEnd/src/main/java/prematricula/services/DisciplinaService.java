package prematricula.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import prematricula.entity.Aluno;
import prematricula.entity.Disciplina;
import prematricula.repository.DisciplinaRepository;

@Service
public class DisciplinaService {
	@Autowired
	DisciplinaRepository disciplinaRepository;
	
	public List<Disciplina> findAll(){
		return this.disciplinaRepository.findAll();
	}
	
	public Disciplina getDisciplina(String codigoDisciplina){
		return this.disciplinaRepository.findOne(codigoDisciplina);
	}
	
	public void saveDisciplina(Disciplina disciplina){
		this.disciplinaRepository.save(disciplina);
	}

	public void deleteDisciplina(String codigo) {
		this.disciplinaRepository.delete(codigo);
	}
	
	public Set<Aluno> findAllAlunoByDisciplina(String codigo){
		return this.disciplinaRepository.findOne(codigo).getAlunos();
	}

	public Set<Aluno> getAlunosFromDisciplina(String codigo) {
		return this.getDisciplina(codigo).getAlunos();
	}

}
