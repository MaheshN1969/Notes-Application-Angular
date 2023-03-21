package com.nic.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nic.springboot.model.Notes;
import com.nic.springboot.model.SubjectRules;
import com.nic.springboot.repository.NotesRepository;
import com.nic.springboot.repository.SubjectRulesRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/v1")
public class NotesController {
	
	@Autowired
	private NotesRepository notesRepository;
	
	@Autowired
	private SubjectRulesRepository subjectRulesRepository;
	
	@GetMapping("/notes")
	public List<Notes> getAllNotes()
	{
			return this.notesRepository.findAll();
	}
	
	@GetMapping("/notes/rules")
	public List<SubjectRules> getAllRules()
	{
		return this.subjectRulesRepository.findAll();
	}
	
	
	

}
