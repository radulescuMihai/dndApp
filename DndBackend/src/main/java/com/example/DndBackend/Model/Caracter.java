package com.example.DndBackend.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="characters")
public class Caracter {
	
	@Id
	@Column(name="name")
	private String name;

	@Column(name="hp")
	private Integer hp;

	@Column(name="current_hp")
	private Integer currentHp;

	@Column(name="temp_hp")
	private Integer tempHp;

	@Column(name="ac")
	private Integer ac;

	@Column(name="initiative")
	private Integer initiative;

	@Column(name="speed")
	private Integer speed;

	@Column(name="proficiency")
	private Integer prof;

	@Column(name="hp_dice_nr")
	private Integer hpDiceNr;

	@Column(name="hp_dice_left")
	private Integer hpDiceLeft;

	@Column(name="player")
	private String user;

	@Column(name="race")
	private String race;

	@Column(name="class")
	private String clas;

	@Column(name="lvl")
	private Integer lvl;

	@Column(name="aligment")
	private String aligment;

	@Column(name="experience")
	private Integer experience;
	
	public Caracter() {}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getHp() {
		return hp;
	}

	public void setHp(Integer hp) {
		this.hp = hp;
	}

	public Integer getCurrentHp() {
		return currentHp;
	}

	public void setCurrentHp(Integer currentHp) {
		this.currentHp = currentHp;
	}

	public Integer getTempHp() {
		return tempHp;
	}

	public void setTempHp(Integer tempHp) {
		this.tempHp = tempHp;
	}

	public Integer getAc() {
		return ac;
	}

	public void setAc(Integer ac) {
		this.ac = ac;
	}

	public Integer getInitiative() {
		return initiative;
	}

	public void setInitiative(Integer initiative) {
		this.initiative = initiative;
	}

	public Integer getSpeed() {
		return speed;
	}

	public void setSpeed(Integer speed) {
		this.speed = speed;
	}

	public Integer getProf() {
		return prof;
	}

	public void setProf(Integer prof) {
		this.prof = prof;
	}

	public Integer getHpDiceNr() {
		return hpDiceNr;
	}

	public void setHpDiceNr(Integer hpDiceNr) {
		this.hpDiceNr = hpDiceNr;
	}

	public Integer getHpDiceLeft() {
		return hpDiceLeft;
	}

	public void setHpDiceLeft(Integer hpDiceLeft) {
		this.hpDiceLeft = hpDiceLeft;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getRace() {
		return race;
	}

	public void setRace(String race) {
		this.race = race;
	}

	public String getClas() {
		return clas;
	}

	public void setClas(String clas) {
		this.clas = clas;
	}

	public Integer getLvl() {
		return lvl;
	}

	public void setLvl(Integer lvl) {
		this.lvl = lvl;
	}

	public String getAligment() {
		return aligment;
	}

	public void setAligment(String aligment) {
		this.aligment = aligment;
	}

	public Integer getExperience() {
		return experience;
	}

	public void setExperience(Integer experience) {
		this.experience = experience;
	}
	
	
}
