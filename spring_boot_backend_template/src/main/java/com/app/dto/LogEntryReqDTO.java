package com.app.dto;

import java.util.Date;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class LogEntryReqDTO {

	 private Date date;
	    
	    private Date fromTime;
	    
	    private Date toTime;
	    
	    private Long courseId; 
	    
	    private Long moduleId; 
	    
	    private String status;
}

