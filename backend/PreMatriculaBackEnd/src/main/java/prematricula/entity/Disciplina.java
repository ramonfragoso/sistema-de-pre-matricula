package prematricula.entity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	
	private final int periodoOptativa = 0;

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
	@JsonIgnore
	private Set<Aluno> alunos;
	
	public Disciplina() {
		
	}

	public Disciplina(String codigo, String nome, int periodo, int qtdCreditos, String tipoGrade) {
		this.codigo = codigo;
		this.nome = nome;
		this.periodo = periodo;
		this.qtdCreditos = qtdCreditos;
		setGrade(tipoGrade);
		setTipoDisciplina(periodo);
		this.alunos = new HashSet<>();
	}

	public void setGrade(String tipoGrade) {
		if (tipoGrade.toLowerCase().equals(GradeDisciplina.GRADE_NOVA)) {
			this.tipoGrade = GradeDisciplina.NOVA;
		} else if (tipoGrade.toLowerCase().equals(GradeDisciplina.AMBAS_GRADES)) {
			this.tipoGrade = GradeDisciplina.AMBAS;
		} else if (tipoGrade.toLowerCase().equals(GradeDisciplina.ANTIGA)) {
			this.tipoGrade = GradeDisciplina.ANTIGA;
		}
	}

	public void setTipoDisciplina(int periodo) {
		if (periodo == this.periodoOptativa) {
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
	
	public Set<Aluno> getAlunos(){
		return alunos;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((codigo == null) ? 0 : codigo.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		result = prime * result + periodo;
		result = prime * result + qtdCreditos;
		result = prime * result + ((tipoDisciplina == null) ? 0 : tipoDisciplina.hashCode());
		result = prime * result + ((tipoGrade == null) ? 0 : tipoGrade.hashCode());
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
		Disciplina other = (Disciplina) obj;
		if (codigo == null) {
			if (other.codigo != null)
				return false;
		} else if (!codigo.equals(other.codigo))
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		if (periodo != other.periodo)
			return false;
		if (qtdCreditos != other.qtdCreditos)
			return false;
		if (tipoDisciplina != other.tipoDisciplina)
			return false;
		if (tipoGrade != other.tipoGrade)
			return false;
		return true;
	}
	
	

}
