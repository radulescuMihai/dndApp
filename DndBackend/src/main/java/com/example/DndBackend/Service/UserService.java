package com.example.DndBackend.Service;

import com.example.DndBackend.Model.User;

public interface UserService {

	public User checkUser(String username);

	public void addUser(User user);
	
}
