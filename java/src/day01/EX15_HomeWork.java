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
		boolean isA = score >= 90 && score <= 109 ? true : false;
		boolean isB = score >= 80 && score <= 89 ? true : false;
		boolean isC = score >= 70 && score <= 79 ? true : false;
		boolean isD = score >= 60 && score <= 69 ? true : false;
		boolean isF = score >= 50 && score <= 59 ? true : false;
		char grade;

		
		
		switch(score) {
			case isA:
				System.out.println("당신의 학점은 " + grade + " 입니다.");
				break;
			case 'B':
				System.out.println("당신의 학점은 " + grade + " 입니다.");
				break;
			case 'C':
				System.out.println("당신의 학점은 " + grade + " 입니다.");
				break;
			case 'D':
				System.out.println("당신의 학점은 " + grade + " 입니다.");
				break;
			case 'F':
				System.out.println("당신의 학점은 " + grade + " 입니다.");
				break;
			default:
				System.out.println("당신의 학점은 " + grade + " 입니다.");
		}
		System.out.println("당신의 학점은 " + grade + " 입니다.");
	}

}
