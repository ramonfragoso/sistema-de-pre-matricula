package prematricula.entity;

import java.util.List;
import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import prematricula.enums.GradeAluno;
import prematricula.enums.GradeDisciplina;

@Entity
@Table(name = "Aluno")
@EqualsAndHashCode
public class Aluno {

	@Id
	private String email;
	@Column(unique = true)
	private String matricula;
	private String nome;
	@ManyToMany(cascade = { CascadeType.ALL })
	@JoinTable(
		name = "Aluno_Disciplina",
		joinColumns = { @JoinColumn(name = "aluno_id") }, 
		inverseJoinColumns = { @JoinColumn(name = "disciplina_id") }
	)
	@JsonIgnore
	private List<Disciplina> disciplinas = new ArrayList<>();
	@Enumerated(EnumType.STRING)
	private GradeAluno grade;
	
	public Aluno() {
		
	}

	public Aluno(String email, String nome, String matricula, String grade) {
		this.email = email;
		this.nome = nome;
		this.matricula = matricula;
		this.setGrade(grade);
		disciplinas = new ArrayList<>();
	}
	
	@Override
	public String toString() {
		return this.matricula + ": " + this.nome;
	}

	public void setGrade(String grade) {
		if (grade.toLowerCase() == "nova") {
			this.grade = GradeAluno.NOVA;
		} else {
			this.grade = GradeAluno.ANTIGA;
		}
	}
	
	public boolean hasDisciplina(String codigoDisciplina) {
		return this.disciplinas
					.stream()
					.filter(disciplina -> disciplina.getCodigo().equals(codigoDisciplina))
					.count() > 0;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<Disciplina> getDisciplinas() {
		return disciplinas;
	}

	public void setDisciplinas(List<Disciplina> disciplinas2) {
		this.disciplinas = disciplinas2;
	}

	public GradeAluno getGrade() {
		return grade;
	}

}
