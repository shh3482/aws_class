
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














