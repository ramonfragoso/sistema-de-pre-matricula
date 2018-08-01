package prematricula.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import prematricula.entity.Aluno;
import prematricula.entity.Disciplina;
import prematricula.repository.AlunoRepository;

@Service
public class AlunoService {
	
	@Autowired
	AlunoRepository alunoRepository;
	
	public List<Aluno> findAll(){
		return this.alunoRepository.findAll();
	}
	
	public void saveAluno(Aluno aluno) {
		alunoRepository.save(aluno);
	}
	
	
	public Set<Disciplina> findAllDisciplinasAluno(String slug){
		return this.findAluno(slug).getDisciplinas();
	}
	
	
	public Aluno findAluno(String slug) {
		return alunoRepository
				.findAll()
				.stream()
				.filter(aluno -> aluno.getSlugEmail().equals(slug))
				.findAny()
				.orElse(null);
	}
	
	
	
	public void deleteAluno(String slug) {
		Aluno aluno = this.findAluno(slug);
		this.alunoRepository.delete(aluno);
	}
	
	public boolean isFirstAccess(String slug) {
		return this.findAluno(slug) == null;
	}

	public void addDisciplinasToAluno(String slug, Set<Disciplina> disciplinas) {
		Aluno aluno = this.findAluno(slug);
		aluno.setDisciplinas(disciplinas);
		this.alunoRepository.save(aluno);
	}

	public Set<Disciplina> getDisciplinasFromAluno(String slug) {
		return this.findAluno(slug).getDisciplinas();
	}
	
}
