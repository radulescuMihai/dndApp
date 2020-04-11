package com.example.DndBackend.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.DndBackend.Model.Caracter;
import com.example.DndBackend.Model.Turn;


public interface CaracterService {

	public List<Caracter> getCharactersForUser(String user);

	public Caracter addCharacter (Caracter Caracter);

	public Caracter editCharacter (Caracter Caracter);

	public boolean deleteCharacter (String Caracter);

}
