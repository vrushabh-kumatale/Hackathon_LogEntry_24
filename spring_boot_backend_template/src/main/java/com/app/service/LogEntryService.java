package com.app.service;

import java.util.List;

import com.app.dto.LogEntryReqDTO;
import com.app.entities.LogEntry;

public interface LogEntryService {

	//public LogEntryRespDTO saveLogEntry(LogEntryReqDTO logEntryReqDTO);
	
	//public List<LogEntryRespDTO> getAllLogs();
	public void saveLog(LogEntryReqDTO dto);	 
	
	public List<LogEntry> listall();

	public LogEntry findById(long id);
	
	
}

