package prematricula.enums;

public enum GradeAluno {
	
	NOVA("grade nova"),ANTIGA("grade antiga");
	
	public static final String GRADE_NOVA = "NOVA";
	public static final String GRADE_ANTIGA = "ANTIGA";
	
	private String tipoGrade;
	GradeAluno(String tipoGrade){
		this.tipoGrade = tipoGrade;
	}
	
	public String getGrade(){
		return this.tipoGrade;
	}
}
