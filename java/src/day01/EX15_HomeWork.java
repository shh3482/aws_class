package day01;

import java.util.Scanner;

public class EX15_HomeWork {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 성적을 입력받아 성적에 맞는 학점을 출력하는 코드를 작성하세요. switch
		 * A : 90 ~ 109
		 * B : 80 ~ 89
		 * C : 70 ~ 79
		 * D : 60 ~ 69
		 * F : 50 ~ 59
		 * 잘못된 성적 : -9미만, 110이상
		 */
		
		Scanner scan = new Scanner(System.in);
		System.out.print("성적을 입력하세요:");
		int score = scan.nextInt();
		
		switch(score / 10) {
			case 9, 10:
				System.out.println("당신의 학점은 A 입니다.");
				break;
			case 8:
				System.out.println("당신의 학점은 B 입니다.");
				break;
			case 7:
				System.out.println("당신의 학점은 C 입니다.");
				break;
			case 6:
				System.out.println("당신의 학점은 D 입니다.");
				break;
			case 5, 4, 3, 2, 1, 0:
				System.out.println("당신의 학점은 F 입니다.");
				break;
			default:
				System.out.println("잘못된 성적입니다.");
		}
	}

}
