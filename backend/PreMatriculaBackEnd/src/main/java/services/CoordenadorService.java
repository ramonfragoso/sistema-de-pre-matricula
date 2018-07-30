package services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entity.Coordenador;
import repository.CoordenadorRepository;

@Service
public class CoordenadorService {
	
	@Autowired
	CoordenadorRepository coordenadorRepository;
	
	public boolean ehCoordenador(String email){
		return coordenadorRepository.existsById(email);
	}
	
	public void criarCoordenador(Coordenador coordenador){
		coordenadorRepository.save(coordenador);
	}

}
