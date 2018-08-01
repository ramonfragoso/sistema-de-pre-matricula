package prematricula.enums;

public enum GradeAluno {
	NOVA("grade nova"),ANTIGA("grade antiga");
	private String tipoGrade;
	GradeAluno(String tipoGrade){
		this.tipoGrade = tipoGrade;
	}
	
	public String getGrade(){
		return this.tipoGrade;
	}
}
