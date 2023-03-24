package com.nic.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.javaguides.springboot.model.Employee;
import com.nic.springboot.exceptions.ResourceNotFoundException;
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
			return this.notesRepository.findByStatus('O');
	}
	
	@GetMapping("/notes/rules")
	public List<SubjectRules> getAllRules()
	{
		return this.subjectRulesRepository.findAll();
	}
	
	
	@PostMapping("/notes")
	public Notes createNote(@RequestBody Notes note)
	{
		return this.notesRepository.save(note);
	}
	
	@DeleteMapping("/notes/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteNoteById(@PathVariable("id") int id)
	{
		Notes note = this.notesRepository.findById(id).orElseThrow( () -> new ResourceNotFoundException("Note with ID : "+id+" not found")); 
	
		this.notesRepository.delete(note);
		
		Map<String,Boolean> response = new HashMap<>();
		
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	
	}
	
	@PutMapping("/notes/close-note/{id}")
	public Notes closeNote(@PathVariable("id") int id , @RequestBody Notes note)
	{
		Notes notes = this.notesRepository.findById(id).orElseThrow( () ->  new ResourceNotFoundException("Note with ID : "+id+ " not found"));
	
		notes.setRemarks(note.getRemarks());
		notes.setStatus(note.getStatus());
		notes.setUpdate_date(note.getUpdate_date());

		Notes updatedNotes = this.notesRepository.save(notes);
		return updatedNotes ;
		
	}
	
	@PutMapping("/notes/update-note/{id}")
	public Notes updateNote(@PathVariable("id") int id , @RequestBody Notes note)
	{
		
		
		
		Notes notes = this.notesRepository.findById(id).orElseThrow( () ->  new ResourceNotFoundException("Note with ID : "+id+ " not found"));

		
		
		notes.setSubject_description(note.getSubject_description());
		notes.setBudget_code_id(note.getBudget_code_id());
		notes.setUpdate_date(note.getUpdate_date());
		notes.setAmount(note.getAmount());
		notes.setDescription(note.getDescription());
		
		Notes updatedNotes = this.notesRepository.save(notes);
		
		System.out.println("Note Update Called ................  :  "+note.toString());
		return updatedNotes ;
		
	}
	
	

}
