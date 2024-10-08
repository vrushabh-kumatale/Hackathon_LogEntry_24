package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Staff;

@Repository
public interface StaffDao extends JpaRepository<Staff, String> {

}