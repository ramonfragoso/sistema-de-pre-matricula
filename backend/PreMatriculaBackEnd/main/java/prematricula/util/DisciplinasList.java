package prematricula.util;

import java.util.List;

public class DisciplinasList {
	
	List<String> codigos;
	
	public DisciplinasList() {
		
	}
	
	public DisciplinasList(List<String> codigos) {
		this.codigos = codigos;
	}
	
	public List<String> getCodigos(){
		return this.codigos;
	}
	
	public void setCodigos(List<String> codigos) {
		this.codigos = codigos;
	}
	
}
