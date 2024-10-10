package com.app.service;

import java.util.List;

import com.app.dto.StaffDTO;
import com.app.entities.Staff;

public interface StaffService {

	public Staff registerStaff(StaffDTO staffDto);
	
	public Staff findByUserId(String userid);
	
	public List<Staff> allstaff();
	
	public Staff validate(String userid, String pwd);

	public boolean verifyUserId(String userid);
}
