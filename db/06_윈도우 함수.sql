# 윈도우 함수
# 	- 테이블의 행과 행 사이의 관계를 정의하기 위해 제공하는 함수
# 	- OVER절이 들어간 함수
#	- 순위를 표현할 때 사용

# ROW_NUMBER : 값이 같더라도 다른 번호를 부여
# - 1, 2, 3, 4, 5
# RANK : 값이 같으면 같은 등수로 표시, 다음 등수는 등수만큼 건너뛰어서 진행
# - 1, 2, 2, 4, 5
# DENSE_RANK : 값이 같으면 같은 등수로 표시, 다음 등수는 이어서 진행
# - 1, 2, 2, 3, 4

# select 컬럼, 윈도우함수() over(order by 정렬) `별명` from 테이블;
use shoppingmall2;
select row_number() over(order by price desc) 순위,
	product.*
    from product;
    
select rank() over(order by price desc) 순위,
	product.*
    from product;
    
select dense_rank() over(order by price desc) 순위,
	product.*
    from product;
    
# 가격이 제일 높은 제품 3개를 조회
select *
from (select row_number() over(order by price desc) 순위,
	product.*
    from product) T
where 순위 <= 3;
    
# Ntile
# - 검색 결과 전체를 지정된 그룹으로 분할하여 번호를 할당
# - 등급 간격이 동일할 때 활용
# select ntile(그룹수) over(order by 정렬), 컬럼 from 테이블;
# 제품을 가격순으로 내림차순으로 정렬하여 2개의 그룹(비싼거, 싼거)으로 나눔
select ntile(2) over(order by price desc), product.* from product;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
