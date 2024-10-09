package com.app.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "log_entry")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class LogEntry extends BaseEntity{

	
	private String date;
	
	@Column(name="from_time")
	private String fromTime;
	
	@Column(name="to_time")
	private String toTime;
	
	@ManyToOne
	@JoinColumn(name="course_id")
	private Course course;
	
	@ManyToOne
	@JoinColumn(name="module_id")
	private Modules module;
	
   //private String groupName;
	
	
	@Column(nullable = false)
    private String status;
	
}
