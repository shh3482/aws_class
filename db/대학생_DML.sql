start transaction;
# 컴퓨터공학과를 등록
# 코드 : 160, 사무실 : 하이미디어 구리관 401호, 이름 : 컴퓨터공학과
insert into major(mj_code, mj_office, mj_name)
values('160', '하이미디어 구리관 401호', '컴퓨터공학과');

# 디자인과를 등록
# 코드 : 123, 사무실 : 하이미디어 구리관 301호, 이름 : 디자인과
insert into major(mj_code, mj_office, mj_name)
values('123', '하이미디어 구리관 301호', '디자인과');

# 기계공학과를 등록
# 코드 : 456, 사무실 : 하이미디어 구리관 201호, 이름 : 기계공학과
insert into major(mj_code, mj_office, mj_name)
values('456', '하이미디어 구리관 201호', '기계공학과');

select * from major;

commit;

start transaction;

# 홍길동(2025160001), 고길동(2025160002)은
# 지도 교수님이 홍교수님(p2025160001)으로 배정
update student
set st_pr_num = 'p2025160001'
where st_num in ('2025160001', '2025160002');

# 김길동(2025160003), 하니(2025160004)은
# 지도 교수님이 김교수님(p2025160002)으로 배정
update student
set st_pr_num = 'p2025160002'
where st_num in ('2025160003', '2025160004');

select * from student;

# 학생 성적 추가
# 홍길동(2025160001) 학생 성적(중간, 기말, 과제, 출석)
# 컴퓨터 개론(100, 50, 100, 100)
# 프로그래밍언어(100, 100, 90, 100)
# 알고리즘(100, 100, 100, 0)
# 확률과 통계 (50, 50, 100, 100)
# 미분과 적분(80, 90, 50, 100)
update course
set co_mid = 100, co_final = 50, co_tw = 100, co_att = 100
where co_num = 1;
update course
set co_mid = 100, co_final = 100, co_tw = 90, co_att = 100
where co_num = 2;
update course
set co_mid = 100, co_final = 100, co_tw = 0, co_att = 0
where co_num = 3;
update course
set co_mid = 50, co_final = 50, co_tw = 100, co_att = 100
where co_num = 4;
update course
set co_mid = 80, co_final = 90, co_tw = 50, co_att = 100
where co_num = 5;

select * from course;

# 학번과 강의 번호가 주어지면 성적들을 이용하여 학점을 계산하는 프로시저
# 출석이 60 미만이면 성적에 상관없이 F
# 비율은 중간 30% 기말 45% 과제 10% 출석 10%
# 80, 90, 50, 100 => 28 ,40.5 ,5 ,10 => 83.5
# A+ : 95 이상, A : 90 이상, B+ : 85이상, B : 80 이상
# C+ : 75 이상, C : 70 이상, D+ : 65이상, D : 60이상, F : 60미만

# 프로시저명 : score, in : st_num, _lt_num

DROP PROCEDURE IF EXISTS score;
DELIMITER $$
CREATE PROCEDURE score(
	in _st_num char(10),
    in _lt_num int
)

BEGIN
declare _mid int;
declare _final int;
declare _tw int;
declare _att int;
declare _total double;
declare _score varchar(2);

declare exit handler for sqlexception
begin
rollback;
END;

start transaction;

	set _mid = (select co_mid from course where co_st_num = _st_num and co_lt_num = _lt_num);
	set _final = (select co_final from course where co_st_num = _st_num and co_lt_num = _lt_num);
	set _tw = (select co_tw from course where co_st_num = _st_num and co_lt_num = _lt_num);
	set _att = (select co_att from course where co_st_num = _st_num and co_lt_num = _lt_num);
    
    # 성적을 계산 = 중간 * 0.35 + 기말 * 0.45 + 과제 * 0.1 +출석 * 0.1
    set _total = _mid * 0.35 + _final * 0.45 + _tw * 0.1 + _att * 0.1;

    # 성적에 따라 학점을 업데이트
    
    # 출석이 60 미만이면 성적을 f로 업데이트
    if _att < 60 then
		set _score = 'F';
	# A+
    elseif _total >= 95 then
		set _score = 'A+';
    elseif _total >= 90 then
		set _score = 'A';
    elseif _total >= 85 then
		set _score = 'B+';
    elseif _total >= 80 then
		set _score = 'B';
    elseif _total >= 75 then
		set _score = 'C+';
    elseif _total >= 70 then
		set _score = 'C';
	elseif _total >= 65 then
		set _score = 'D+';
	elseif _total >= 60 then
		set _score = 'D';
        
	end if;
    
    update course
    set co_score = _score
    where co_st_num = _st_num
    and co_lt_num = _lt_num;
    
    commit;

END$$
DELIMITER ;

select *
from course;
call score('2025160001', 6);

















