package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Staff extends BaseEntity{
       
	private String email;
	private String username;
	private String password;
	private String phoneno;
	private String address;
	private String staff_id;
	private LocalDateTime createdon;
	

	
}
