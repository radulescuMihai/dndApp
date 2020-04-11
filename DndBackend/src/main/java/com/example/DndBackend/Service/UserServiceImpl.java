package com.example.DndBackend.Service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DndBackend.Model.User;
import com.example.DndBackend.Repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository turnRepo;
	
	@Override
	public User checkUser(String username){
		return turnRepo.findByName(username);
//		return new ArrayList<Turn>();
	}

	@Override
	public void addUser(User user){
		user.setCreatedDate(LocalDate.now());
		user.setLastEditedDate(LocalDate.now());
		turnRepo.save(user);
	}
	
	public UserServiceImpl() {}
}
