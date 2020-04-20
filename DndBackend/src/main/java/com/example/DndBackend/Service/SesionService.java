package com.example.DndBackend.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.DndBackend.Model.Caracter;
import com.example.DndBackend.Model.Sesion;

public class SesionService {
	
	private static SesionService tracker = new SesionService();
	
	private  Map<String, Sesion> sesions;
	
	
	private SesionService() {
		sesions = new HashMap<>();
	}
	
	public static SesionService getInstance() {
		return tracker;
	}
	
	public void addHost(String host, String campaignName) {
		sesions.put(host, new Sesion(host, campaignName) );
	}
	
	public Sesion[] getHosts(){
		return sesions.values().toArray( new Sesion[sesions.size()] );
	}
	
	public List<Caracter> getAllCaracters(String host){
		return sesions.get(host).getPlayers();
	}

	public void closeHost(String host) {
		sesions.remove(host);
	}
	
	public boolean isHostOn(String host, String campaignName) {
		return sesions.get(host) != null ? sesions.get(host).getCampaignName().equals(campaignName) : false;
	}
	
	public List<Caracter> joinAtHost(String host, Caracter player) throws Exception {
		if (sesions.get(host) == null ) {
			System.out.println("Host "+host+ " was not found!");
			throw new Exception("Host "+host+ " was not found!");
		}
		sesions.get(host).addPlayer(player);
		return sesions.get(host).getPlayers();
	}

	public void leaveHost(String host, Caracter player) {
		sesions.get(host).getPlayers().remove(player);
	}

}
