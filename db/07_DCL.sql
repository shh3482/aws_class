# DCL : 데이터 조작어
# - 사용자 추가/삭제, 권한 부여/회수 

# 사용자 추가
# - create user '아이디'@'호스트' identified by '비번';
# - 호스트 : 접근 권한
# 	- localhost : 내부에서만 접근 가능 => 다른 PC에서 해당 계정으로 접근 못함
# 	- % : 외부에서도 접근 가능
create user 'abc123'@'%' identified by 'abc123';

# 사용자 조회
select user, host from mysql.user;

# 사용자 비번 변경
# set password for '아이디'@'호스트' = '새비번';
set password for 'abc123'@'%' = 'abc1234';

# 사용자 삭제
# drop user '아이디'@'호스트';
drop user 'abc123'@'%';

# 권한 부여를 위한 사용자 계정 추가
create user 'abc123'@'%' identified by 'abc123';

# 권한 부여
# - 사용자에게 특정 DB의 접근 권한을 부여.
# - 테이블 추가/수정/삭제, 데이터 추가/수정/삭제/조회 등
# - select/insert/update/creat/alter/drop/references
# - all privileges(모든 권한)
# Grant 권한 on db명. 테이블명 to '아이디'@'호스트';
grant select on world.* to 'abc123'@'%';
grant all privileges on world.* to 'abc123'@'%';

# 권한 제거
# revoke 권한 on db명. 테이블명 from '아이디'@'호스트';
revoke all privileges on world.* from 'abc123'@'%';

# 권한 확인
show grants for 'abc123'@'%';










