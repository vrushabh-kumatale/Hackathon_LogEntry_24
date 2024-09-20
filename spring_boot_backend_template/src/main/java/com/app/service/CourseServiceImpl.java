package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CourseDao;
import com.app.entities.Course;

@Service
@Transactional
public class CourseServiceImpl implements CourseService{

	@Autowired
	private CourseDao courseDao;
	
	@Override
	public void saveCourse(Course course) {
		courseDao.save(course);
		
	}

	@Override
	public List<Course> findall() {
		
		return courseDao.findAll();
	}

	@Override
	public Course findById(long id) {
		
		return courseDao.getById(id);
	}

	@Override
	public void deleteCourse(long id) {
		courseDao.deleteById(id);
		
	}
}
