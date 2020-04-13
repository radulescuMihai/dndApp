package com.example.DndBackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DndBackend.Model.Caracter;
import com.example.DndBackend.Repository.CharacterRepository;

@Service
public class CaracterServiceImpl implements CaracterService {

	@Autowired
	private CharacterRepository charRepo;
	
	@Override
	public List<Caracter> getCharactersForUser(String user){
		List<Caracter> result = charRepo.findAllByUser(user);
		System.out.println("User "+ user + " have " + result.size() + " characters");
		return result;
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