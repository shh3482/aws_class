package day03;

import java.util.Scanner;

public class EX02_ArrayTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 정수 3개를 저장할 수 있는 scores라는 배열을 선언하세요.
		
		int [] scores = new int[3];
		
		// scores에 0번지에 1, 1번지에 2, 2번지에 3을 저장하세요.
		
		scores[0] = 1;
		scores[1] = 2;
		scores[2] = 3;
		for (int i = 0; i < 3; i++) {
			scores[i] = i + 1;
			//System.out.println(scores[i]);
		}
		
		// Scanner를 이용하여 0~100사이의 정수 3개를 입력받아 배열에 저장하세요.
		Scanner scan = new Scanner(System.in);
		System.out.print("정수를 3개 입력하세요: ");
		int [] nums = new int[3];
		for (int i = 0; i < nums.length; i++) {
			int num = scan.nextInt();
			if(0 <= num &&  num <= 100) {
				scores[i] = num;
				System.out.println("입력된 정수: " + scores[i]);
			}
			else {
				System.out.println("정수를 다시 입력하세요: ");
				// System.out.println("(0 ~ 100 사이의 숫자만 입력하세요.)");
				num = scan.nextInt();
				if(0 <= num &&  num <= 100) {
					scores[i] = num;
					System.out.println("입력된 정수: " + scores[i]);
				}
			}
		}
		System.out.println("당신이 입력한 정수는 " + scores[0] + ", " + scores[1] + ", " + scores[2] + " 입니다.");
		
	}

}
