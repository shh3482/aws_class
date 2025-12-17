/*
sql
- DDL : 데이터 정의어
- DML : 데이터 조작어
- DCL : 데이터 제어어
- TCL : 트랜잭션 제어어

DDL (2번 파일)
  - DB, 테이블을 추가, 수정, 삭제
  - create, drop
  - create database [if not exists] DB명;
  - create table if exists 테이블명(
  컬럼1 타입 옵션,
  컬럼2 타입 옵션,
  constraint 제약명 primary key (컬럼),
  constraint 제약명 foriegn key (컬럼) references 테이블명(기본키명)
  )
  - 옵션 : primary key, not null, unique, default 초기값
		  auto_increment(기본키에만)
	- constraint 제약명 은 생략가능.
      자동으로 만들어서 추가 됨.
  - drop database if exists DB명;
  - drop table if exists 테이블명;
  
DML (3번 파일)
  - 데이터 추가, 수정, 삭제, 조회(CRUD)
  - insert, update, delete, select
  - insert into 테이블(컬럼1, 컬럼2, ..., 컬럼N) values(값1, 값2, ..., 값n)
    - 생략된 컬럼에는 null 허용이면 null이 들어감.
    - not null이면 default 값이 들어감. => default 값을 설정하지 않으면 에러 발생.
    - 기본키이고 auto_increment 이면 다음 숫자가 자동으로 들어감
  - update 테이블명 set 컬럼1 = 값1, 컬럼2 = 값2, ... where 조건;
  - delete from 테이블명 where 조건;
  - select (4번 파일)
	  select * from 테이블
	  where 조건
	  group by 컬럼1 asc|desc, 컬럼2 asc|desc
	  having 조건
	  over by 정렬
	  limit 번지, 개수;
	- 실행 순서
	  from 테이블
      > where 조건
      > group by
      > having
      > select *
		(단, 집계함수인 경우 mysql 과 오라클은 편의를 위해 별칠을 다른곳에서 사용할수 있음)
	  > order by
      > limit
  - 서브 쿼리 
	  - 쿼리 안에 쿼리가 들어감
      - 서브쿼리는 select
  
DCL (7번 파일)
  - 사용자 추가/삭제, 권한 부여/회수
  - create, drop, grat, revoke
  - create user '아이디'@'호스트' identified '비번';
    - 호스트 : 접근 권한. localhost : 내부에서만, % : 외부에서 접근 가능
  - drop user '아이디'@'호스트';
  - grant 권한1, 권한2, ... on DB명.테이블명 to '아이디'@'호스트';
  - revoke 권한1, 권한2, ... on DB명.테이블명 from '아이디'@'호스트';

TCL (8번 파일)
  - 트랜잭션 제어. 트랜잭션 시작, 저장, 완료, 취소
  - 프로시져, 트리거, 이벤트 스케줄러에서 사용하면 좋음 (강력 추천)
  - start transaction;
  - savepoint 저장명;
  - commit;
  - rollback;
  - rollback to 저장명;
  
*/

# 내장 함수 : DBMS가 제공하는 함수 (5번 파일)
# - 조건 함수
# - 문자열 함수
# - 날짜 함수

# 윈도우 함수 : 순위를 매기는 함수 (6번 파일)
# - ROW_NUMBER : 1,2,3,4,5
# - RANK : 1,2,2,4,5
# - DENSE_RANK : 1,2,2,3,4
# - NTILE(N) : 그룹화 - N개의 그룹을 만들어서 순위를 붙임

# 프로시저 (9번 파일)
# - 일련의 기능을 하도록 모아놓은 쿼리
# - CALL을 통해 프로시저를 원할 때 호출

# 트리거 (10번 파일)
# - 이벤트가 발생했을 때 실행해야 하는 작업을 모아놓은 쿼리
# - 이벤트가 발생했을 때 자동으로 실행

# 스케줄러 (11번 파일)
# - 주기적으로 실행해야 하는 코드를 예약하거나 특정 시간에 한번만 실행해야 하는 코드를 예약
#   할 때 사용

























