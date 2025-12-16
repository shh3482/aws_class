# 프로시저 
# - 일련의 쿼리를 하나의 함수처럼 실행하기 위한 쿼리의 집합 
# - 장바구니에 있는 제품 여러개를 구매
#   => 제품 제고량 변경 
#   => 구매한 제품을 장바구니에서 삭제 

# 프로시저 목록 확인 
SHOW PROCEDURE STATUS;

# 프로시저 스크립트 확인 
# SAKILA DB에 있는 FILM_IN_STOCK 프로시저 확인 
USE SAKILA;
SHOW CREATE PROCEDURE FILM_IN_STOCK;
# 위 결과에서 CREATE PROCEDURE에 있는 내용 확인
# - 해당 칸 우클릭 Copy Field를 클릭하면 내용이 복사됨 
# - 다른 곳에 붙여서 확인 

# 프로시저 삭제 
# DROP PROCEDURE IF EXISTS 프로시저명;

/*
DELIMITER 기호 # 프로시저를 정의하는 동안에 문장의 끝이 ;이 안되도록 변경 
CREATE PROCEDURE 프로시저명( 
	[IN | OUT | INOUT 변수명 타입,]
)
BEGIN
	프로시저 구현;
END 기호 
DELIMITER ;

DELIMITER 
- 문장(쿼리)의 끝을 나타내는 기호 
- 기본은 ; 
- DELIMITER를 이용하여 문장의 끝 기호를 변경할 수 있음 

IN 
- 프로시저 호출 시 필요한 정보가 있을 때 사용 
OUT
- 프로시저가 끝날 때 알려줄 정보가 있을 때 사용
INOUT
- 프로시저가 호출 시 필요한 정보가 끝날 때는 알려줄 정보로 바뀔 때 사용 
*/

# 정의한 프로시저 호출
# CALL 프로시저명(값|변수들);

# 프로시저 삭제 
DROP PROCEDURE IF EXISTS CURRENT_TIME_NOW;
# 현재시간의 년, 월, 일을 조회하는 프로시저를 생성 
DELIMITER $$
CREATE PROCEDURE CURRENT_TIME_NOW()
BEGIN
	SELECT NOW() 현재시간;
END $$
DELIMITER ;

CALL CURRENT_TIME_NOW();

DROP PROCEDURE IF EXISTS LPAD_NUMBER;
DELIMITER $$
CREATE PROCEDURE LPAD_NUMBER(
	IN NUM INT 
)
BEGIN
	SELECT LPAD(NUM, 3, '0') LPAD_NUMBER;
END $$
DELIMITER ;

CALL LPAD_NUMBER(1);
# 변수 선언
# SET @변수명 = 값;
SET @NUM = 20;
CALL LPAD_NUMBER(@NUM);

DROP PROCEDURE IF EXISTS PLUS;
DELIMITER $$
CREATE PROCEDURE PLUS(
	IN NUM INT,
    OUT RES INT
)
BEGIN
	SET RES = NUM + 1;
END $$
DELIMITER ;

CALL PLUS(1, @NUM);
SELECT @NUM;

USE SHOPPINGMALL2;
DROP PROCEDURE IF EXISTS BUY_CART;
DELIMITER $$
CREATE PROCEDURE BUY_CART(
    IN CART_NUM INT,
    IN ADDRESS VARCHAR(100)
)
BEGIN
	# BEGIN과 END 사이에서 사용하는 변수는 DECLARE로 선언하고, 시작 위치에 모아 놓아야 함
	DECLARE _PRICE INT;
    DECLARE _AMOUNT INT;
    DECLARE _CODE CHAR(6);
    DECLARE _ID VARCHAR(13);
    
    # SQL 예외가 발생하면 롤백
    declare exit handler for sqlexception
    begin
		rollback;
	end;
    
    # 트랜젹션 시작
    start transaction;
    
    SET _AMOUNT = (SELECT AMOUNT FROM CART WHERE NUM = CART_NUM);
    SET _CODE = (SELECT CODE FROM CART WHERE NUM = CART_NUM);
    SET _ID = (SELECT ID FROM CART WHERE NUM = CART_NUM);
    SET _PRICE = (SELECT PRICE FROM PRODUCT WHERE CODE = _CODE);
    
    # BUY 테이블에 구매 내역 추가 
    INSERT INTO BUY(ADDRESS, AMOUNT, CODE, PRICE, ID)
		VALUES(ADDRESS, _AMOUNT, _CODE, _PRICE*_AMOUNT, _ID);
        
    # PRODUCT 테이블에 제고량 수정 
    UPDATE PRODUCT
	SET
		AMOUNT = AMOUNT - _AMOUNT
	WHERE
		CODE = _CODE;
    
    # CART 테이블에서 해당 장바구니 삭제 
    DELETE FROM CART WHERE NUM = CART_NUM;
    commit;
END $$
DELIMITER ;

CALL BUY_CART(3, "경기도");
# ACC001을 1개 구매
# ACC001 제고가 7개로 변경 
# 장바구니 3번이 삭제 

/*
프로시저에서 사용하는 문법
1. 변수 선언
	- 변수 선언은 begin 밑에 모아 놓음
    - 선언 방법은
		- declare 변수명 타입 [default 초기값];
2. 변수값 수정
	- =은 기본 비교 연산이기 때문에 set을 이용하여 수정
		set 변수명 = 값;
        set 변수명 = (select 쿼리);
3. 조건문 if
	if 조건식 then
		실행문;
	elseif 조건식 then
		실행문;
	else
		실행문;
	end if;
4. 조건문 case
	case 변수
		when 값 then
			실행문;
		when 값2 then
			실행문;
		else
			실행문;
	end case;
5. 반복문 while
	while 조건식 do
		실행문;
	end while;
6. 반복문 repeat
	repeat
		실행문;
	until 조건식
    end repeat;
7. 반복문 cursor
	- 검색 결과를 반복문으로 활용할 때 사용
    declare 변수a boolean default false; #반복을 멈출지말지를 결정하는 변수
    declare 커서 cursor for select 컬럼1, 컬럼2, ... from 테이블명 [where절];
    # 더이상 할 내용이 없으면 변수a를 true로 변경
    declare continue handler for not found set 변수a = true;
    open 커서;
    루프 : loop
    fetch 커서 into 변수1, 변수2, ...;
    if 변수a then
		leave 루프;
	end if;
    실행문;
    end loop;
    close 커서;
*/

drop procedure if exists print_product;
delimiter $$
create procedure print_product()
begin
	declare _done boolean default false; # 커서를 멈추기 위한 변수
    declare _title varchar(50); #제목
    declare _price int; #가격
    
    declare _cursor cursor for select title, price from product;
    declare continue handler for not found set _done = true;
	
    open _cursor;
    product_loop : loop
		# 커서에서 꺼내서 _title, _price 에 넣어줌
		fetch _cursor into _title, _price;
        # 꺼내올게 없으면 루프 종료
        if _done then
			leave product_loop;
		end if;
        select _title, _price;
    end loop;
    close _cursor;
end $$
delimiter ;

call print_product();










