package com.example.DndBackend.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.DndBackend.Model.Turn;


public interface TurnService {

	public List<Turn> getTurns();

	public void addUser(Turn turn);
	
}
