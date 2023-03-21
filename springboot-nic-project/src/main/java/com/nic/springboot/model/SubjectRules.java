package com.nic.springboot.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "subject_rules")
public class SubjectRules {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer subject_id ;
	
	@Column(name = "subject_description")
	private String subject_description;
	
	@Column(name = "capture_amount")
	private int capture_amount;
	
	@Column(name = "capture_budget_code")
	private int capture_budget_code;
	
	private SubjectRules()
	{
		
	}

	public SubjectRules(String subject_description, int capture_amount, int capture_budget_code) {
		super();
		this.subject_description = subject_description;
		this.capture_amount = capture_amount;
		this.capture_budget_code = capture_budget_code;
	}

	public Integer getSubject_id() {
		return subject_id;
	}

	public void setSubject_id(Integer subject_id) {
		this.subject_id = subject_id;
	}

	public String getSubject_description() {
		return subject_description;
	}

	public void setSubject_description(String subject_description) {
		this.subject_description = subject_description;
	}

	public int getCapture_amount() {
		return capture_amount;
	}

	public void setCapture_amount(int capture_amount) {
		this.capture_amount = capture_amount;
	}

	public int getCapture_budget_code() {
		return capture_budget_code;
	}

	public void setCapture_budget_code(int capture_budget_code) {
		this.capture_budget_code = capture_budget_code;
	}
	
	

}
