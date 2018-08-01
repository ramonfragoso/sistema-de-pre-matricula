package prematricula.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
public class Coordenador {

	@Id
	private String email;
	
	public Coordenador() {
		
	}
	
	public Coordenador(String email) {
		this.email = email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getEmail() {
		return this.email;
	}
	
}
