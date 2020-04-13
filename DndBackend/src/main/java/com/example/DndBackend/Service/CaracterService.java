package com.example.DndBackend.Service;

import java.util.List;

import com.example.DndBackend.Model.Caracter;

public interface CaracterService {

	public List<Caracter> getCharactersForUser(String user);

	public Caracter addCharacter (Caracter Caracter);

	public Caracter editCharacter (Caracter Caracter);

	public boolean deleteCharacter (String Caracter);

}
