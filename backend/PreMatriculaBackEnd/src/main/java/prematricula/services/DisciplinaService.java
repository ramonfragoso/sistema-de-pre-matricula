package prematricula.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		disciplinaRepository.save(disciplina);
	}

}
