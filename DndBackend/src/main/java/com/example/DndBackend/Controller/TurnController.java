package com.example.DndBackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import com.example.DndBackend.Model.Turn;
import com.example.DndBackend.Service.TurnService;

@CrossOrigin(origins = "http://86.126.16.228:4200", maxAge = 3600)
@RestController
public class TurnController {
	
	@Autowired
	private TurnService turnServ;

	@GetMapping(value ="/turns", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Turn>> getTurns(){
//		System.out.println("Server a primit comanda: GET turns!");
		return new ResponseEntity<List<Turn>>(turnServ.getTurns(), HttpStatus.OK);
	}
	
	@PostMapping(value="/addturns", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> addTurn(@RequestBody Turn newTurn){
//		System.out.println("Server a primit comanda! Add turn:" + newTurn.getUser());
		turnServ.addTurn(newTurn);
		return new ResponseEntity<Turn>( newTurn, HttpStatus.OK);
	}

	@PutMapping(value="/{id}")
	public void updateTurn(){
	}

	@DeleteMapping(value="/{id}")
	public void deleteTurn(){
		
	}

}
