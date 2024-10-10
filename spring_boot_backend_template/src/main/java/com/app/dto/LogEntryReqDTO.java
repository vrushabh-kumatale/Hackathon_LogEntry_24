package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class LogEntryReqDTO {

	@JsonFormat(pattern = "yyyy-MM-dd")
	 private String date;
	    
	@JsonFormat(pattern = "HH:mm")
	    private String fromTime;
	    
	@JsonFormat(pattern = "HH:mm")
	    private String toTime;
	    
	    private Long courseId; 
	    
	    private Long moduleId; 
	    
	    private String status;
}

