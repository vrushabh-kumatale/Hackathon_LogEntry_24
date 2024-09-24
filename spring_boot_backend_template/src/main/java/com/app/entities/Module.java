package com.app.entities;

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

public class Module extends BaseEntity{

	private String moduleName;
	
	private int theoryHrs;
	
	private int labHrs;
	
	private String moduleRouterName;
}
