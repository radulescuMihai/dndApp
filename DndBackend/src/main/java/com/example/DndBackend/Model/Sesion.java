package com.example.DndBackend.Model;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class Sesion {
	private String hostName;
	private String campaignName;
	private List<Caracter> players;
	
	public Sesion() {}
	
	public Sesion(String hostName, String campaignName) {
		this.hostName = hostName;
		this.campaignName = campaignName;
		this.players = new ArrayList<Caracter>();
		}

	public String getHostName() {
		return hostName;
	}

	public void setHostName(String hostName) {
		this.hostName = hostName;
	}

	public String getCampaignName() {
		return campaignName;
	}

	public void setCampaignName(String campaignName) {
		this.campaignName = campaignName;
	}

	public List<Caracter> getPlayers() {
		return players;
	}

	public void addPlayer(Caracter player) {
		for (Caracter p : players ) {
			if(p.equals(player))
				return;
		}
		this.players.add(player);
	}

	public void setPlayers(List<Caracter> players) {
		this.players = players;
	}

}
