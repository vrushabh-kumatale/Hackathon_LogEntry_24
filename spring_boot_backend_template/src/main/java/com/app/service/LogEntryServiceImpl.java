package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.CourseDao;
import com.app.dao.LogEntryDao;
import com.app.dao.ModuleDao;
import com.app.dto.LogEntryReqDTO;
import com.app.dto.LogEntryRespDTO;
import com.app.entities.Course;
import com.app.entities.LogEntry;
import com.app.entities.Modules;

@Service
@Transactional
public class LogEntryServiceImpl implements LogEntryService{

	@Autowired
	private LogEntryDao logEntryDao;
	
	@Autowired
	private CourseDao courseDao;
	
	@Autowired
	private ModuleDao moduleDao;
	
	  @Override
	    public LogEntryRespDTO saveLogEntry(LogEntryReqDTO logEntryRequestDTO) {
	        LogEntry logEntry = new LogEntry();
	        logEntry.setDate(logEntryRequestDTO.getDate());
	        logEntry.setFromTime(logEntryRequestDTO.getFromTime());
	        logEntry.setToTime(logEntryRequestDTO.getToTime());
	        logEntry.setStatus(logEntryRequestDTO.getStatus());
	        
	        // Fetch and set Course
	        Course course = courseDao.findById(logEntryRequestDTO.getCourseId())
	                .orElseThrow(() -> new ResourceNotFoundException("Course not found with ID: " + logEntryRequestDTO.getCourseId()));
	        logEntry.setCourse(course);
	        
	        // Fetch and set Module
	        Modules module = moduleDao.findById(logEntryRequestDTO.getModuleId())
	                .orElseThrow(() -> new ResourceNotFoundException("Module not found with ID: " + logEntryRequestDTO.getModuleId()));
	        logEntry.setModule(module);
	        
	        LogEntry savedLog = logEntryDao.save(logEntry);
	        return convertToDTO(savedLog);
	    }

	@Override
	public List<LogEntryRespDTO> getAllLogs() {
        List<LogEntry> logs = logEntryDao.findAll();

		
		return logs.stream()
				.map(this::convertToDTO)
				.collect(Collectors.toList());
	}
	
	 private LogEntryRespDTO convertToDTO(LogEntry logEntry) {
	        LogEntryRespDTO dto = new LogEntryRespDTO();
	        dto.setId(logEntry.getId());
	        dto.setDate(logEntry.getDate());
	        dto.setFromTime(logEntry.getFromTime());
	        dto.setToTime(logEntry.getToTime());
	        dto.setCourseId(logEntry.getCourse().getId());  // Only course ID
	        dto.setModuleId(logEntry.getModule().getId());  // Only module ID
	        dto.setStatus(logEntry.getStatus());
	        return dto;
	    }

}
