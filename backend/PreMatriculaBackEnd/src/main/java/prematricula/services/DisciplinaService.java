package prematricula.services;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import prematricula.entity.Aluno;
import prematricula.entity.Disciplina;
import prematricula.repository.DisciplinaRepository;
import prematricula.util.DisciplinasList;

@Service
public class DisciplinaService {
	@Autowired
	DisciplinaRepository disciplinaRepository;
	
	public List<Disciplina> findAll(){
		return this.disciplinaRepository.findAll();
	}
	
	public Disciplina findDisciplina(String codigoDisciplina) {
		return this.disciplinaRepository
					.findById(codigoDisciplina)
					.orElse(null);
	}
	
	public void saveDisciplina(Disciplina disciplina){
		this.disciplinaRepository.save(disciplina);
	}

	public void deleteDisciplina(String codigo) {
		this.disciplinaRepository.deleteById(codigo);
	}
	
	public Set<Aluno> findAllAlunoByDisciplina(String codigo){
		return this.disciplinaRepository.findById(codigo).orElse(new Disciplina()).getAlunos();
	}


	public Set<Disciplina> getDisciplinas(DisciplinasList disciplinasList) {
		Set<Disciplina> disciplinas = new HashSet<>();
		disciplinasList.getCodigos()
						.stream()
						.forEach(codigo -> disciplinas.add(this.findDisciplina(codigo)));
		return disciplinas;
	}

	public Set<Aluno> findAllAlunoOfDisciplina(String codigo) {
		return this.findDisciplina(codigo).getAlunos();
	}


}
