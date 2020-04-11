package com.example.DndBackend.Model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@Column(name="name")
	private String name;

	@Column(name="pass")
	private String pass;

	@JsonIgnore
	@Column(name="created_date")
	private LocalDate createdDate;

	@JsonIgnore
	@Column(name="last_edited_date")
	private LocalDate lastEditedDate;
	
	public User() {}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public LocalDate getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDate createdDate) {
		this.createdDate = createdDate;
	}

	public LocalDate getLastEditedDate() {
		return lastEditedDate;
	}

	public void setLastEditedDate(LocalDate lastEditedDate) {
		this.lastEditedDate = lastEditedDate;
	}

}
