package com.app.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ModulesDTO {

    private String moduleName;
   
    private long course_id;
	
	private int theoryHrs;
	
	private int labHrs;
	
	private String moduleRouterName;
}
