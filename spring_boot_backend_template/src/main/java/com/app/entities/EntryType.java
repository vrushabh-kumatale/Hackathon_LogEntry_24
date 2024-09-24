package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "entry_type")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class EntryType extends BaseEntity{

	private String title;
	private String description;
	
	@Column(name = "topic_required", nullable = false)
	private boolean topicRequired;
	
	@Column(name = "group_required", nullable = false)
	private boolean groupRequired;
}
