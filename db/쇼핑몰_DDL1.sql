# DB 삭제
drop database if exists shoppingmall1;

# DB 추가
create database if not exists shoppingmall1;

# DB 선택
use shoppingmall1;

# 회원 테이블 삭제 및 추가
drop table if exists user;

create table if not exists user (
    id varchar(13),
    pw varchar(20),
    email varchar(50) unique,
    phone varchar(13) unique
);

# 제품 테이블 삭제 및 추가
drop table if exists product;

create table if not exists product (
    code char(6) primary key,
    ca_code char(3) not null,
    ca_title varchar(10) not null,
    title varchar(100) not null,
    content longtext not null,
    price int not null default 0,
    thumb varchar(255),
    amount int not null default 0
);

# 장바구니 테이블 삭제 및 추가
drop table if exists cart;

create table if not exists cart (
	num int primary key auto_increment,
    amount int not null,
    id varchar(13) not null,
    code char(6) not null,
    constraint fk_ca_us foreign key(id) references user(id),
    constraint fk_ca_pr foreign key(code) references product(code)
);

# 구매 테이블 삭제 및 추가
drop table if exists buy;

create table if not exists buy (
	num int primary key auto_increment,
    amount int not null,
    address varchar(100) not null,
    id varchar(13) not null,
    code char(6) not null,
    constraint fk_bu_us foreign key(id) references user(id),
    constraint fk_bu_pr foreign key(code) references product(code)
);


















