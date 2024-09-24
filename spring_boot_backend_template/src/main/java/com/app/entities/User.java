package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name="Users")
@Entity
public class User extends BaseEntity{
	

	
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	
	@Enumerated(EnumType.STRING)
	private Role role;

	
}
