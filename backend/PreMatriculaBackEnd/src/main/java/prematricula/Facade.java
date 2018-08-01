package prematricula;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import prematricula.entity.Aluno;
import prematricula.entity.Coordenador;
import prematricula.entity.Disciplina;
import prematricula.services.AlunoService;
import prematricula.services.CoordenadorService;
import prematricula.services.DisciplinaService;
import prematricula.util.DisciplinasList;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class Facade {

	@GetMapping("/hello")
	public String hello() {
		return "hello";
	}
}
