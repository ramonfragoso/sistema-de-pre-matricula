package prematricula.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import prematricula.entity.Aluno;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, String>{

}
