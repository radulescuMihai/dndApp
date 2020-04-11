package com.example.DndBackend.Repository;

import org.springframework.data.repository.CrudRepository;
import com.example.DndBackend.Model.User;


public interface UserRepository extends CrudRepository<User, String> {
	
	public User findByName(String name);
}
