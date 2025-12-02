package day02;

public class EX03_While {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* while문 문법
		 * 
		 * while(조건식){
		 *   실행문;
		 * }
		 * 
		 * for문과 비교를 위해 while문 추가. 실제 문법은 위를 참고
		 * 초기화;
		 * while(조건식){
		 *   실행문;
		 *   증강식; //실제 while문에서 증강식 위치는 없음. 그냥 실행문
		 * }
		 * 
		 * 실행순서
		 * 조건식(거짓) => 반복문 종료
		 * 조건식(참) => 실행문
		 * => 조건식(참) => 실행문
		 * => 조건식(거짓) => 반복문 종료
		 * 
		 * while문에서 조건식은 생략할 수 없음
		 */
		
		int i = 1;
		while( i <= 5) {
			System.out.println(i);
			i++;
		}
	}

}
