package com.example.DndBackend.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.example.DndBackend.Model.Caracter;


public interface CharacterRepository extends CrudRepository<Caracter, String> {
	
	public List<Caracter> findAllByUser(String user);
}
