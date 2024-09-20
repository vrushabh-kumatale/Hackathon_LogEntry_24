package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Course;
import com.app.service.CourseService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/courses")
@CrossOrigin(origins="http://localhost:3000")
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	@PostMapping
	@Operation(summary= "Course added")
	public ResponseEntity<?> save(@RequestBody Course course) {		
		courseService.saveCourse(course);
		return ResponseEntity.ok("Course added successfully");
	}
	
	@GetMapping
	@Operation(summary= "Find all courses")
	public ResponseEntity<?> findAll() {		
		return ResponseEntity.ok(courseService.findall());
	}

	@DeleteMapping("/{id}")
	@Operation(summary= "delete a particular course")
	public ResponseEntity<?> deleteById(@PathVariable long id) {
		courseService.deleteCourse(id);
		return ResponseEntity.ok("Deleted successfully");
	}
	
}
