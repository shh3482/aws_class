# 분류가 악세서리인 제품을 조회 
-- select * from product where ca_title = "악세서리";
-- select * from product where code like "ACC%";
-- select * from 테이블1 join 테이블2 on 테이블1.컬럼1 = 테이블2.컬럼2;
-- select * from 테이블1 join 테이블2 using(컬럼);
SELECT 
    *
FROM
    product
        JOIN
    category ON product.num = category.num
    -- category USING (num) 도 가능 컬럼1 = 컬럼2가 같을시!
WHERE
    category.title = '악세서리';

# 제품명에 18K가 포함된 제품을 조회 
-- select * from product where title like "%18K%";
select
	*
from
	product
		join
	category on product.num = category.num
where
	product.title like "%18K%";
	

# abc123회원의 장바구니 목록 조회 
-- select * from cart where id = "abc123";
insert into cart(id, amount, code) values("abc123" , 1, "ACC001");

select
	*
from
	cart
		join
	product on cart.code = product.code
where
	id = "abc123";

# abc123회원이 구매한 구매 내역 조회
-- select product.*, buy.amount 구매수량 from buy 
-- join product using(code)
-- where id = "abc123";
select
	*
from
	buy
		join
	product using(num)
where
	id = "abc123";

# abc123회원의 누적 금액을 조회 
-- select id, sum(price * buy.amount) 누적금액 
-- from buy join product using(code)
-- where id ="abc123";
select
	id, sum(price * buy.amount)
from
	buy
where
	id = "abc123";

# 회원별 누적 금액을 조회 
-- select id, sum(price * buy.amount) 누적금액 
-- from buy join product using(code) 
-- group by id;
insert into user(id, pw, email, phone)
values("qweqwe", "qweqwe", "qweqwe@naver.com", "011-2233-4444");

SELECT 
    id, ifnull(SUM(price * buy.amount),0)
FROM
    buy
        RIGHT JOIN
    user USING (id)
GROUP BY id;


