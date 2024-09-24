package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	
	@Override
	public User registerUser(User user) {
		
		return userDao.save(user);
	}

	@Override
	public User loginUser(String email, String password) {
		User user = userDao.findByEmail(email);
		
		// Check if the user exists and if the password matches
		if(user!=null && user.getPassword().equals(password)) {
			return user;
		}
		return null;
	}

}
