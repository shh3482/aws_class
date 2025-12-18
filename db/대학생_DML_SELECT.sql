
# 학과별 등록된 교수를 조회하는 쿼리
select major.*, count(pr_num) 교수수 from major
	left join professor on mj_code = pr_mj_code
    group by mj_code;

# 2025년도에 컴퓨터공학에 임용한 교수 수를 조회
select count(*) from professor
where pr_num like concat('_', 2025, 160, '%');

# 교수 등록
# 이름 : 홍교수, 연락처 : 111-1234-5678, 주민번호 : 700101-511111,
# 임용연도 : 2025, 전공 : 컴퓨터공학과
insert into professor(pr_num, pr_name, pr_contact, pr_resident, pr_year, pr_mj_code)
values('p2025160001','홍교수', '111-1234-5678', '700101-5111111', '2025','160');

-- insert into professor(pr_num, pr_name, pr_contact, pr_resident, pr_year, pr_mj_code)
-- select concat("p", 2025, 160, lpad(count(*)+1, 3, '0')),
-- '홍교수', '111-1234-5678', '700101-5111111', '2025','160'
-- from professor where pr_year = 2025 and pr_mj_code = 160;

select * from professor;

# 교수 등록
# 이름 : 김교수, 연락처 : 111-1111-1111, 주민번호 : 700101-522222,
# 임용연도 : 2025, 전공 : 컴퓨터공학과
insert into professor(pr_num, pr_name, pr_contact, pr_resident, pr_year, pr_mj_code)
select concat("p", 2025, 160, lpad(count(*)+1, 3, '0')),
'김교수', '111-1111-1111', '700101-5222222', '2025','160'
from professor where pr_year = 2025 and pr_mj_code = 160;

# 교수 등록
# 이름 : 박교수, 연락처 : 111-9999-9999, 주민번호 : 740505-6222222,
# 임용연도 : 2025, 전공 : 디자인과
insert into professor(pr_num, pr_name, pr_contact, pr_resident, pr_year, pr_mj_code)
select concat("p", 2025, 123, lpad(count(*)+1, 3, '0')),
'박교수', '111-9999-9999', '740505-6222222', '2025','123'
from professor where pr_year = 2025 and pr_mj_code = 123;

# 교수 등록
# 이름 : 이교수, 연락처 : 111-5555-5555, 주민번호 : 700505-6333333,
# 임용연도 : 2025, 전공 : 디자인과
insert into professor(pr_num, pr_name, pr_contact, pr_resident, pr_year, pr_mj_code)
select concat("p", 2025, 123, lpad(count(*)+1, 3, '0')),
'이교수', '111-5555-5555', '700505-6333333', '2025','123'
from professor where pr_year = 2025 and pr_mj_code = 123;

select * from professor;

# 교수 등록
# 이름 : 최교수, 연락처 : 111-1234-5555, 주민번호 : 840505-5444444,
# 임용연도 : 2025, 전공 : 기계공학과
insert into professor(pr_num, pr_name, pr_contact, pr_resident, pr_year, pr_mj_code)
select concat("p", 2025, 456, lpad(count(*)+1, 3, '0')),
'최교수', '111-1234-5555', '840505-5444444', '2025','456'
from professor where pr_year = 2025 and pr_mj_code = 456;

# 교수 등록
# 이름 : 장교수, 연락처 : 111-1234-5555, 주민번호 : 841005-6666666,
# 임용연도 : 2025, 전공 : 기계공학과
insert into professor(pr_num, pr_name, pr_contact, pr_resident, pr_year, pr_mj_code)
select concat("p", 2025, 456, lpad(count(*)+1, 3, '0')),
'장교수', '111-1234-5555', '841005-6666666', '2025','456'
from professor where pr_year = 2025 and pr_mj_code = 456;

commit;

start transaction;

select * from student;
# 학생 추가
# 이름 : 홍길동, 연락처 : 012-1111-1111, 주민번호 : 060101-3, 2025, 컴퓨터공학과
# 이름 : 고길동, 연락처 : 012-1111-1112, 주민번호 : 060209-3, 2025, 컴퓨터공학과
# 이름 : 김길동, 연락처 : 012-1111-1113, 주민번호 : 060310-3, 2025, 컴퓨터공학과
# 이름 : 하니, 연락처 : 012-1111-1114, 주민번호 : 060425-4, 2025, 컴퓨터공학과
 insert into student (st_num, st_name, st_contact, st_resident, st_year)
 values
 ('2025160001','홍길동','012-1111-1111','060101-3',2025),
 ('2025160002','고길동','012-1111-1112','060209-3',2025),
 ('2025160003','김길동','012-1111-1113','060310-3',2025),
 ('2025160004','하니','012-1111-1114','060425-4',2025);
 
 insert into student_major(sm_st_num, sm_mj_code)
 values
 ('2025160001','160'),
 ('2025160002','160'),
 ('2025160003','160'),
 ('2025160004','160');

