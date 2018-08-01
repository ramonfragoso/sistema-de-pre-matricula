package prematricula.enums;

public enum TipoDisciplina {
	OPTATIVA("optativa"),OBRIGATORIA("obrigatoria");
	
	private static final String DISCIPLINA_OPTATIVA = "optativa";
	private static final String DISCIPLINA_OBRIGATORIA = "obrigatoria";
	
	private String tipo;
	TipoDisciplina(String tipo){
		this.tipo = tipo;
	}
	public String getTipo(){
		return this.tipo;
	}
}
