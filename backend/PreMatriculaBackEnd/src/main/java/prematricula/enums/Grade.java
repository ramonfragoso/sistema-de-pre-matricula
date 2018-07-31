package prematricula.enums;
public enum Grade{
	NOVA("grade nova"),ANTIGA("grade antiga"),AMBAS("ambas as grades");
	private String tipoGrade;
	Grade(String tipoGrade){
		this.tipoGrade = tipoGrade;
	}
	
	public String getGrade(){
		return this.tipoGrade;
	}
}
