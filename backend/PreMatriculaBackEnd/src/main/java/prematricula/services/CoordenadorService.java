package prematricula.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import prematricula.entity.Coordenador;
import prematricula.repository.CoordenadorRepository;

@Service
public class CoordenadorService {
	
	@Autowired
	CoordenadorRepository coordenadorRepository;
	
	public List<Coordenador> findAll(){
		return this.coordenadorRepository.findAll();
	}
	
	public Coordenador getCoordenador(String email){
		return coordenadorRepository.findOne(email);
	}
	
	public void saveCoordenador(Coordenador coordenador){
		coordenadorRepository.save(coordenador);
	}

}
