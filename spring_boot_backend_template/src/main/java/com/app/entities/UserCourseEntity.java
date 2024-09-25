package com.app.entities;

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
public class UserCourseEntity extends BaseEntity{

	 @ManyToOne
	    @JoinColumn(name = "user_id", referencedColumnName = "id")
	    private User user;
	 
//	  @ManyToOne
//	    @JoinColumn(name = "course_id", referencedColumnName = "id")
//	    private CourseType course;
}