# 과목 추가
# 컴퓨터 개론, 2학점, 2시간, 분류 : COM, 과목코드 : COM001
# 프로그래밍 언어, 3학점, 3시간, 분류 : COM, 과목코드 : COM002
# 알고리즘, 3학점, 4시간, 분류 : COM, 과목코드 : COM003
# 확률과 통계, 3학점, 3시간, 분류 : MSC, 과목코드 : MSC001
# 미분과 적분, 4학점, 4시간, 분류 : MSC, 과목코드 : MSC0012
 insert into subject(sj_code, sj_name, sj_time, sj_point)
 values
 ('COM001','컴퓨터 개론',2,2),
 ('COM002','프로그래밍 언어',3,3),
 ('COM003','알고리즘',4,3),
 ('MSC001','확률과 통계',3,3),
 ('MSC002','미분과 적분',4,4);

 select * from subject;

# 강의 등록
# 컴퓨터 개론, 홍교수, 2025년 1학기, 1분반, 강의실 : 미디어관 101호, 정원 : 20
# 강의 계획서 : "강의계획서입니다.", 시간 : "월1A,1B,2A,2B"
# 프로그래밍 언어, 홍교수, 2025년 1학기, 1분반, 강의실 : 미디어관 201호, 정원 : 20
# 강의 계획서 : "강의계획서입니다.", 시간 : "화1A,1B,2A,2B"
# 프로그래밍 언어, 김교수, 2025년 1학기, 2분반, 강의실 : 미디어관 202호, 정원 : 20
# 강의 계획서 : "강의계획서입니다.", 시간 : "화1A,1B,2A,2B"
insert into lecture(lt_pr_num, lt_sj_code, lt_year, lt_semester, lt_schedule,
					lt_room, lt_syllabus, lt_class, lt_max)
values
('p2025160001','COM001',2025,1,'월1A,1B,2A,2B','미디어관 101호','강의계획서입니다.',1,20),
('p2025160001','COM002',2025,1,'화1A,1B,2A,2B','미디어관 201호','강의계획서입니다.',1,20),
('p2025160002','COM002',2025,1,'화1A,1B,2A,2B','미디어관 202호','강의계획서입니다.',2,20);

# 알고리즘, 김교수, 2025년 1학기, 2분반, 강의실 : 미디어관 301호, 정원 : 20
# 강의 계획서 : "강의계획서입니다.", 시간 : "목1A,1B,2A,2B,3A,3B"
# 확률과 통계, 최교수, 2025년 1학기, 1분반, 강의실 : 하이관 101호, 정원 : 20
# 강의 계획서 : "강의계획서입니다.", 시간 : "금1A,1B,2A,2B,3A,3B"
# 미분과 적분, 장교수, 2025년 1학기, 1분반, 강의실 : 하이관 301호, 정원 : 20
# 강의 계획서 : "강의계획서입니다.", 시간 : "목5A,5B,6A,6B,7A,7B"
insert into lecture(lt_pr_num, lt_sj_code, lt_year, lt_semester, lt_schedule,
					lt_room, lt_syllabus, lt_class, lt_max)
values
('p2025160002','COM003',2025,1,'목1A,1B,2A,2B,3A,3B','미디어관 301호','강의계획서입니다.',2,20),
('p2025456001','MSC001',2025,1,'금1A,1B,2A,2B,3A,3B','하이관 101호','강의계획서입니다.',1,20),
('p2025456002','MSC002',2025,1,'목5A,5B,6A,6B,7A,7B','하이관 301호','강의계획서입니다.',1,20);

select * from lecture;

# 홍길동(2025160001) 학생이 컴퓨터 개론, 프로그래밍언어(1), 알고리즘, 확률과 통계, 미분과 적분을 수강신청 함
# 고길동(2025160002) 학생이 컴퓨터 개론, 프로그래밍언어(2), 알고리즘, 확률과 통계, 미분과 적분을 수강신청 함
# 김길동(2025160003) 학생이 컴퓨터 개론, 프로그래밍언어(1) 을 수강신청 함
# 하니(2025160004) 학생이 프로그래밍언어(2), 알고리즘, 확률과 통계을 수강신청 함
insert into course (co_st_num, co_lt_num)
values
(2025160001, 1),
(2025160001, 2),
(2025160001, 4),
(2025160001, 5),
(2025160001, 6),

