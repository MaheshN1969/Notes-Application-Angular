package com.nic.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nic.springboot.model.Notes;

@Repository
public interface NotesRepository extends JpaRepository<Notes, Integer>{

}
