use nic ;

CREATE TABLE notes_transaction
(
		id INT PRIMARY KEY auto_increment ,
        subject_description VARCHAR(100) NOT NULL , 
        budget_code_id INT DEFAULT NULL,
        description VARCHAR(200) NOT NULL ,
        amount DOUBLE DEFAULT NULL ,
        remarks VARCHAR(200) NOT NULL DEFAULT "-",
        status CHAR(1) NOT NULL ,
        insert_date VARCHAR(100) NOT NULL,
        update_date VARCHAR(100) NOT NULL
        
);
SELECT * FROM notes_transaction;
SELECT * FROM subject_rules;

SELECT * FROM notes_transaction WHERE status = 'O';

TRUNCATE notes_transaction;

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("Re-appropriation" , 1 , "First Transaction" ,2000 , 'O' , "2023-03-21 2:47:00" ,"2023-03-21 2:47:00" );

INSERT INTO notes_transaction(subject_description,description,amount,status,insert_date,update_date)
VALUES("A" , "Captring Amount Only" , 1200 , 'O' , "2023-03-22 2:47:00", "2023-03-22 1:20:00");

INSERT INTO notes_transaction(subject_description,budget_code_id,description,status,insert_date,update_date)
VALUES("B" , 4 ,"Captring Budget Code ID Only" ,  'O' , "2023-03-19 2:47:00", "2023-03-21 4:20:00");

INSERT INTO notes_transaction(subject_description,description,status,insert_date,update_date)
VALUES("General" , "No Capture" , 'O' , "2023-03-28 2:47:00", "2023-03-21 4:20:00");

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("Re-appropriation" , 1 , "First Transaction" ,2000 , 'C' , "2023-03-18 2:47:00" ,"2023-03-21 2:47:00" );

INSERT INTO notes_transaction(subject_description,description,status,insert_date,update_date)
VALUES("General" , "No Capture" , 'C' , "2023-03-15 2:47:00", "2023-03-21 4:20:00");

INSERT INTO notes_transaction(subject_description,description,status,insert_date,update_date)
VALUES("General" , "Test for Pagination" , 'O' , "2023-03-29 1:27:00", "2023-03-29 1:27:00");

UPDATE  notes_transaction 
SET subject_description = "Re-appropriation" 
WHERE id = 1 ;



CREATE TABLE subject_rules 
(
	subject_id INT NOT NULL PRIMARY KEY auto_increment,
    subject_description VARCHAR(100) NOT NULL,
    capture_amount CHAR(1) NOT NULL ,
    capture_budget_code CHAR(1) NOT NULL
);




-- INSERT TO notes_transaction table
 


-- Insert to subject_rules table

INSERT INTO subject_rules(subject_description , capture_amount , capture_budget_code)
VALUES("General","N" , "N") , ("Re-appropriation" , "Y" , "Y") , ("A" , "Y" , "N") , ("B" , "N" , "Y");


-- Drop Table
DROP TABLE notes_transaction;
DROP TABLE subject_rules;

TRUNCATE notes_transaction;


-- Querying from Tables 
select * FROM notes_transaction;

SELECT * FROM subject_rules;