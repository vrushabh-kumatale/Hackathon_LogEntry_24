package com.app.service;

import com.app.entities.User;

public interface UserService {
	
	User registerUser(User user);
	
	User loginUser(String email, String password);

}
