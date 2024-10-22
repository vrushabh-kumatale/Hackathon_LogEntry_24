package com.app.service;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CourseDao;
import com.app.dao.LogEntryDao;
import com.app.dao.ModuleDao;
import com.app.dto.LogEntryReqDTO;
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
	 private CourseService courseService;
	 
	 @Autowired
	 private ModuleService moduleService;

	@Override
	public void saveLog(LogEntryReqDTO dto) {
		LogEntry entry = new LogEntry();
		Course course = courseDao.findById(dto.getCourseId()).orElseThrow(() -> new IllegalArgumentException("Invalid course ID: "));
        Modules module = moduleService.findById(dto.getModuleId()).orElseThrow(() -> new IllegalArgumentException("Invalid course ID: "));
	        entry.setDate(dto.getDate());
	        entry.setFromTime(dto.getFromTime());
	        entry.setToTime(dto.getToTime());
	        entry.setStatus("Pending"); // Default status for new logs
	        entry.setCourse(course);
	        entry.setModule(module);
	        logEntryDao.save(entry);
		
	}

	@Override
	public List<LogEntry> listall() {
		
		return logEntryDao.findAll();
	}
	
	public List<LogEntry> listByCourse(long id){
		return logEntryDao.findByCourse(courseService.findById(id));
	}
	
	// list by module
	public List<LogEntry> listByModule(long id){
		return logEntryDao.findByModule(moduleService.findById(id));
	}

	@Override
	public LogEntry findById(long id) {
		return logEntryDao.getById(id);
	}
	
	 public void deleteLog(long id) {
	        // Find the log entry by ID and ensure it exists before deletion
	        LogEntry logEntry = logEntryDao.findById(id)
	                .orElseThrow(() -> new IllegalArgumentException("Log entry not found with ID: " + id));
	        
	        // Delete the log entry
	        logEntryDao.delete(logEntry);
	    }

	@Override
	public void updateLog(long id, LogEntryReqDTO dto) {

		LogEntry existLog = logEntryDao.findById(id)
				.orElseThrow(()-> new RuntimeException("Log not found:"+id));
		
		existLog.setDate(dto.getDate());
		existLog.setFromTime(dto.getFromTime());
        existLog.setToTime(dto.getToTime());
       // existLog.setCourseId(dto.getCourseId());
       // existLog.setModuleId(dto.getModuleId());
        existLog.setStatus(dto.getStatus());
        
        logEntryDao.save(existLog);
        
	}

	
	 

	
	
	

}
