package day02;

public class EX07_NestedFor {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 중첩 반복문
		 * - 반복문의 실핼문으로 반복문이 오는 경우
		 * - 반복문 안에 반복문이 오는 경우
		 * 
		 */
		int num = 2;
		
		for(num = 2; num <= 9; num++) {
			for(int i = 1; i <= 9; i++) {
				System.out.println(num + " x " + i + " = " + num * i);
			}
			System.out.println();
		}
	}

}
