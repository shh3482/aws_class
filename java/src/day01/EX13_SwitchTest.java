package day01;

import java.util.Scanner;

public class EX13_SwitchTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 월을 입력받아 입력받은 월에 마지막 일을 출력하는 코드를 작성하세요.
		
		Scanner scan = new Scanner(System.in);
		System.out.print("달을 입력 : ");
		int num = scan.nextInt();
		switch(num) {
		case 1, 3, 5, 7, 8, 10, 12:
			System.out.print("마지막 일 : 31일");
			break;
		case 2:
			System.out.print("마지막 일 : 28일");
			break;
		case 4, 6, 9, 11:
			System.out.print("마지막 일 : 30일");
			break;
		default:
			System.out.print("유효한 값을 입력하세요.");
		}
	}

}
