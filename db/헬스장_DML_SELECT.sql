# 헬스장에 등록된 회원 목록을 조회
select *
from member;

# 헬스장에 등록된 회원 수를 조회
select count(*) 회원수
from member;

# 헬스장에 등록된 강좌를 조회
select *
from class;

# 모닝 요가를 수강신청한 인원 수를 조회
select count(*)
from enrollment
join class
on enrollment.class_id = class.class_id
where class.name = "모닝 요가";

# 강좌별 수강 신청 인원 수를 조회
select c.class_id, c.name, ifnull(count(enrollment_id),0) 
from enrollment
right join class c
on c.class_id = enrollment.class_id
group by c.class_id;

# 사물함 전체를 조회
select *
from locker;

# 사용중인 사물함을 조회
select *
from locker
join member
where member.locker_id = locker.locker_id;

# 사물함 전체에서 사용이 가능하면 사용 가능, 사용중이면 사용중이라고 조회
# 내가 처음 작성한거
select l.locker_id, l.location, '사용중' 사용상태
from member m
right join locker l
on l.locker_id = m.locker_id;

# 선생님이 힌트준거
select if (null is null, '사용가능', '사용중');
select if(1 is null, '사용가능', '사용중');

# 내가 고친거
select l.locker_id 사물함_번호, l.location 사물함_구역,
if (l.locker_id = m.locker_id, '사용중', '사용가능') 사용상태
from member m
right join locker l
using(locker_id); # 뒤에 비교하는 대상이 같은 경우 using을 사용할 수 있음

# 선생님꺼, 각 사물함 별 사용자 번호를 조회
select location '사용중인 사물함 위치', member.locker_id
from member
right join locker
using (locker_id);

select location '사용중인 사물함 위치',
# MYSQL에서 참 거짓을 융통성 있게 판별
# False, Null, 0, '' 등은 거짓, 거짓이 아닌 모든 값은 참
# 단, 사용하지 않은 사물함은 회원 사물함 정보에서 null로 되어 있어야 함
if (member.locker_id, '사용중','사용가능') '사용 가능 여부'
from member
right join locker
using (locker_id);

select location '사용중인 사물함 위치',
if (member.locker_id, '사용중','사용가능') '사용 가능 여부',
case when member.locker_id
then '사용중'
else '사용가능'
end '사용 가능 여부2'
from member
right join locker
using (locker_id);

# 각 강좌별 현재 출석한 회원 수를 조회
# 1. 모든 강좌 리스트, 출석한 회원 리스트, 출석한 회원 수 카운트
# class + attendance + member
select count(*), date(now())
from attendance a
right join class c
on c.class_id = a.class_id
where date(check_in_time) = date(now());

# 내가 한거
select *
from member m
left join attendance a
on m.member_id = a.member_id
right join class c
on  c.class_id = a.class_id;

# 선생님이 한거
# where 절을 group by 앞에 넣으면 outer join을 한 결과에
# 조건을 걸기 때문에 출석 정보가 없는 강좌들이 조회가 안됨.
# => 서브쿼리를 이용하여 조건을 걸면, 조건을 검색한 후에 outer join 을
# 하기 때문에 출석 정보가 없는 강좌들도 조회가 됨.
select name, count(check_in_time)
from (select*
from attendance
where date(check_in_time) = date(now())
) att
right join class using(class_id)
group by class.class_id;

# 회원별 회원이 강좌에 사용한 총 금액을 조회
#내가 한거
select member.name, class.name, sum(class.fee) # <- 이렇게 작성하면 왼쪽에 있는 name 애들도 똑같이 합치려 해서 오류가 발생
from member
join enrollment using(member_id)
right join class using(class_id)
where enrollment.payment_state = "결재";

#선생님이 한거
select member.*, format(ifnull(sum(fee),0),0)
from class
join (select *
from enrollment
where payment_state = '결재') e
using(class_id)
right join member using(member_ID)
group by member_id;
















