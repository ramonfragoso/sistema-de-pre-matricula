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
	@Autowired
	private DisciplinaService disciplinaService;
	@Component
	class DataSetup implements ApplicationRunner {
		@Override
		public void run(ApplicationArguments args) throws Exception {
			Coordenador hugo = new Coordenador("hugo.galvao@ccc.ufcg.edu.br");
			Disciplina fmcc = new Disciplina("1411311","FMCC I",1,4,"nova");
			Disciplina prog1 = new Disciplina("1411180","Programacao I",1,4,"ambas");
			Disciplina lprog1 = new Disciplina("1411180","Laboratorio de Programacao I",1,4,"ambas");
			Disciplina Ic = new Disciplina("1411174","Introducao a Computacao",1,4,"ambas");
			Disciplina fmcc2 = new Disciplina("1411312","FMCC I",2,4,"nova");
			Disciplina prog2 = new Disciplina("1411169","Programacao II",2,4,"ambas"");
			Disciplina lprog2 = new Disciplina ("1411181","Laboratorio de Programacao II",2,4,"ambas");
			Disciplina eda = new Disciplina("1411305","Estrutura de Dados",3,4,"ambas","obrigatoria");
			Disciplina leda = new Disciplina("1411306","Laboratorio de Estrutura de Dados",3,4,"ambas");
			Disciplina logica = new Disciplina("1411307","Logica Para Computacao",3,4,"ambas");
			Disciplina tg = new Disciplina("1411304","Teoria dos Grafos",3,4,"nova");
			Disciplina bd = new Disciplina("1411193","Banco de Dados I",4,4,"ambas");
			Disciplina loac = new Disciplina("1411182","Laboratorio de Organizacao de Computadores",4,4,"ambas");
			Disciplina oac = new Disciplina("1411310","Organizacao de Organizacao e Computadores",4,4,"ambas");
			Disciplina plp = new Disciplina("1411309","Paradigmas de Linguagem de Programacao",4,4,"nova");
			Disciplina psoft = new Disciplina("1411308","Projeto de Software",4,4,"nova");
			Disciplina as = new Disciplina("1411313","Analise de Sistemas",5,4,"nova");
			Disciplina es = new Disciplina("1411314","Engenharia de Software",5,4,"ambas");
			Disciplina redes = new Disciplina("1411314","Redes de Computadores",5,4,"ambas");
			Disciplina tc = new Disciplina("1411171","Teoria da Computacao",5,4,"ambas");
			Disciplina so = new Disciplina("1411192","Sistemas Operacionais",5,4,"ambas");
			Disciplina pc = new Disciplina("1411315","Programacao Concorrente",6,4,"nova");
			Disciplina ia = new Disciplina("1411316","Inteligencia Artificial",6,4,"ambas");
			Disciplina atal = new Disciplina("1411187","Analise e Tecnica de Algoritmos",7,4,"ambas");
			Disciplina comp = new Disciplina("1411189","Compiladores",7,4,"ambas");
			Disciplina p1 = new Disciplina("1411185","Projeto I",8,4,"ambas");
			Disciplina p2 = new Disciplina("1411186","Projeto II",8,4,"ambas");
			Disciplina cdp = new Disciplina("1411356","Ciência de dados preditiva",0,4,"nova");
			Disciplina pf = new Disciplina("1411302","Programacao Funcional",0,4,"nova");			
			coordenadorService.saveCoordenador(hugo);
			disciplinaService.save(fmcc);
			disciplinaService.save(prog1);
			disciplinaService.save(lprog1);
			disciplinaService.save(Ic);
			disciplinaService.save(fmcc2);
			disciplinaService.save(prog2);
			disciplinaService.save(lprog2);
			disciplinaService.save(eda);
			disciplinaService.save(leda);
			disciplinaService.save(logica);
			disciplinaService.save(tg);
			disciplinaService.save(bd);
			disciplinaService.save(loac);
			disciplinaService.save(oac);
			disciplinaService.save(plp));
			disciplinaService.save(psoft);
			disciplinaService.save(as);
			disciplinaService.save(es);
			disciplinaService.save(redes);
			disciplinaService.save(tc);
			disciplinaService.save(so);
			disciplinaService.save(pc);
			disciplinaService.save(ia);
			disciplinaService.save(atal);
			disciplinaService.save(comp);
			disciplinaService.save(p1);
			disciplinaService.save(p2);
			disciplinaService.save(cdp);
			disciplinaService.save(pf);
			
			
		}
		
	}
	public static void main(String[] args) {
		SpringApplication.run(PreMatriculaBackEndApplication.class, args);
	}
}
