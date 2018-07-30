package services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entity.Aluno;
import entity.Disciplina;
import repository.AlunoRepository;

@Service
public class AlunoService {
	
	@Autowired
	AlunoRepository alunoRepository;
	
	
	public List<Aluno> getAll(){
		return alunoRepository.findAll();
	}
	
	public void salvarAluno(Aluno aluno){
		alunoRepository.save(aluno);

	}
	
	public List<Disciplina> disciplinasAluno(String email){
		Aluno aluno = acharAluno(email);
		return aluno.getDisciplinas();
		
	}

	
	public Aluno acharAluno(String email){
		return alunoRepository.findById(email).orElse(null);
	}
	
	
	
	public boolean primeiroLogin(String email){
		return !alunoRepository.existsById(email);
	}
	
	public List<Aluno> cursamDisciplina(Disciplina disciplina){
		List<Aluno> alunos = this.getAll();
		List<Aluno> alunosRetorno = new ArrayList<Aluno>();
		for(Aluno aluno:alunos){
			if(aluno.temDisciplina(disciplina)){
				alunosRetorno.add(aluno);
			}
		}
		return alunosRetorno;
	}
	
	public void matricularDisciplinas(String email, Disciplina[] disciplina){
		Aluno aluno = acharAluno(email);
		aluno.removerDisciplina();
		for(int i = 0;i < disciplina.length;i++){
			aluno.addDisciplina(disciplina[i]);
		}
		salvarAluno(aluno);
	}
}
