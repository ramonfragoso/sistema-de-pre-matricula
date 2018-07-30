package entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Coordenador implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -7727372820348074529L;
	@Id
	private String email;
	
	public Coordenador(String email){
		this.email = email;
	}
	
	public String getEmail(){
		return this.email;
	}
}
