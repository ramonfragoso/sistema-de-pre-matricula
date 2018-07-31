package prematricula.services;

import java.util.ArrayList;
import java.util.List;

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
	
	
	public List<Disciplina> findAllDisciplinasAluno(String alunoEmail){
		return this.findAluno(alunoEmail).getDisciplinas();
	}
	
	
	public Aluno findAluno(String alunoEmail) {
		return alunoRepository.findOne(alunoEmail);
	}
	
	
	
	public void deleteAluno(String email) {
		this.alunoRepository.delete(email);
	}
	
	public boolean isFirstAccess(String alunoEmail) {
		return this.findAluno(alunoEmail) == null;
	}
	
	
	public List<Aluno> findAllAlunosInDisciplina(String codigoDisciplina){
		List<Aluno> alunos = this.findAll();
		List<Aluno> alunosInDisciplina = new ArrayList<Aluno>();
		for(Aluno aluno:alunos){
			if(aluno.hasDisciplina(codigoDisciplina)){
				alunosInDisciplina.add(aluno);
			}
		}
		return alunosInDisciplina;
	}
	
}
