package com.example.DndBackend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.DndBackend.Model.User;
import com.example.DndBackend.Service.UserService;

@CrossOrigin(origins = "http://86.126.16.228:4200", maxAge = 3600)
@RestController
public class UsersController {

	@Autowired
	private UserService usrServ;
	
	@GetMapping(value ="/user/{name}", produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<?> checkUser(@PathVariable(name ="name") String name){
		return new ResponseEntity<User>(usrServ.checkUser(name), HttpStatus.OK);
	}
	
	@PostMapping(value="/user", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> addUser(@RequestBody User newUser){
		System.out.println("Server a primit comanda! Add user:" + newUser.getName());
		usrServ.addUser(newUser);
		return new ResponseEntity<User>( newUser, HttpStatus.OK);
	}

//	@RequestMapping(value="/{id}", method = RequestMethod.PUT)
//	List<User> updateUser(){
//		return null;
//	}

//	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
//	List<User> deleteUser(){
//		return null;
//	}
}
