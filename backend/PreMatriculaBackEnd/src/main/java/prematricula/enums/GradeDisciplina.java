package prematricula.enums;
public enum GradeDisciplina{
	NOVA("grade nova"),ANTIGA("grade antiga"),AMBAS("ambas as grades");
	private String tipoGrade;
	GradeDisciplina(String tipoGrade){
		this.tipoGrade = tipoGrade;
	}
	
	public String getGrade(){
		return this.tipoGrade;
	}
}
