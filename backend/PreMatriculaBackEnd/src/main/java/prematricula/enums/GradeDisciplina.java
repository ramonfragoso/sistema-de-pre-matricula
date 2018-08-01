package prematricula.enums;
public enum GradeDisciplina{
	NOVA("grade nova"),ANTIGA("grade antiga"),AMBAS("ambas as grades");
	
	public static final String GRADE_NOVA = "grade nova";
	public static final String GRADE_ANTIGA = "grade antiga";
	public static final String AMBAS_GRADES = "ambas as grades";
	
	private String tipoGrade;
	GradeDisciplina(String tipoGrade){
		this.tipoGrade = tipoGrade;
	}
	
	public String getGrade(){
		return this.tipoGrade;
	}
}
