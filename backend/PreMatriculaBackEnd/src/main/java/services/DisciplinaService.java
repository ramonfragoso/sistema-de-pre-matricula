package services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entity.Disciplina;
import repository.DisciplinaRepository;

@Service
public class DisciplinaService {
	@Autowired
	DisciplinaRepository disciplinaRepository;
	
	public List<Disciplina> findAll(){
		return this.disciplinaRepository.findAll();
	}
	
	public Disciplina getDisciplina(Long id){
		return this.disciplinaRepository.findById(id).orElse(null);
	}
	
	public void criarDisciplina(Disciplina disciplina){
		disciplinaRepository.save(disciplina);
	}

}
