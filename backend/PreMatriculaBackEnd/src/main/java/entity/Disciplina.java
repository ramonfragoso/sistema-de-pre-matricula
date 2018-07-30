package entity;

import java.io.Serializable;

import javax.persistence.*;

import enums.Grade;
import enums.TipoDisciplina;

@Entity
public class Disciplina implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -5612366830470062371L;
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long ID;
	private String nome;
	private int periodo;
	private int qtdCreditos;
	@Enumerated(EnumType.STRING)
	private Grade tipoGrade;
	@Enumerated(EnumType.STRING)
	private TipoDisciplina tipoDisciplina;
	
	
	public Disciplina(String nome, int periodo,int qtdCreditos,String tipoGrade,String tipoDisciplina){
		this.nome = nome;
		this.periodo = periodo;
		this.qtdCreditos = qtdCreditos;
		setGrade(tipoGrade);
		setTipoDisciplina(tipoDisciplina);
		
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Long getID() {
		return ID;
	}

	public String getNome() {
		return nome;
	}

	public int getPeriodo() {
		return periodo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((ID == null) ? 0 : ID.hashCode());
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
		if (ID == null) {
			if (other.ID != null)
				return false;
		} else if (!ID.equals(other.ID))
			return false;
		return true;
	}
	
	public void setGrade(String tipoGrade){
		if(tipoGrade.toLowerCase().equals("nova")){
			this.tipoGrade = Grade.NOVA;
		}else if(tipoGrade.toLowerCase().equals("ambas")){
			this.tipoGrade = Grade.AMBAS;
		}else{
			this.tipoGrade = Grade.ANTIGA;
		}
	}
	
	public void setTipoDisciplina(String tipoDisciplina){
		if(tipoDisciplina.toLowerCase().equals("optativa")){
			this.tipoDisciplina = TipoDisciplina.OPTATIVA;
		}else{
			this.tipoDisciplina = TipoDisciplina.OBRIGATORIA;
		}
	}

	
}
