package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.LogEntryDao;
import com.app.dto.LogEntryReqDTO;
import com.app.service.LogEntryService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/logs")
@CrossOrigin(origins = "http://localhost:3000")
public class LogEntryController {

	@Autowired
	private LogEntryService logEntryService;
	@Autowired
	private LogEntryDao logDao;
	
	
	
	@PostMapping("/add")
	@Operation(summary="log added ")
	 public ResponseEntity<?> saveLogEntry(@RequestBody LogEntryReqDTO logEntryReqDTO) {
		System.out.println("inside log post");
		logEntryService.saveLog(logEntryReqDTO);
        return ResponseEntity.ok("log added successfully");
    }
	

	@GetMapping("/all")
	@Operation(summary="get all logs")
	public ResponseEntity<?> findAll() {
		return ResponseEntity.ok(logEntryService.listall());
		
	}
	@DeleteMapping("/{id}")
    @Operation(summary = "Delete log by ID")
    public ResponseEntity<?> deleteById(@PathVariable("id") long id) {
        
        logEntryService.deleteLog(id);
        
        return ResponseEntity.ok("Log Deleted Successfully");
    }
	
	@PutMapping("/edit/{id}")
    @Operation(summary = "Edit log by ID")
    public ResponseEntity<?> editLog(@PathVariable("id") long id, @RequestBody LogEntryReqDTO logEntryReqDTO) {
        System.out.println("Inside log edit");
        logEntryService.updateLog(id, logEntryReqDTO);  // Call the service to update the log
        return ResponseEntity.ok("Log updated successfully");
    }
	
}

