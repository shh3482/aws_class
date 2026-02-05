package homework;

import java.util.Scanner;

public class HW05_Reverse {

	public static void main(String[] args) {
		/* 4자리 정수를 입력받아 거꾸로 출력하는 코드를 작성하세요.
		 * 예시
		 * 입력 : 1234
		 * 결과 : 4321
		 * 예시
		 * 입력 : 2000
		 * 결과 : 0002
		 * */
		Scanner scan = new Scanner(System.in);
		
		//정수 입력
		
		//정수 4자리 확인
		
		//반복문으로 정수가 0이 될때까지 반복
		
			//일의 자리 추출 1234에서 4를 추출
		
			//일의 자리 제거 1234를 123으로 
		
		
		
		
		
		
		
		
		
		
		
		
		System.out.print("4자리 정수 입력 : ");
		//정수 입력
		int num = scan.nextInt();
		
		//정수 4자리 확인
		if(num < 1000 || num > 9999) {
			System.out.println("4자리 정수가 아닙니다.");
			return;
		}
		int tmp = num;//num의 값은 남기기 위해 tmp를 이용
		//반복문으로 정수가 0이 될때까지 반복
		while(tmp != 0) {
			//일의 자리 추출 1234에서 4를 추출
			System.out.print(tmp % 10);
			//일의 자리 제거 1234를 123으로 
			tmp = tmp / 10; //tmp /= 10;
		}
				
	}

}
