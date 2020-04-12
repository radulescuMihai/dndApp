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

import com.example.DndBackend.Model.Turn;
import com.example.DndBackend.Service.TurnService;
import com.example.DndBackend.Service.TurnTrackerService;

@CrossOrigin(origins = "http://86.126.16.228:4200", maxAge = 3600)
@RestController
public class TurnController {
	
	private static final String url = "/turns";
	
	@Autowired
	private TurnService turnServ;
	
//	private TurnTrackerService tracker = TurnTrackerService.getinstance();

	@GetMapping(value = url, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Turn>> getTurns(){
		return new ResponseEntity<List<Turn>>(turnServ.getTurns(), HttpStatus.OK);
	}

//	@GetMapping(value = url + "/track/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<Boolean> getChange(@PathVariable(name ="id") int id){
//		System.out.println("Tracking change... ");
//		return new ResponseEntity<Boolean>(tracker.hasTurnChanged(id), HttpStatus.OK);
//	}
	
	@PostMapping(value = url, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> addTurn(@RequestBody Turn newTurn){
		System.out.println("Recived turn: "+ newTurn.getId());
		turnServ.addTurn(newTurn);
//		tracker.changeTurn();
		return new ResponseEntity<Turn>( newTurn, HttpStatus.OK);
	}

//	@PutMapping(value= url+"/{id}")
//	public void updateTurn(){
//	}
//
//	@DeleteMapping(value= url+"/{id}")
//	public void deleteTurn(){
//		
//	}

}
