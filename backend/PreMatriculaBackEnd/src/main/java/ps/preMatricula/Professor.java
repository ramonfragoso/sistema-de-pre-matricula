package ps.preMatricula;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Professor {
	@Id
	private String nome;
	private String id;
	
	public Professor(String nome, String id){
		this.nome = nome;
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public String getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Professor [nome=" + nome + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		Professor other = (Professor) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
