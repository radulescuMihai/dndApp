package com.example.DndBackend.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DndBackend.Model.Caracter;
import com.example.DndBackend.Model.Turn;
import com.example.DndBackend.Repository.CharacterRepository;
import com.example.DndBackend.Repository.TurnRepository;

@Service
public class CaracterServiceImpl implements CaracterService {

	@Autowired
	private CharacterRepository charRepo;
	
	@Override
	public List<Caracter> getCharactersForUser(String user){

		return charRepo.findAllByUser(user);
//		return new ArrayList<Turn>();
	}

	@Override
	public Caracter addCharacter (Caracter car){
		charRepo.save(car);
		return car;
	}
	
	public Caracter editCharacter (Caracter car) {
		if(charRepo.findById(car.getName()) == null ) {
			return null;
		}
		charRepo.save(car);
		return car;
	}	

	public boolean deleteCharacter (String caracterName) {
		if(charRepo.findById(caracterName) == null ) {
			return false;
		}
		charRepo.deleteById(caracterName);
		return true;
	}
	
	public CaracterServiceImpl() {}
}
