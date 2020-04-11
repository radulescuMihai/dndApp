package com.example.DndBackend.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.DndBackend.Model.Turn;


public interface TurnRepository extends CrudRepository<Turn, Integer> {
	
	public List<Turn> findAllByOrderByIdDesc();
}
