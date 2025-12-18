
# 대학생 DDL
# DB 추가
drop database if exists university;

create database university;
use university;

DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
	`st_num`	char(10)	primary key,
	`st_name`	varchar(20)	not NULL,
	`st_contact`	varchar(13)	not NULL,
	`st_resident`	char(14)	not NULL unique,
	`st_year`	year	not NULL,
	`st_pr_num`	char(11)	NULL
);

DROP TABLE IF EXISTS `major`;

CREATE TABLE `major` (
	`mj_code`	char(3)	primary key,
	`mj_office`	varchar(100)	NULL,
	`mj_name`	varchar(20)	not NULL,
	`mj_pr_num`	char(11)	NULL
);

DROP TABLE IF EXISTS `subject`;

CREATE TABLE `subject` (
	`sj_code`	char(6)	primary key,
	`sj_name`	varchar(20)	not NULL,
	`sj_time`	int	not NULL default 0,
	`sj_point`	int	not NULL default 0
);

DROP TABLE IF EXISTS `professor`;

CREATE TABLE `professor` (
	`pr_num`	char(11)	primary key,
	`pr_name`	varchar(20)	not NULL,
	`pr_contact`	varchar(13)	not NULL,
	`pr_resident`	char(14)	not NULL unique,
	`pr_year`	year	not NULL,
	`pr_mj_code`	char(3)	NOT NULL
);

DROP TABLE IF EXISTS `student_major`;

CREATE TABLE `student_major` (
	`sm_num`	int	primary key auto_increment,
	`sm_st_num`	char(10)	NOT NULL,
	`sm_mj_code`	char(3)	NOT NULL
);

DROP TABLE IF EXISTS `lecture`;

CREATE TABLE `lecture` (
	`lt_num`	int	primary key auto_increment,
	`lt_pr_num`	char(11)	NOT NULL,
	`lt_sj_code`	char(6)	NOT NULL,
	`lt_year`	int	not NULL,
	`lt_semester`	varchar(2)	not NULL,
	`lt_schedule`	varchar(100)	not NULL,
	`lt_room`	varchar(100)	NULL,
	`lt_syllabus`	text	not NULL,
	`lt_class`	int	not NULL default 1,
	`lt_max`	int	not NULL,
	`lt_current`	int	not NULL default 0 
);

DROP TABLE IF EXISTS `course`;

CREATE TABLE `course` (
	`co_num`	int	primary key auto_increment,
	`co_st_num`	char(10)	NOT NULL,
	`co_lt_num`	int	NOT NULL,
	`co_score`	varchar(4)	NULL,
	`co_mid`	int	not NULL default 0,
	`co_final`	int	not NULL default 0,
	`co_tw`	int	not NULL default 0,
	`co_att`	int	not NULL default 0
);

ALTER TABLE `student` ADD CONSTRAINT `FK_professor_TO_student_1` FOREIGN KEY (
	`st_pr_num`
)
REFERENCES `professor` (
	`pr_num`
);

ALTER TABLE `major` ADD CONSTRAINT `FK_professor_TO_major_1` FOREIGN KEY (
	`mj_pr_num`
)
REFERENCES `professor` (
	`pr_num`
);

ALTER TABLE `professor` ADD CONSTRAINT `FK_major_TO_professor_1` FOREIGN KEY (
	`pr_mj_code`
)
REFERENCES `major` (
	`mj_code`
);

ALTER TABLE `student_major` ADD CONSTRAINT `FK_student_TO_student_major_1` FOREIGN KEY (
	`sm_st_num`
)
REFERENCES `student` (
	`st_num`
);

ALTER TABLE `student_major` ADD CONSTRAINT `FK_major_TO_student_major_1` FOREIGN KEY (
	`sm_mj_code`
)
REFERENCES `major` (
	`mj_code`
);

ALTER TABLE `lecture` ADD CONSTRAINT `FK_professor_TO_lecture_1` FOREIGN KEY (
	`lt_pr_num`
)
REFERENCES `professor` (
	`pr_num`
);

ALTER TABLE `lecture` ADD CONSTRAINT `FK_subject_TO_lecture_1` FOREIGN KEY (
	`lt_sj_code`
)
REFERENCES `subject` (
	`sj_code`
);

ALTER TABLE `course` ADD CONSTRAINT `FK_student_TO_course_1` FOREIGN KEY (
	`co_st_num`
)
REFERENCES `student` (
	`st_num`
);

ALTER TABLE `course` ADD CONSTRAINT `FK_lecture_TO_course_1` FOREIGN KEY (
	`co_lt_num`
)
REFERENCES `lecture` (
	`lt_num`
);

