package enums;

public enum TipoDisciplina {
	OPTATIVA("optativa"),OBRIGATORIA("obrigatoria");
	
	private String tipo;
	TipoDisciplina(String tipo){
		this.tipo = tipo;
	}
	public String getTipo(){
		return this.tipo;
	}
}
