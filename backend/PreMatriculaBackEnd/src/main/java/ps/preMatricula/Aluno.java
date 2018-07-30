package ps.preMatricula;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Aluno {
	
	@Id
	private String matricula;
	private String nome;
	private String senha;
	private StatusMatricula statusMatricula;
	private int qtdCreditos;
	
	public Aluno(String nome, String dataAniversario,String matricula){
		this.nome = nome;
		this.senha = dataAniversario;
		this.matricula = matricula;
		this.qtdCreditos = 0;
		this.statusMatricula = new Valido();
		
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((matricula == null) ? 0 : matricula.hashCode());
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
		if (matricula == null) {
			if (other.matricula != null)
				return false;
		} else if (!matricula.equals(other.matricula))
			return false;
		return true;
	}

	public String getNome() {
		return nome;
	}

	public String getSenha() {
		return senha;
	}

	public String getMatricula() {
		return matricula;
	}
	
	public void altCreditos(int creditos){
		this.qtdCreditos += creditos;
		calculaStatus();
	}
	
	private void calculaStatus(){
		if(this.qtdCreditos > 24 || this.qtdCreditos < 12){
			this.statusMatricula = new Invalido();
		}
		else{
			this.statusMatricula = new Valido();
		}
	}
}
