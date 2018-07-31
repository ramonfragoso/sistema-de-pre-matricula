package prematricula.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import prematricula.entity.Coordenador;
import prematricula.repository.CoordenadorRepository;

@Service
public class CoordenadorService {
	
	@Autowired
	CoordenadorRepository coordenadorRepository;
	
	public boolean isCoordenador(String email){
		return coordenadorRepository.findOne(email) != null;
	}
	
	public void saveCoordenador(Coordenador coordenador){
		coordenadorRepository.save(coordenador);
	}

}
