package entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import enums.Grade;

@Entity
public class Aluno {
	
	@Id
	private String email;
	@Column(unique = true)
	private String matricula;
	private String nome;
	private String periodoEntrada;
	@ManyToMany
	private ArrayList<Disciplina> disciplinas;
	@Enumerated(EnumType.STRING)
	private Grade grade;
	
	public Aluno(String email,String nome, String matricula, String periodoEntrada,String grade){
		this.email = email;
		this.nome = nome;
		this.matricula = matricula;
		this.periodoEntrada = periodoEntrada;
		
	}
	
	@Override
	public String toString() {
		return this.nome + " - " + this.matricula;
	}

	public String getEmail() {
		return email;
	}
	
	public String getMatricula() {
		return matricula;
	}
	public String getPeriodoEntrada() {
		return periodoEntrada;
	}
	
	public void addDisciplina(Disciplina disciplina){
		this.disciplinas.add(disciplina);
	}
	
	public void removerDisciplina(){
		this.disciplinas = new ArrayList<Disciplina>();
	}
	
	public List<Disciplina> getDisciplinas(){
		return this.disciplinas;
	}
	
	
	public void escolherGrade(String grade){
		if(grade.toLowerCase() == "nova"){
			this.grade = Grade.NOVA;
		}else{
			this.grade = Grade.ANTIGA;
		}
	}
	
	public boolean temDisciplina(Disciplina disciplina){
		return this.disciplinas.contains(disciplina);
	}
	
	

	
	
	

}
