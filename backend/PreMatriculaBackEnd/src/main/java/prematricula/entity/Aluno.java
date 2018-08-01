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

import prematricula.enums.GradeAluno;

@Entity
@Table(name = "Aluno")
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
		if (grade.toLowerCase().equals(GradeAluno.GRADE_NOVA)) {
			this.grade = GradeAluno.NOVA;
		} else if(grade.toLowerCase().equals(GradeAluno.GRADE_ANTIGA)){
			this.grade = GradeAluno.ANTIGA;
		}
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((grade == null) ? 0 : grade.hashCode());
		result = prime * result + ((matricula == null) ? 0 : matricula.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		result = prime * result + ((slugEmail == null) ? 0 : slugEmail.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Aluno other = (Aluno) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (grade != other.grade)
			return false;
		if (matricula == null) {
			if (other.matricula != null)
				return false;
		} else if (!matricula.equals(other.matricula))
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		if (slugEmail == null) {
			if (other.slugEmail != null)
				return false;
		} else if (!slugEmail.equals(other.slugEmail))
			return false;
		return true;
	}
	
	

}
