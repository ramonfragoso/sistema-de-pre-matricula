package ps.preMatricula;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Disciplina {
	
	@Id
	private String nome;

	private int cargaHoraria;
	
	
	public Disciplina(int cargaHoraria,String nome){
		this.cargaHoraria = cargaHoraria;
		this.nome = nome;

	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
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
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		return true;
	}


	public int getCargaHoraria() {
		return cargaHoraria;
	}


	public String getNome() {
		return nome;
	}
	

}
