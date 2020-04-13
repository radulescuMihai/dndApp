package com.example.DndBackend.Service;

import java.util.List;

import com.example.DndBackend.Model.Turn;


public interface TurnService {

	public List<Turn> getTurns();

	public void addTurn(Turn turn);
	
}
