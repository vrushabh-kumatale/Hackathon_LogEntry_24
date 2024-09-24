package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.entities.User;
import com.app.service.UserService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/signup")
	@Operation(summary= "Create a new User")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
	
	User registeredUser = userService.registerUser(user);

	if(registeredUser !=null) {
		return new ResponseEntity<>("User registered Successfully", HttpStatus.CREATED);
	} else {
		return new ResponseEntity<>("User registration failed", HttpStatus.BAD_REQUEST);

	}
	}
	
	@PostMapping("/login")
	@Operation(summary= "Login a new User")
	public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
	    User loggedInUser = userService.loginUser(loginRequest.getEmail(), loginRequest.getPassowrd());
	    
	    if (loggedInUser != null) {
	        return new ResponseEntity<>("Login Successfully", HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>("Invalid Email and Password", HttpStatus.UNAUTHORIZED);
	    }
	}
}
