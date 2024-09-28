package com.app.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class LogEntity extends BaseEntity {

	private LocalDate Date;
	
	private LocalTime startTime;
	
	private LocalTime endTime;
	
//	@ManyToOne
//	@JoinColumn(name = "course_id")
//	private CourseType course;
//	
	@ManyToOne
	@JoinColumn(name = "module_id")
	private Modules module;
	
	@ManyToOne
	@JoinColumn(name = "entry_type_id")
	private EntryType entryType;
	
	@ManyToOne
	@JoinColumn(name = "group_id")
	private GroupEntity group;
	
	private String remark;
	
	private String logStatus;
	
}
