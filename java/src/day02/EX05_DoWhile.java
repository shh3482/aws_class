package day02;

public class EX05_DoWhile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* do while문
		 * - 무조건 한번은 실행
		 * - 실행 후 조건을 검사
		 * 
		 * 문법
		 *  do{
		 *    실행문;
		 *  }while(조건식);
		 * 
		 */
		
		int num = 10;
		do {
			System.out.println(num + "는 0 보다 작습니다.");
			num--;
		}while(num < 0);
	}

}
