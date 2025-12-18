
-- 문제 1
-- 다음 조건을 만족하는 학생 테이블 student를 만드세요.
-- 컬럼명	조건
-- student_id	정수, 기본키
-- name	문자열(20자 이내), NULL 불가
-- department	문자열(30자)
-- admission_year	정수

drop database if exists study;

create database study;
use study;

DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
	`student_id`	int	primary key,
    `name`			char(20) not null,
    `department`	char(30),
    `admission_year`int
);

-- 문제 2
-- student 테이블에 아래 학생 2명을 추가하세요.
-- student_id	name	department	admission_year
-- 1 Kim Computer Science 2023
-- 2 Lee Mathematics 2022
-- insert into 테이블(컬럼1, 컬럼2, ..., 컬럼N) values(값1, 값2, ..., 값n)

# 학생1 추가
insert into student (student_id, name, department, admission_year)
values (1, "Kim", "Computer Science", 2023);

# 학생2 추가
insert into student (student_id, name, department, admission_year)
values (2, "Lee", "Mathematics", 2022);

-- 3단계: 조회 (SELECT 기초)
-- 문제 3
-- 1️ 모든 학생 정보를 조회하세요.
select * from student;

-- 2️ 학과(department)만 조회하세요.
select department from student group by department;

-- 3️ 2023년에 입학한 학생만 조회하세요.
select * from student where admission_year = 2023;

-- 4단계: 조건 + 정렬
-- 문제 4
-- 학생을 입학년도 기준 내림차순으로 조회하세요.
select * from student order by admission_year desc;

-- 5단계: 테이블 하나 더 만들기 (수강)
-- 문제 5
-- 다음 조건의 수강 테이블 enrollment를 만드세요.
-- 컬럼명	조건
-- enrollment_id	정수, 기본키
-- student_id	정수
-- course_name	문자열(30자)
-- section	정수
CREATE TABLE `enrollment` (
	`enrollment_id`	int	primary key,
    `student_id`	int,
    `course_name`	char(30),
    `section`		int
);

-- 6단계: JOIN 맛보기 (아주 기초)
-- 문제 6
-- 학생 이름과 그 학생이 수강한 과목명을 함께 조회하세요.
SELECT
	student.name,
    enrollment.course_name
FROM student
JOIN enrollment
ON student.student_id = enrollment.student_id;

SHOW TABLES;

-- 🧩 SQL 워크벤치 연습문제 세트 2 (기초)
-- 1단계: 데이터베이스 & 테이블 생성
-- 문제 1
-- 다음 조건을 만족하는 데이터베이스 school을 생성하고 사용하세요.
-- 기존에 school 데이터베이스가 있으면 삭제
-- 새로 생성 후 USE school

DROP TABLE IF EXISTS `school`;

CREATE TABLE `school` (
	`school_id`	int	primary key
);
-- use school;

-- 문제 2
-- 다음 조건을 만족하는 **교수 테이블 professor**를 만드세요.
-- 컬럼명	조건
-- professor_id	정수, 기본키
-- name	문자열(20자 이내), NULL 불가
-- major	문자열(30자)
-- hire_year	정수

create table `professor` (
	`professor_id` int primary key,
    `name` varchar(20) not null,
    `major` varchar(30),
    `hire_year` int
);
use professor;

-- 2단계: INSERT (데이터 추가)
-- 문제 3
-- professor 테이블에 아래 교수 3명을 추가하세요.
-- professor_id	name	major	hire_year
-- 1 Park	Computer Science	2018
insert into professor (professor_id, name, major, hire_year)
values (1, 'Park', 'Computer Science', '2018');
-- 2 Choi	Mathematics	2020
insert into professor (professor_id, name, major, hire_year)
values (2, 'Choi', 'Mathematics', '2020');
-- 3 Jung	Physics	2015
insert into professor (professor_id, name, major, hire_year)
values (3, 'Jung', 'Physics', '2015');

-- 3단계: SELECT 기초
-- 문제 4
-- 아래 조건에 맞는 SQL을 작성하세요.
-- 1️ 모든 교수 정보를 조회하세요.
select *
from professor;
-- 2️ 교수 이름(name)과 전공(major)만 조회하세요.
select name, major
from professor;
-- 3️ 2019년 이후에 채용된 교수만 조회하세요.
select *
from professor
where hire_year >= 2019;

-- 4단계: 정렬 + 조건
-- 문제 5
-- 교수 정보를 채용년도(hire_year) 기준 오름차순으로 조회하세요.
select *
from professor
order by hire_year;

-- 5단계: 두 번째 테이블 생성
-- 문제 6
-- 다음 조건을 만족하는 **강의 테이블 lecture**를 만드세요.
-- 컬럼명	조건
-- lecture_id	정수, 기본키
-- professor_id	정수
-- lecture_name	문자열(30자)
-- room	문자열(10자)
create table (

)

-- 6단계: 데이터 추가 (연결 데이터)
-- 문제 7
-- lecture 테이블에 아래 강의 정보를 추가하세요.
-- lecture_id	professor_id	lecture_name	room
-- 1	1	Database	A101
-- 2	1	Operating System	B202
-- 3	2	Calculus	C303

-- 7단계: JOIN 기초
-- 문제 8
-- 교수 이름과 그 교수가 담당하는 강의 이름을 함께 조회하세요.
-- 조건
-- JOIN 사용
-- 교수 이름, 강의 이름만 출력

-- 문제 9
-- 강의를 담당하지 않은 교수도 모두 조회하되,
-- 강의가 없으면 강의 이름은 NULL로 표시되도록 하세요.













