package ps.preMatricula;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Turma{
	
	@Id
	@GeneratedValue
	private int id;
	private Disciplina disciplina;
	private Professor professor;
	private int tamanhoMaximo;
	private int qntdAlunos;
	private static int ZERO = 0;
	
	public Turma(Disciplina disciplina, Professor professor, int id, int tamanhoMaximo){
		this.disciplina = disciplina;
		this.professor = professor;
		this.id = id;
		this.tamanhoMaximo = tamanhoMaximo;
	}

	public Disciplina getDisciplina() {
		return disciplina;
	}

	public Professor getProfessor() {
		return professor;
	}

	public int getId() {
		return id;
	}

	public int getTamanhoMaximo() {
		return tamanhoMaximo;
	}

	public int getQntdAlunos() {
		return qntdAlunos;
	}
	
	public void addAluno(){
		if(qntdAlunos == tamanhoMaximo){
			throw new RuntimeException("Turma cheia");
		}
		qntdAlunos ++;
	}
	
	public void removerAluno(){
		if(qntdAlunos == ZERO){
			throw new RuntimeException("Turma vazia");
		}
		qntdAlunos --;
	}
	
	

}
