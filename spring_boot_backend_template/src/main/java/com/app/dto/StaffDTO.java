package com.app.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class StaffDTO {
	@NotNull
	private String email;
	@NotNull
	private String username;
	@NotNull(message="Please provide password")
	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Invalid password!")
	private String password;
	@NotNull
	@Size(min = 10, max = 10)
	private String phoneno;
	@NotNull
	@Size(min = 2, max = 200)
	private String address;
	@NotNull
	@Size(min = 3, max = 3)
	private String staff_id;
	
}
