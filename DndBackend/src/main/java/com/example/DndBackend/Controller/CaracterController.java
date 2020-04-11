package com.example.DndBackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import com.example.DndBackend.Model.Caracter;
import com.example.DndBackend.Service.CaracterService;

@CrossOrigin(origins = "http://86.126.16.228:4200", maxAge = 3600)
@RestController
public class CaracterController {
	
	private static final String caracterUrl = "/char";
	
	@Autowired
	private CaracterService carServ;

	@GetMapping(value = caracterUrl + "/{user}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Caracter>> getCharactersForUser(@PathVariable(name ="user") String user){
		System.out.println("Server a primit comanda: GET cars for " + user);
		return new ResponseEntity<List<Caracter>>(carServ.getCharactersForUser(user), HttpStatus.OK);
	}
	
	@PostMapping(value = caracterUrl , consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> addCaracter(@RequestBody Caracter newCar){
		System.out.println("Server a primit comanda! Add char :" + newCar.getName());
		carServ.addCharacter(newCar);
		return new ResponseEntity<Caracter>( newCar, HttpStatus.OK);
	}

	@PutMapping(value = caracterUrl , consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> updateCaracter(@RequestBody Caracter editChar){
		System.out.println("Server a primit comanda! Edit char :" + editChar.getName()+ " lvl " + editChar.getLvl());
		
		carServ.editCharacter(editChar);
		return new ResponseEntity<Caracter>( editChar, HttpStatus.OK);
	}

	@DeleteMapping(value = caracterUrl + "/{name}")
	public ResponseEntity<?> deleteCaracter(@PathVariable(name ="name") String name){
		
		carServ.deleteCharacter(name);
		return new ResponseEntity<String>( "Deleted Succesfully!", HttpStatus.OK);
	}

}