(2025160002, 1),
(2025160002, 3),
(2025160002, 4),
(2025160002, 5),
(2025160002, 6),

(2025160003, 1),
(2025160003, 2),

(2025160004, 3),
(2025160004, 4),
(2025160004, 5);

update lecture
set lt_current = (select count(*) from course where co_lt_num = 1)
where lt_num = 1;

update lecture
set lt_current = (select count(*) from course where co_lt_num = 2)
where lt_num = 2;

update lecture
set lt_current = (select count(*) from course where co_lt_num = 3)
where lt_num = 3;

update lecture
set lt_current = (select count(*) from course where co_lt_num = 4)
where lt_num = 4;

update lecture
set lt_current = (select count(*) from course where co_lt_num = 5)
where lt_num = 5;

update lecture
set lt_current = (select count(*) from course where co_lt_num = 6)
where lt_num = 6;

select lt_num, lt_sj_code from lecture;

# 컴퓨터공학과 학생들을 조회
# 컴퓨터공학과 학과 코드인 160을 이용하여 조회

# 방법1 : 학번에 학과코드 위치에 있는 값을 가져와서ㅏ 160인지 확인
select *
from student
where substring(st_num, 5, 3) = 160;

# 방법2 : 학생전공을 join하여 학생 전공이 160공인 학생을 조회
select *
from student
join student_major
on st_num = sm_st_num
where sm_mj_code = 160;

# 방법3 : 학생전공 테이블을 서브쿼리로 이용하여 조회
select *
from student
where st_num
# 학생 전공 테이블에서 컴퓨터공학과인 학생들의 학번들을 가져와서
# 일치하는 학생들을 조회
in (select sm_st_num
	from student_major
	where sm_mj_code = 160
    );
# st_num in ('2025160001', '2025160002', '2025160003', '2025160004')

# 확과별 등록된 학생수를 조회
# ===== 내가 쓴거 =====
-- select *
-- from student
-- join student_major
-- on st_num = sm_st_num
-- where sm_mj_code = mj_code;
# ===================
select major.*, count(sm_st_num) 학생수
from major
left join student_major
on major.mj_code = student_major.sm_mj_code
group by mj_code;

# 홍길동(2025160001) 학생이 수강신청한 모든 강의를 조회
select subject.*
from course
join lecture
on co_lt_num = lt_num
join subject
on sj_code = lt_sj_code
where co_st_num = '2025160001';

select subject.*
from subject
join lecture
on lt_sj_code = sj_code
where lt_num
in (select co_lt_num from course where co_st_num = '2025160001');

# 홍길동 학생이 이수한 학점을 조회
# ====== 내가 한거 ======
select sum(sj_point)
from subject
join lecture
on lt_sj_code = sj_code
where lt_num
in (select co_lt_num from course where co_st_num = '2025160001');
# =====================
select st_name 이름, ifnull(sum(sj_point),0) 이수학점
from (select * from course
where co_score is not null
and co_score not in("F","Fail")) C
join lecture
on co_lt_num = lt_num
join subject
on sj_code = lt_sj_code
right join student
on co_st_num = st_num
where st_num = '2025160001'
group by st_name;

# 컴퓨터 개론 수강 신청을 한 학생 명단을 조회
select *
from course
join lecture
on lt_num = co_lt_num
join student
on co_st_num = st_num
where lt_sj_code = "COM001";

# 홍 교수님이 강의하는 강의 목록을 조회
# ====== 내가 한거 ======
select pr_name, course.*
from lecture
join professor
on lt_pr_num = pr_num
join course
on lt_num = co_lt_num
where pr_num = "p2025160001";
# ====================
select sj_name
from lecture
join subject
on lt_sj_code = sj_code
where lt_pr_num = 'p2025160001';

# 강의별 수강생 수를 조회 강의번호, 수강생수
select lt_num, lt_current
from lecture;

# 강의별 수강생 수가 가장 많은 강의를 조회
select lt_num, lt_current
from lecture
order by lt_current desc
limit 1;

select *
from (select dense_rank() over(order by lt_current desc)순위, lt_num, lt_current
from lecture
) L
where 순위 = 1;

# 김교수(p2025160002)님이 지도하는 지도학생 목록을 조회
select *
from student
join professor
on st_pr_num = pr_num
where st_pr_num = 'p2025160002';

# 교수별 지도학생 수를 조회
select professor.*, count(st_num)
from student
right join professor
on pr_num = st_pr_num
group by pr_num;







