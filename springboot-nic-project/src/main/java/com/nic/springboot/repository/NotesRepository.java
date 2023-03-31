package com.nic.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nic.springboot.model.Notes;

@Repository
public interface NotesRepository extends JpaRepository<Notes, Integer>{

	List<Notes> findByStatus(char status);
	
	@Query(value = "SELECT * FROM notes_transaction WHERE status='O' LIMIT ?1" , nativeQuery = true)
	List<Notes> findFirstNOpenNotes(int n);

	@Query(value = "SELECT * FROM notes_transaction WHERE status='O' AND (insert_date between date_sub(now(),INTERVAL 2 DAY) and now())" , nativeQuery = true)
	List<Notes> findLastOneDayNotes();
	
	@Query(value = "select * from notes_transaction WHERE status='O' AND (insert_date between date_sub(now(),INTERVAL 1 WEEK) and now());" , nativeQuery = true )
	List<Notes> findLastOneWeekNotes();
	
	@Query(value = "SELECT * FROM notes_transaction WHERE EXTRACT(MONTH FROM insert_date)  >= extract(MONTH FROM NOW()) - 1  AND EXTRACT(YEAR FROM insert_date) = EXTRACT(YEAR FROM NOW())  ;"  , nativeQuery = true)
	List<Notes> findLastOneMonthNotes();
	
}
