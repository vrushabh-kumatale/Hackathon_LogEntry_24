package com.app.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.app.dao.StaffDao;
import com.app.dto.StaffDTO;
import com.app.entities.Staff;

public class StaffServiceImpl implements StaffService{

	@Autowired
	private StaffDao staffDao;
	
	@Override
	public Staff registerStaff(StaffDTO staffDto) {
		System.out.println("In service method :"+staffDto);
		Staff beforeAdd = new Staff();
	BeanUtils.copyProperties(staffDto, beforeAdd);
	System.out.println("After data upadate :"+beforeAdd);
		//Customer inBetween = 
	Staff added	=staffDao.save(beforeAdd);
		return added;
	}

	@Override
	public Staff findByUserId(String userid) {
		return staffDao.getById(userid);
	}

	@Override
	public List<Staff> allstaff() {
		return staffDao.findAll();
	}

	@Override
	public Staff validate(String userid, String pwd) {
		Staff cc=staffDao.getById(userid);
		if(cc!=null && cc.getPassword().equals(pwd)) {
			return cc;
		}
		return null;
	}

	@Override
	public boolean verifyUserId(String userid) {
		return staffDao.existsById(userid);
	}

}
