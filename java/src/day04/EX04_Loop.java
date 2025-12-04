package day04;

public class EX04_Loop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 반복문
		 *  - 왜 쓸까?
		 *    - 단순 반복할 작업을 효율적으로 작업할 수 있게 해줌
		 *    - 예 : Hello World 100번 출력 예제
		 * - 언제?
		 *   - 규칙성이 있는 작업을 반복적으로 할 때
		 *   - 1부터 10까지 숫자를 셀 때
		 * 	 - 수강 정원이 10명이 될 때 까지 상담
		 * - 종료
		 *   - for문, while문
		 *     - 조건에 따라 한번도 실행되지 않을 수 있음
		 *   - do while문
		 *     - 무조건 한번은 실행
		 * - for문 문법
		 * for(초기화;조건식;증감식){
		 * }
		 * - 초기화 : 생략 가능. 조건식이나 실행문에서 사용하는 변수를 초기화. 한번만 실행(처음)
		 * 			초기화 위치에서 변수 선언 가능
		 * 			=> 여기서 선언한 변수는 for문에서만 사용
		 * 			=> for문 밖에서는 사용할 수 없음
		 * - 조건식 : 생략 가능. 생략하면 참. 참이면 실행문으로, 거짓이면 반복문을 종료
		 * - 증감식 : 생략 가능. 조건식에서 사용하는 변수를 증가, 감소 시킴 => 반복횟수를 조절
		 * - 실행순서
		 *   초기화 => 조건식(거짓) => 반복문 종료
		 *   초기화 => 조건식(참) => 실행문 => 증감식
		 *        => 조건식(참) => 실행문 => 증감식
		 *        => 조건식(거짓) => 반복문 종료
		 * 
		 * - 조건식이란?
		 *   - 결과가 true 또느 false가 나오는 식
		 *   - 보통 비교 연산자와 논리 연산자를 활용한 식 
		 *   
		 */
		
		int i;

		for(i = 1; i <= 5; i++) {
			System.out.println("Hello World");
		}
		for(i = 2; i <= 10; i += 2) {
			System.err.println("Hello World");
		}
		for(i = 5; i >= 1; i--) {
			System.out.println("Hello World");
		}
		
		/* while문
		 * - 특징
		 *   - for문과 다르게 초기화, 증감식 위치가 보장되지 않음
		 *   - 보통 while문 시작전에 초기화.
		 *   - 실행문에 증감식이 포함되거나 조건식에 증감식이 포함
		 * - while문 보통 일정한 반복 횟수가 없을 때 사용  
		 * - 문법
		 * while(조건식){
		 *   실행문;
		 * }
		 * 
		 */
		
		i = 1;
		while(i <= 5){
			System.err.println("Hello World");
			i++;
		}
		
		i = 5;
		while(i-- >= 1){ // <= i-- 이렇게 쓰면 밑으로 내려가기전에 ()안에 계산을 다 마치고 -- 을 진행하고 밑으로 내려감.
			System.out.println("Hello World");
		}
		
		/* do while문
		 * - 특징
		 *   - 최소 한번은 실행
		 * - 문법
		 * do{
		 *   실행문;
		 * }
		 * while(); // 여기서 ; 는 필수
		 * 
		 */
		i = 1;
		do {
			System.err.println("Hello World");
			i++;
		}
		while(i <= 5);
		
		/* 중첩 반복문
		 * - 반복문 안에 반복문이 들어가 있는 형태
		 * 
		 */
		
		/* break문
		 * - switch나 반복문을 빠져 나가는 역할
		 * - switch에서는 case 마지막에 break를 주어서 빠져 나감
		 * - 반복문에서는 if문과 함께 사용 되어 반복문을 빠져 나감
		 * 
		 * continue문
		 * - 스킵
		 * - 반복문에서 continue를 만나면 특정 위치로 이동
		 * - 특정위치
		 *   - for문 : 증강식
		 *   - while문, do while문 : 조건식
		 */
		
		// Hello World 5번 출력 예제 break문
		i = 1;
		while(true) {
			System.out.println("Hello World");
			if(i == 5) {
				break;
			}
			i++;
		}
		// 10이하의 짝수를 출력하는 예제 continue문
		for(i = 1; i <= 10; i++) {
			if(i % 2 != 0) {
				continue;
			}
			System.out.print(i + " ");
		}
		/* 무한 루프
		 * - 조건식이 항상 참이어서 반복문을 빠져 나오지 못하는 상황
		 * - 보통 무한루프로 만든 후 if문과 break를 이용하여 특정 상황에서 종료 되게 함
		 * for문으로 무한루프
		 * - 조건식을 생략
		 * while문에서 무한루프
		 * - 조건식에 true
		 * 
		 */

	}
}
























