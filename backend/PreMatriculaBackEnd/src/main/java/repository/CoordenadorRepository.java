package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.Coordenador;
@Repository
public interface CoordenadorRepository extends JpaRepository<Coordenador, String>{

}
