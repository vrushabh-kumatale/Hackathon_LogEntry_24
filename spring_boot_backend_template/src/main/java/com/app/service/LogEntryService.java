package com.app.service;

import java.util.List;

import com.app.dto.LogEntryReqDTO;
import com.app.entities.LogEntry;

public interface LogEntryService {
	
	public void saveLog(LogEntryReqDTO dto);	 
	
	public List<LogEntry> listall();

	public LogEntry findById(long id);
	
	public void deleteLog(long id);
	
	public void updateLog(long id, LogEntryReqDTO dto);
	
	
}

