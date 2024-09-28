package com.app.dao;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Course;
import com.app.entities.Modules;

public interface ModuleDao extends JpaRepository<Modules, Long>{

	List<Modules> findByCourse(Course course);

	
}
