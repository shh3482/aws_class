/*
[문항1]  ◆데이터베이스◆
[평가 과제]
- 쇼핑몰 프로젝트를 구축하려고 합니다. 데이터베이스를 각 항목에 맞게 작성하여 순차적으로 완성하세요.

[문항1]
데이터베이스 시스템
프로젝트 전용 DB를 만들고 관리자를 지정하세요.
- mall이라는 데이터베이스를 생성하고, 이 DB의 모든 권한을 가진 mall_admin 계정(비번: '1234')을 생성하는 쿼리를 작성하세요.(접속 호스트는 자유)
*제출 파일 : DB_데이터베이스 시스템_이름.JPG
*/
drop database if exists mall;
create database mall;
use mall;

create user 'mall_admin'@'%' identified by 'mall_admin';
set password for 'mall_admin'@'%' = '1234';

grant all privileges on mall.* to 'mall_admin'@'%';
show grants for 'mall_admin'@'%';


/*
[문항2]  ◆데이터베이스◆
[평가 과제]
- 쇼핑몰 프로젝트를 구축하려고 합니다. 데이터베이스를 각 항목에 맞게 작성하여 순차적으로 완성하세요.

[문항2]
관계 데이터 모델
다음 조건에 맞는 회원(member) 테이블과 상품(product) 테이블을 생성하는 쿼리를 작성하세요.
- member
- m_id : 아이디, 정수, 기본키
- m_name : 이름, 최대 20자, 필수
- m_point : 포인트, 정수, 기본값 0
- product
- p_id : 제품번호, 정수, 기본키
- p_name : 제품명, 최대 50자
- p_price : 가격, 정수
- p_stock : 수량, 정수
*제출 파일 : DB_관계데이터모델_이름.JPG
*/
drop table if exists `member`;

create table `member` (
	`m_id`		int primary key,
    `m_name`	varchar(20) not null,
    `m_point`	int default 0
);

drop table if exists `product`;

create table `product` (
	`p_id`		int primary key,
    `p_name`	varchar(50),
    `p_price`	int,
    `p_stock`	int
);


/*
[문항3]  ◆데이터베이스◆
[평가 과제]
- 쇼핑몰 프로젝트를 구축하려고 합니다. 데이터베이스를 각 항목에 맞게 작성하여 순차적으로 완성하세요.

[문항3]
데이터 모델링
회원이 상품을 주문하는 주문(orders) 테이블을 생성하고, 외래키를 설정하는 쿼리를 작성하세요.
- o_id : 주문번호, 정수, 기본키
- m_id : 주문자 아이디, 정수
- p_id : 주문 제품번호, 정수
- o_qty : 주문 수량, 정수
- o_date : 주문일, 날짜
- 외래키 조건
- m_id는 회원(member) 테이블을, p_id는 상품(product)를 참조하도록 외래키를 설정
*제출 파일 : DB_데이터모델링_이름.JPG
*/
drop table if exists `orders`;

create table `orders` (
	`o_id`		int primary key auto_increment,
    `m_id`		int,
    `p_id`		int,
    `o_qty`		int,
    `o_date`	date
);

alter table `orders` add constraint `fk_member_to orders_1` foreign key (
	`m_id`
)
references `member` (
	`m_id`
);

alter table `orders` add constraint `fk_product_to orders_1` foreign key (
	`p_id`
)
references `product` (
	`p_id`
);


/*
[문항4]  ◆데이터베이스◆
[평가 과제]
- 쇼핑몰 프로젝트를 구축하려고 합니다. 데이터베이스를 각 항목에 맞게 작성하여 순차적으로 완성하세요.

[문항4]
SQL 기초와 활용
시스템 운영을 위해 기초 데이터를 입력하고, 정상적으로 들어갔는지 확인해야 합니다.
- 4-1 : 다음 데이터를 추가하는 쿼리를 작성하세요.
- 회원
- 아이디 : 1, 이름 :홍길동, 포인트 :1000
- 아이디 : 2, 이름 :김철수, 포인트 :500
- 상품
- 상품 번호 :101, 상품명 : 노트북, 가격 :1500000, 재고 :10
- 상품 번호 :102, 상품명 : 마우스, 가격 :30000, 재고 :50
- 4-2 : 모든 회원의 이름과 포인트, 그리고 모든 상품의 이름과 재고량을 각각 조회하여 데이터가 정확히 입력되었는지 확인하는 쿼리를 작성하세요.
*제출 파일 : DB_SQL기초_이름.JPG
*/
insert into member(m_id, m_name, m_point)
values
(1, '홍길동', 1000),
(2, '김철수', 500);

select m_name, m_point
from member;

insert into product(p_id, p_name, p_price, p_stock)
values
(101, '노트북', 1500000, 10),
(102, '마우스', 30000, 50);

select p_name, p_stock
from product;

/*
[문항5]  ◆데이터베이스◆
[평가 과제]
- 쇼핑몰 프로젝트를 구축하려고 합니다. 데이터베이스를 각 항목에 맞게 작성하여 순차적으로 완성하세요.

[문항5]
정규화, 트랙잭션, 동시성 제어, 회복문 발생 시 결제와 재고 처리는 동시에 완결되어야 합니다.
다음 과정을 하나의 트랜잭션으로 처리하는 쿼리를 작성하고, 작업이 잘 되었는지 조회하는 쿼리를 작성하세요.
- 조건: 1번 회원이 101번 상품을 2개 주문함
- product 테이블: 101번 상품 재고 2개 감소
- member 테이블: 1번 회원 포인트 100점 증가
- orders 테이블: 주문 내역 추가 (1번 회원, 101번 상품, 수량 2, 오늘 날짜)
- 1번 회원이 주문한 상품명을 조회(JOIN 이용)
*제출 파일 : DB_트랙잭션_이름.JPG
*/
start transaction;
drop trigger if exists order_product;
delimiter $$
create trigger order_product
after insert on orders
for each row
begin
    update product
    set
		p_stock = p_stock - new.o_qty
	where
		p_id = new.p_id;
        
	update member
    set
		m_point = m_point + 100
	where
		m_id = new.m_id;
end $$
delimiter ;
commit;
start transaction;
insert into orders(m_id, p_id, o_qty, o_date)
values(1, 101, 2, date(now()));
select * from product
join orders using (p_id)
join member using (m_id);
commit;
show triggers;
/*
[문항6]  ◆데이터베이스◆
[평가 과제]
- 쇼핑몰 프로젝트를 구축하려고 합니다. 데이터베이스를 각 항목에 맞게 작성하여 순차적으로 완성하세요.

[문항6]
데이터베이스 보안과 관리
배송 업체에 데이터를 전달해야 하지만, 회원의 포인트 정보는 보안상 숨겨야 합니다. member 테이블에서 포인트 컬럼을 제외하고,
m_id, m_name만 조회하는 보안용 가상 테이블 v_member_public을 생성하는 쿼리를 작성하세요.
*제출 파일 : DB_데이터베이스보안_이름.JPG
*/
create view v_member_public as
select m_id, m_name
from member;

select * from v_member_public;

