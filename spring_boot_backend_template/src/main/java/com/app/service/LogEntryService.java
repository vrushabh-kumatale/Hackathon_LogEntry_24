package com.app.service;

import java.util.List;

import com.app.dto.LogEntryReqDTO;
import com.app.dto.LogEntryRespDTO;

public interface LogEntryService {

	public LogEntryRespDTO saveLogEntry(LogEntryReqDTO logEntryReqDTO);
	
	public List<LogEntryRespDTO> getAllLogs();
}

