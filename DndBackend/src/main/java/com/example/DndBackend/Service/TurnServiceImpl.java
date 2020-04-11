package com.example.DndBackend.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DndBackend.Model.Turn;
import com.example.DndBackend.Repository.TurnRepository;

@Service
public class TurnServiceImpl implements TurnService {

	@Autowired
	private TurnRepository turnRepo;
	
	@Override
	public List<Turn> getTurns(){
		if(turnRepo == null)
			System.out.println("\n Repo autowired failed! \n");
		return turnRepo.findAllByOrderByIdDesc();
//		return new ArrayList<Turn>();
	}

	@Override
	public void addTurn(Turn turn){
		turnRepo.save(turn);
	}
	
	public TurnServiceImpl() {}
}
