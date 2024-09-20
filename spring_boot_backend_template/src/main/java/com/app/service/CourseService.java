package com.app.service;

import java.util.List;

import com.app.entities.Course;

public interface CourseService {

public void saveCourse(Course comp);
	
	public List<Course> findall();
	
	public Course findById(long id);
	
	public void deleteCourse(long id);
}
