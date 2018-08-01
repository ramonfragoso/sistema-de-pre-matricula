package prematricula.entity;

import java.util.List;
import java.util.Set;
import java.util.ArrayList;
import java.util.HashSet;

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
	private Set<Disciplina> disciplinas = new HashSet<>();
	@Enumerated(EnumType.STRING)
	private GradeAluno grade;
	
	@JsonIgnore
	private String slugEmail;
	
	public Aluno() {
		
	}

	public Aluno(String email, String nome, String matricula, String grade) {
		this.email = email;
		this.nome = nome;
		this.matricula = matricula;
		this.setGrade(grade);
		disciplinas = new HashSet<>();
	}
	
	private String generateSlug(String email) {
		String slug = email.split("@")[0];
		slug = slug.replace('.', '_');
		return slug;
	}
	
	public String getSlugEmail() {
		return this.slugEmail;
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
		this.slugEmail = this.generateSlug(email);
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

	public Set<Disciplina> getDisciplinas() {
		return disciplinas;
	}

	public void setDisciplinas(Set<Disciplina> disciplinas2) {
		this.disciplinas = disciplinas2;
	}

	public GradeAluno getGrade() {
		return grade;
	}

}
