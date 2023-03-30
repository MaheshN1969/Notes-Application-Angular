use nic;


SELECT * FROM notes_transaction;

TRUNCATE notes_transaction;

-- Show records inserted in last 7 days 
select * from notes_transaction
where insert_date between date_sub(now(),INTERVAL 1 WEEK) and now();

-- Show records inserted since yesterday
select * from notes_transaction
where insert_date between date_sub(now(),INTERVAL 2 DAY) and now();


-- Show Records inserted since last month
SELECT * FROM notes_transaction 
WHERE EXTRACT(MONTH FROM insert_date)  >= extract(MONTH FROM NOW()) - 1  AND EXTRACT(YEAR FROM insert_date) = EXTRACT(YEAR FROM NOW())  ;

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("Re-appropriation" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-03-30 10:39:59") ,timestamp("2023-03-30 10:39:59") );

--  Last 2 Days 

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("Re-appropriation" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-03-30 11:06:59") ,timestamp("2023-03-30 11:06:59") );

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("Re-appropriation" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-03-30 10:56:59") ,timestamp("2023-03-30 11:06:59") );

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("Re-appropriation" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-03-29 02:56:59") ,timestamp("2023-03-30 11:06:59") );

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("Re-appropriation" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-03-29 04:56:59") ,timestamp("2023-03-30 11:06:59") );

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("Re-appropriation" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-03-28 09:56:59") ,timestamp("2023-03-30 11:06:59") );


-- Last 7 Week 
INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("Gereral" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-03-26 09:56:59") ,timestamp("2023-03-30 11:06:59") );

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("Gereral" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-03-24 09:56:59") ,timestamp("2023-03-30 11:06:59") );

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("Gereral" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-03-22 09:56:59") ,timestamp("2023-03-30 11:06:59") );

-- Last Month

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("A" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-02-22 09:56:59") ,timestamp("2023-03-30 11:06:59") );

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("A" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-02-3 09:56:59") ,timestamp("2023-03-30 11:06:59") );

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("A" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-02-1 09:56:59") ,timestamp("2023-03-30 11:06:59") );

-- 2 Months Back
INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("A" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-01-22 09:56:59") ,timestamp("2023-03-30 11:06:59") );

INSERT INTO notes_transaction(subject_description,budget_code_id,description,amount,status,insert_date,update_date)
VALUES("A" , 1 , "First Transaction" ,2000 , 'O' , timestamp("2023-01-8 09:56:59") ,timestamp("2023-03-30 11:06:59") );
