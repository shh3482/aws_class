drop database if exists fitness;

create database fitness;

use fitness;

DROP TABLE IF EXISTS `locker`;

CREATE TABLE `locker` (
	`locker_ID`	int	primary key auto_increment,
	`location`	varchar(10)	not NULL
);

DROP TABLE IF EXISTS `member`;

CREATE TABLE `member` (
	`member_ID`	int	primary key auto_increment,
	`name`	varchar(20)	not NULL,
	`contact`	varchar(13)	not NULL,
	`join_date`	datetime	not NULL default current_timestamp,
	`locker_ID`	int unique NULL
);

DROP TABLE IF EXISTS `class`;

CREATE TABLE `class` (
	`class_id`	int	primary key auto_increment,
	`name`	varchar(20)	not NULL,
	`capacity`	int	NULL,
	`fee`	int	NULL,
	`trainer_id`	int NOT NULL
);

DROP TABLE IF EXISTS `trainer`;

CREATE TABLE `trainer` (
	`trainer_id`	int	primary key auto_increment,
	`name`	varchar(20)	not NULL,
	`speciality`	varchar(20)	NULL,
	`experience`	int	not NULL default 0,
	`manager_id`	int NULL
);

DROP TABLE IF EXISTS `enrollment`;

CREATE TABLE `enrollment` (
	`enrollment_id`	int	primary key auto_increment,
	`apply_date`	datetime	not NULL default current_timestamp,
	`payment_state`	varchar(3)	not NULL,
	`member_id`	int	NOT NULL,
	`class_id`	int	NOT NULL
);

DROP TABLE IF EXISTS `attendance`;

CREATE TABLE `attendance` (
	`attendance_id`	int	primary key auto_increment,
	`check_in_time`	datetime	not NULL default current_timestamp,
	`member_id`	int	NOT NULL,
	`class_id`	int	NOT NULL
);

ALTER TABLE `member` ADD CONSTRAINT `FK_locker_TO_member_1` FOREIGN KEY (
	`locker_ID`
)
REFERENCES `locker` (
	`locker_ID`
);

ALTER TABLE `class` ADD CONSTRAINT `FK_trainer_TO_class_1` FOREIGN KEY (
	`trainer_id`
)
REFERENCES `trainer` (
	`trainer_id`
);

ALTER TABLE `trainer` ADD CONSTRAINT `FK_trainer_TO_trainer_1` FOREIGN KEY (
	`manager_id`
)
REFERENCES `trainer` (
	`trainer_id`
);

ALTER TABLE `enrollment` ADD CONSTRAINT `FK_member_TO_enrollment_1` FOREIGN KEY (
	`member_id`
)
REFERENCES `member` (
	`member_ID`
);

ALTER TABLE `enrollment` ADD CONSTRAINT `FK_class_TO_enrollment_1` FOREIGN KEY (
	`class_id`
)
REFERENCES `class` (
	`class_id`
);

ALTER TABLE `attendance` ADD CONSTRAINT `FK_member_TO_attendance_1` FOREIGN KEY (
	`member_id`
)
REFERENCES `member` (
	`member_ID`
);

ALTER TABLE `attendance` ADD CONSTRAINT `FK_class_TO_attendance_1` FOREIGN KEY (
	`class_id`
)
REFERENCES `class` (
	`class_id`
);

