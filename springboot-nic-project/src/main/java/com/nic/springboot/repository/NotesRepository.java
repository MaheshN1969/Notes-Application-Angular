package com.nic.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nic.springboot.model.Notes;

@Repository
public interface NotesRepository extends JpaRepository<Notes, Integer>{

	List<Notes> findByStatus(char status);

}
