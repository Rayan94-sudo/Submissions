select name from students;
select age from students where age > 30;
select name,points from students where name = "Alex";
insert into students(name,age,gender,points) values("Rayan","25","F","30");
update students set points = points +1 where name="Basma";
update students set points = points -1 where name="Alex";

CREATE TABLE `graduates` (
	`Id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`Name`	TEXT NOT NULL UNIQUE,
	`Age`	INTEGER,
	`Gender`	TEXT,
	`Points`	INTEGER,
	`Graduation`	TEXT )

insert into Graduates(Name, Age, Gender, Points)  select Name, Age, Gender, Points from students where Name="Layal";
update Graduates set graduation ="10/10/2010" where Name="Layal";
delete from Graduates where name="Layal";

select employees.Name,companies.Name,companies.Date from employees,companies;
select employees.Name,companies.Date from employees,companies where companies.date<2000;
select companies.Name,employees.Role  from companies,employees where employees.role="Graphic Designer";
