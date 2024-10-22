package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Course;
import com.app.entities.LogEntry;
import com.app.entities.Modules;

public interface LogEntryDao extends JpaRepository<LogEntry, Long> {
 
	List<LogEntry> findByCourse(Course findById);

	List<LogEntry> findByModule(Optional<Modules> optional);
}
