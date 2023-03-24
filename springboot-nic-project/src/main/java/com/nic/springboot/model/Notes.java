package com.nic.springboot.model;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "notes_transaction")
public class Notes {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id ;
	
	@Column(name = "budget_code_id")
	private Integer budget_code_id;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "subject_description")
	private String subject_description;
	
	@Column(name = "amount")
	private Double amount ; 
	
	@Column(name = "remarks")
	private String remarks;
	
	@Column(name = "status")
	private char status ;
	
	@Column(name = "insert_date")
	private String insert_date;
	
	@Column(name = "update_date")
	private String update_date ;
	
	
	public Notes() {
		
	}
	
	
	public Notes(Integer budget_code_id, String subject_description,String description, Double amount, String remarks, char status, String insert_date, String update_date) 
	{
		super();
		this.budget_code_id = budget_code_id;
		this.subject_description = subject_description;
		this.description = description;
		this.amount = amount;
		this.remarks = remarks;
		this.status = status;
		this.insert_date = insert_date;
		this.update_date = update_date;
	}




	@Override
	public String toString() {
		return "Notes [id=" + id + ", budget_code_id=" + budget_code_id + ", description=" + description
				+ ", subject_description=" + subject_description + ", amount=" + amount + ", remarks=" + remarks
				+ ", status=" + status + ", insert_date=" + insert_date + ", update_date=" + update_date + "]";
	}


	public String getSubject_description() {
		return subject_description;
	}


	public void setSubject_description(String subject_description) {
		this.subject_description = subject_description;
	}


	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getBudget_code_id() {
		return budget_code_id;
	}
	public void setBudget_code_id(Integer budget_code_id) {
		this.budget_code_id = budget_code_id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public char getStatus() {
		return status;
	}
	public void setStatus(char status) {
		this.status = status;
	}
	public String getInsert_date() {
		return insert_date;
	}
	public void setInsert_date(String insert_date) {
		this.insert_date = insert_date;
	}
	public String getUpdate_date() {
		return update_date;
	}
	public void setUpdate_date(String update_date) {
		this.update_date = update_date;
	}
	
	
	

}
