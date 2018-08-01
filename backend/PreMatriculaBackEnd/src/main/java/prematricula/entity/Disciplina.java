package prematricula.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import prematricula.enums.GradeDisciplina;
import prematricula.enums.TipoDisciplina;


@Entity
@Table(name = "Disciplina")
@EqualsAndHashCode
public class Disciplina {

	@Id
	private String codigo;
	private String nome;
	private int periodo;
	private int qtdCreditos;
	@Enumerated(EnumType.STRING)
	private GradeDisciplina tipoGrade;
	@Enumerated(EnumType.STRING)
	private TipoDisciplina tipoDisciplina;
	@ManyToMany(mappedBy = "disciplinas")
	private List<Aluno> alunos = new ArrayList<>();
	
	public Disciplina() {
		
	}

	public Disciplina(String codigo, String nome, int periodo, int qtdCreditos, String tipoGrade) {
		this.codigo = codigo;
		this.nome = nome;
		this.periodo = periodo;
		this.qtdCreditos = qtdCreditos;
		setGrade(tipoGrade);
		setTipoDisciplina(periodo);
	}

	public void setGrade(String tipoGrade) {
		if (tipoGrade.toLowerCase().equals("nova")) {
			this.tipoGrade = GradeDisciplina.NOVA;
		} else if (tipoGrade.toLowerCase().equals("ambas")) {
			this.tipoGrade = GradeDisciplina.AMBAS;
		} else {
			this.tipoGrade = GradeDisciplina.ANTIGA;
		}
	}

	public void setTipoDisciplina(int periodo) {
		int optativa = 0;
		if (periodo == optativa) {
			this.tipoDisciplina = TipoDisciplina.OPTATIVA;
		} else {
			this.tipoDisciplina = TipoDisciplina.OBRIGATORIA;
		}
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getPeriodo() {
		return periodo;
	}

	public void setPeriodo(int periodo) {
		this.periodo = periodo;
	}

	public int getQtdCreditos() {
		return qtdCreditos;
	}

	public void setQtdCreditos(int qtdCreditos) {
		this.qtdCreditos = qtdCreditos;
	}

	public TipoDisciplina getTipoDisciplina() {
		return tipoDisciplina;
	}

	public void setTipoDisciplina(TipoDisciplina tipoDisciplina) {
		this.tipoDisciplina = tipoDisciplina;
	}

	public GradeDisciplina getTipoGrade() {
		return tipoGrade;
	}
	
	public List<Aluno> getAlunos(){
		return alunos;
	}
	
	

}
