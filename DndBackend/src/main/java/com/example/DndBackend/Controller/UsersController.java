package com.example.DndBackend.Controller;

import java.util.*;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.DndBackend.Model.User;

//@RestController
//@RequestMapping("/users")
public class UsersController {

	@RequestMapping(value="/all", method = RequestMethod.GET)
	List<User> getUsers(){
		return null;
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.POST)
	List<User> addUser(){
		return null;
	}

	@RequestMapping(value="/{id}", method = RequestMethod.PUT)
	List<User> updateUser(){
		return null;
	}

	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
	List<User> deleteUser(){
		return null;
	}
}
