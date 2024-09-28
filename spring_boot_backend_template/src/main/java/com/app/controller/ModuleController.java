package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ModulesDTO;
import com.app.service.ModuleService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/modules")
@CrossOrigin(origins="http://localhost:3000")
public class ModuleController {

	@Autowired
	private ModuleService moduleService;
	
	@PostMapping
	@Operation(summary= "Add a new module")
	public ResponseEntity<?> save(@RequestBody ModulesDTO dto) {
		moduleService.saveModule(dto);
		return ResponseEntity.ok("Module Added Successfully");
		
	}
	
	@GetMapping
	@Operation(summary= "Find all modules")
	public ResponseEntity<?> findAll() {		
		return ResponseEntity.ok(moduleService.listall());
	}
	
	@GetMapping("{id}")
	@Operation(summary= "Find modules by id")
	public ResponseEntity<?> findById(@PathVariable long id) {		
		return ResponseEntity.ok(moduleService.findById(id));
	}
	
	@DeleteMapping("{id}")
	@Operation(summary= "delete modules by id ")
	public ResponseEntity<?> deleteById(@PathVariable long id) {
		moduleService.deleteModule(id);
		return ResponseEntity.ok("Deleted successfully");
	}
	
}
