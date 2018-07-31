package prematricula.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import prematricula.entity.Aluno;
import prematricula.entity.Disciplina;
import prematricula.repository.AlunoRepository;

@Service
public class AlunoServiceImp implements AlunoService {
	
	@Autowired
	AlunoRepository alunoRepository;
	
	@Override
	public List<Aluno> findAll(){
		return this.findAll();
	}
	
	@Override
	public void saveAluno(Aluno aluno) {
		alunoRepository.save(aluno);
	}
	
	@Override
	public List<Disciplina> findAllDisciplinasAluno(String alunoEmail){
		return this.findAluno(alunoEmail).getDisciplinas();
	}
	
	@Override
	public Aluno findAluno(String alunoEmail) {
		return alunoRepository.findOne(alunoEmail);
	}
	
	@Override
	public boolean isFirstAccess(String alunoEmail) {
		return this.findAluno(alunoEmail) == null;
	}
	
	@Override
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
