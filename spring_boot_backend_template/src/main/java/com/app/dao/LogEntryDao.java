package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.LogEntry;

public interface LogEntryDao extends JpaRepository<LogEntry, Long> {

}
