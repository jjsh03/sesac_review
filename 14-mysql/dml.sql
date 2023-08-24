create table user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender enum('F', 'M', '') default '',
    birthday date not null,
    age int(3) not null default 0);
    
desc user;
    
insert into user values 
	('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', '33'),
    ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', '31'),
    ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', '53'),
    ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', '39'),
    ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', '47'),
    ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', '22'),
    ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', '24');

select * from user;
    
-- birth 기준 오름차순 정렬
select * from user order by birthday asc;

-- gender 'm' 회원을 name 기준 내림차순 정렬
select * from user where gender='m' order by name desc;

-- birth 1990년대 회원 id, name
select id, name from user where birthday between '1990-01-01' and '1999-12-31';

-- birth 6월생 birth기준 오름차순 정렬
select * from user where birthday like '%-06-%' order by birthday;

-- gender 'm'이면서 birth 1970년대생
select * from user where gender='m' and birthday like '197%';

-- 모든 회원 age 기준 내림차순 정렬했을 때 처음 3개 레코드
select * from user order by age desc limit 3;

-- 25 <= age <= 50 
select * from user where age >= '25' and age <= '50';

-- id 'hong1234'의 pw을 '12345678'로 변경
update user set  pw = '12345678' where id = 'hong1234';

-- id 'jungkrat' 레코드 삭제
delete from user where id = 'jungkrat';

select * from user;
