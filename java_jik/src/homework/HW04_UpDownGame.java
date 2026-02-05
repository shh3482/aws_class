package homework;

import java.util.Scanner;

public class HW04_UpDownGame {

	public static void main(String[] args) {

		/* 1~100사이의 랜덤한 수를 생성해서 맞추는 게임
		 * 랜덤한 수 : 33//안보여야 함
		 * 정수입력 : 50
		 * DOWN
		 * 정수입력 : 25
		 * UP
		 * 정수입력 : 30
		 * UP
		 * 정수입력 : 33
		 * 정답입니다. 
		 * */

		//랜덤 수 생성
		
		//반복문 : 랜덤수를 맞추면 종료
		
			//정수 입력 안내문
		
			//정수 입력
		
			//입력한 정수가 랜덤수보다 크면 DOWN
		
			//아니고 작으면 UP
		
			//같으면 정답입니다.라고 출력
		
		
		
		
		Scanner scan = new Scanner(System.in);
		int min = 1, max = 100;
		//랜덤 수 생성
		int random = (int)(Math.random() * (max - min + 1) + min);
		
		//확인용
		//System.out.println(random);
		
		//반복문 : 랜덤수를 맞추면 종료
		while(true) {
			
			//정수 입력 안내문
			System.out.print("정수 입력 : ");
			
			//정수 입력
			int num = scan.nextInt();
			//입력한 정수가 랜덤수보다 크면 DOWN
			if(num > random) {
				System.out.println("DOWN");
			}
			//아니고 작으면 UP
			else if(num < random) {
				System.out.println("UP");
			}
			//같으면 정답입니다.라고 출력 후 반복문 종료
			else {
				System.out.println("정답입니다.");
				break;
			}
			
		}
	}

}
