package com.example.DndBackend.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity()
@Table(name="actiuni")
public class Turn {
	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="user")
	private String user;
	
	@Column(name="character_name")
	private String character;
	
	@Column(name="roll")
	private String roll;
	
	@Column(name="action")
	private String action;
	
	@Column(name="target")
	private String target;
	
	@Column(name="modifier")
	private Integer mod;
	
	@Column(name="comment")
	private String comment;
	
	public Turn() {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getRoll() {
		return roll;
	}

	public void setRoll(String roll) {
		this.roll = roll;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getCharacter() {
		return character;
	}

	public void setCharacter(String character) {
		this.character = character;
	}

	public String getTarget() {
		return target;
	}

	public void setTarget(String target) {
		this.target = target;
	}

	public Integer getMod() {
		return mod;
	}

	public void setMod(Integer mod) {
		this.mod = mod;
	}
	
}
