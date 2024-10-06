package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LogEntryReqDTO;
import com.app.dto.LogEntryRespDTO;
import com.app.entities.LogEntry;
import com.app.service.LogEntryService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/logs")
@CrossOrigin(origins = "http://localhost:3000")
public class LogEntryController {

	@Autowired
	private LogEntryService logEntryService;
	
	@PostMapping("/add")
	@Operation(summary="log added ")
//	public LogEntry addLogEntry(@RequestBody LogEntry logEntry) {
//		return logEntryService.saveLogEntry(logEntry);
//		
//	}
	 public ResponseEntity<LogEntryRespDTO> saveLogEntry(@RequestBody LogEntryReqDTO logEntryReqDTO) {
        LogEntryRespDTO savedLog = logEntryService.saveLogEntry(logEntryReqDTO);
        return ResponseEntity.ok(savedLog);
    }
	
	@GetMapping("/all")
	@Operation(summary="get all logs")
	public List<LogEntryRespDTO> getAllLogs() {
		return logEntryService.getAllLogs();
		
	}
	
}

