package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Course;
import com.app.entities.LogEntry;

public interface LogEntryDao extends JpaRepository<LogEntry, Long> {
 
	List<LogEntry> findByCourse(Course findById);

	List<LogEntry> findByModule(Module findById);
}
