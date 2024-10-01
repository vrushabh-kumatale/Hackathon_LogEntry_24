package com.app.controller;

import java.util.List;

//import javax.mail.MessagingException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.StaffDTO;
import com.app.entities.Staff;
import com.app.service.StaffService;


//import com.sunbeam.services.EmailService;

@CrossOrigin
@RestController
@RequestMapping("/api/staff")
public class StaffController {

	@Autowired
	private StaffService staffservice;
	
//	@Autowired
//	EmailService emailService;
	
	@PostMapping
	public ResponseEntity<?> save(@Valid @RequestBody StaffDTO staffDto) {
		if(staffservice.verifyUserId(staffDto.getEmail())) {
			return ResponseEntity.badRequest().body("Email already registered");
		}
		Staff result=staffservice.registerStaff(staffDto);
		String str;
		if(result!=null)
			{str=result.getEmail();
			//emailService.sendSimpleEmail(str, "You have registered successfully!\n Email = "+str+"\n Password = "+result.getPwd(),"Welcome To Pick-N-Drive.com services!!");
			return ResponseEntity.ok("Staff registered successfully");
		}else
			{
			return ResponseEntity.badRequest().body("Email already registered");
			}
	}
	
	@GetMapping
	public ResponseEntity<?> findAllStaffs() {
		List<Staff> result = staffservice.allstaff();
		return ResponseEntity.ok(result);
	}
	
	
	}
