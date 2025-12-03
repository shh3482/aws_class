package day03;

import java.util.Scanner;

public class EX03_ArrayTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 3명의 국어 성적을 입력받아 저장한 후, 3명의 국어 성적 평균을 구하는 코드를 작성하세요.
		
		int [] scores = new int[3];
		Scanner scan = new Scanner(System.in);
		int sum = 0;
		System.out.println("3명의 국어 성적을 입력하세요: ");
		for(int i = 0; i < scores.length; i++) {
			int num = scan.nextInt();
			scores[i] = num;
			sum += scores[i];
			System.out.println((i+1) + " 번째 학생의 점수는 " + num + " 입니다.");
		}
		double avrg = (sum / (double)scores.length);
		System.out.println("3명의 국어 성적 합은 " + sum +" 이며,");
		System.out.println("3명의 국어 성적 평균 점수는 " + avrg +" 입니다.");
	}

}
