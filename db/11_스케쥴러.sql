# 이벤트 스케쥴러
# - 특정 작업이 정기적으로 실행되도록 예약하는 기능
# - 특정 작업이 일정 시간 후 한번만 실행되도록 예약하는 기능
# - 예
# 	- 카카오 페이지에서 24:00가 되면 기간이 지난 무료 캐시를 제거 => 이벤트 스케쥴러

# 이벤트 스케쥴러 상태 확인 
# value가 on이면 스케쥴러를 사용, off이면 스케쥴러 사용 안함
show variables like 'event%';

# 이벤트 스케쥴러 상태를 변경
# 값 : on | off
set global event_scheduler = 값;

# 이벤트 스케줄러 확인
select * from information_schema.events;
show databases;

# 이벤트 스케쥴러 등록(정의)
/*
delimiter 기호
create event 이벤트명
on schedule every 숫자 단위
[start 시간]
[on completion preserve | on completion not preserve]
[comment '설명']
do
begin
	실행할 쿼리; #복잡한 쿼리면 프로시저를 만들어서 생성
end 기호
delimiter ;

- 단위 
	- year, quarter, month, day, hour, minute, week, second
    - year_month, month_hour, day_minute, day_second, hour_minute,
	  hour_second, minute_second
- starts 시간
	- 스케쥴러가 실행될 기준 시간. 생략되면 등록 시간이 기준 시간
- on completion preserve
	- 이벤트 스케쥴러 작업이 완료된 후 이벤트를 보존(유지)
- on completion not preserve
	- 이벤트 스케쥴러 작업이 완료된 후 이벤트를 보존하지 않고 삭제(한번만)
	- 기본값
*/

# 스케쥴러 삭제
# drop event if exists 이벤트명;
drop event if exists event_buy;

delimiter $$
create event event_buy
on schedule
at addtime(now(), "00:02:00")
on completion not preserve
do
begin
	declare exit handler for sqlexception
    begin
		rollback;
	end;
    
    start transaction;
    
	insert into buy(address, amount, code, price, id)
	values("부천", 1, "ACC005", 150000, "abc123");
    
    commit;
end $$
delimiter ;

select * from information_schema.events;

# ACC001 제품의 수량을 1분마다 1씩 증가시키는 스케줄러 등록
drop event if exists amount_plus;

delimiter $$
create event amount_plus
on schedule every 1 minute
on completion preserve
do
begin
	declare exit handler for sqlexception
    begin
		rollback;
	end;
    
    start transaction;
    
    update product set amount = amount + 1 where code = "ACC001";
    
    commit;
end $$
delimiter ;

select * from information_schema.events;









