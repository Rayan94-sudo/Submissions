select name from students;
select age from students where age > 30;
select name,points from students where name = "Alex";
insert into students(name,age,gender,points) values("Rayan","25","F","30");
update students set points = points +1 where name="Basma";
update students set points = points -1 where name="Alex";
