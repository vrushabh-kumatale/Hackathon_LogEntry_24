package com.app.entities;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

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

//	private String title;
//	private String description;
//	
//	@Column(name = "topic_required", nullable = false)
//	private boolean topicRequired;
//	
//	@Column(name = "group_required", nullable = false)
//	private boolean groupRequired;
	
	private Date date;
	
	@Column(name="from_time")
	private Date fromTime;
	
	@Column(name="to_time")
	private Date toTime;
	
	@ManyToOne
	@JoinColumn(name="course_id")
	private Course course;
	
	@ManyToOne
	@JoinColumn(name="module_id")
	private Modules module;
	
//	@Column(nullable = false)
//    private String type;
	
	
	@Column(nullable = false)
    private String status;
	
}
