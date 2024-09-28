package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.ModulesDTO;
import com.app.entities.Modules;

public interface ModuleService {
	
	public List<Modules> listall();
	
	public List<Modules> findByCourse(long id);
	
	public void deleteModule(long id);
	
	public Optional<Modules> findById(long id);

	public void saveModule(ModulesDTO dto);


}
