package prematricula;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import prematricula.entity.Coordenador;
import prematricula.services.CoordenadorService;

@SpringBootApplication
public class PreMatriculaBackEndApplication {

	@Autowired
	private CoordenadorService coordenadorService;
	
	@Component
	class DataSetup implements ApplicationRunner {

		@Override
		public void run(ApplicationArguments args) throws Exception {
			Coordenador hugo = new Coordenador("hugo.galvao@ccc.ufcg.edu.br");
			coordenadorService.saveCoordenador(hugo);
		}
		
	}
	public static void main(String[] args) {
		SpringApplication.run(PreMatriculaBackEndApplication.class, args);
	}
}
