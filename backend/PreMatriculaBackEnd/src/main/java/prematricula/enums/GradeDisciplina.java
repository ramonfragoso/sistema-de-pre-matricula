package prematricula.enums;
public enum GradeDisciplina{
	NOVA("grade nova"),ANTIGA("grade antiga"),AMBAS("ambas as grades");
	
	public static final String GRADE_NOVA = "NOVA";
	public static final String GRADE_ANTIGA = "ANTIGA";
	public static final String AMBAS_GRADES = "AMBAS";
	
	private String tipoGrade;
	GradeDisciplina(String tipoGrade){
		this.tipoGrade = tipoGrade;
	}
	
	public String getGrade(){
		return this.tipoGrade;
	}
}
