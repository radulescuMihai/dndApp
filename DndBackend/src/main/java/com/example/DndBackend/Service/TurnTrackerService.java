package com.example.DndBackend.Service;

import org.springframework.beans.factory.annotation.Autowired;

public class TurnTrackerService {
	@Autowired
	private TurnService turnServ;
	private int turnNr;
	private static TurnTrackerService instance = new TurnTrackerService();
	
	private TurnTrackerService() {
		turnNr = turnServ.getTurns().get(0).getId();
	}
	
	public static TurnTrackerService getinstance() {
		return instance;
	}
	
	public boolean hasTurnChanged(int id) {
		while(turnNr == id) {
			try{Thread.sleep(500);}
			catch(Exception e) {}
		}
		return true;
	}
	
	public void changeTurn() {
		turnNr++;
	}

}
