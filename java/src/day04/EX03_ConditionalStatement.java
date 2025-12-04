package day04;

public class EX03_ConditionalStatement {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 조건문
		 * - 언제 사용?
		 *   - 상황에 따라 결과가 달라질 때 사용
		 *   - 성적에 따라 학점이 달라질 때
		 *   - A이면 B이다로 표현 가능하면 조건문을 사용
		 *   - A : 조건식, B : 실행문
		 *   
		 * if문
		 * - 문법
		 *   if(조건식){
		 *   실행문;
		 *   }
		 * - 적용
		 *   - A이면 B하세요.
		 *   if (A){
		 *     B;
		 *   }
		 * - 문법2
		 *   if(조건식){
		 *     실행문1;
		 *   }
		 *   else{
		 *     실행문2;
		 *   }
		 * - 적용
		 *   - A이면 B하고 아니면 C하세요.
		 *   if(A){
		 *     B;
		 *   }
		 *   else{
		 *     C;
		 *   }
		 * - 문법3
		 *   if(조건식1){
		 *     실행문1;
		 *   }
		 *   else if(조건식2){
		 *     실행문2;
		 *   }
		 *   else{
		 *     실행문3;
		 *   }
		 * - 적용
		 *   - A이면 B하고, 아니면 C이면 D하고, 아니면 F하세요.
		 *   if(A){
		 *     B;
		 *   }
		 *   else if(C){
		 *     D;
		 *   }
		 *   else{
		 *     F;
		 *   }
		 *   
		 *   
		 */
		
		int 이수학점 = 150;
		final int 졸업학점 = 151;
		boolean 졸업작품여부 = false;
		if(졸업학점 <= 이수학점 || 졸업작품여부 == true) {
			System.out.println("졸업");
		}
		else {
			System.out.println("졸업 실패");
		}
		
		/* switch문
		 * - 언제 사용?
		 *   - if문에서 각 조건문이 변수 == 값 형태로 되어 있는데 변수가 고정인 경우 사용
		 * - 왜 사용?
		 *   - if문보다 구조가 간결
		 * - 문법
		 * switch(변수){
		 * case 값1:
		 *   실행문1;
		 *   break;
		 * case 값2:
		 *   실행문2;
		 *   break;
		 * default:
		 *   실행문3;
		 * }
		 * - 주의사항
		 *   - 값에는 상수(final로 선언한 값)와 리터럴(1,2,3,'a')만 올 수 있음
		 *   - 값은 문자, 정수, 문자열만 가능
		 *   - case에 break가 없으면 실행문 실행 후 다음 case에 실행문으로 이동
		 *     => case에서는 break를 만나야 switch문을 빠져 나감
		 *     => 실행문이 같은 경우 break를 생략해서 하나의 실행문으로 여러 case를 관리할 수 있다.
		 *     => 실행문이 같아서 case를 함께 관리할 때 case 값1, 값2, 값3... 으로 줄여쓸 수 있다.
		 */
		
		// 문자가 산술연산자이면 산술연산자입니다 라고 출력하는 예제
		char ch = '*'; // char <- 문자만 이라 밑에 case도 문자로 해야함, string 으로 바꿀시 "로 사용가능
		
		switch(ch) {
		case '+', '-', '*','/' ,'%':
			System.out.println(ch + " 는 산술 연산자입니다.");
			break;
		default:
			System.out.println(ch + " 는 산술 연산자가 아닙니다.");
		}
		
	}

}
















