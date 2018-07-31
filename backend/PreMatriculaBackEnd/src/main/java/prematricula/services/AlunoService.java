package prematricula.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import prematricula.entity.Aluno;
import prematricula.entity.Disciplina;
import prematricula.repository.AlunoRepository;

@Service
public interface AlunoService {
	
	public List<Aluno> findAll();
	
	public void saveAluno(Aluno aluno);
	
	public List<Disciplina> findAllDisciplinasAluno(String alunoEmail);
	
	public Aluno findAluno(String alunoEmail);
	
	public boolean isFirstAccess(String alunoEmail);
	
	public List<Aluno> findAllAlunosInDisciplina(String codigoDisciplina);
	
}
