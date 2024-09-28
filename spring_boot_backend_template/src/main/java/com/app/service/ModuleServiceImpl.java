package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CourseDao;
import com.app.dao.ModuleDao;
import com.app.dto.ModulesDTO;
import com.app.entities.Modules;
import com.app.entities.Course;


@Service
@Transactional
public class ModuleServiceImpl implements ModuleService{

	@Autowired
	private ModuleDao moduleDao;
	@Autowired
	private CourseDao courseDao;
	
	@Autowired
	private CourseService courseService;

	@Override
	public List<Modules> listall() {
		
		return moduleDao.findAll();
	}

	@Override
	public List<Modules> findByCourse(long id) {
		
		return moduleDao.findByCourse(courseService.findById(id));
	}

	@Override
	public void deleteModule(long id) {
	
		moduleDao.deleteById(id);
		
	}

	//@SuppressWarnings("deprecation")
	@Override
	public Optional<Modules> findById(long id) {
		
		return moduleDao.findById(id);
	}

	@Override
	public void saveModule(ModulesDTO dto) {
		Modules module = new Modules();
		
		Course co = courseDao.findById(dto.getCourse_id()).orElseThrow(() -> new IllegalArgumentException("Invalid course ID: "));
		module.setModuleName(dto.getModuleName());
		module.setTheoryHrs(dto.getTheoryHrs());
		module.setLabHrs(dto.getLabHrs());
		module.setModuleRouterName(dto.getModuleName());
		module.setCourse(co);
		moduleDao.save(module);
		
	}

	

	
}
