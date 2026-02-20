package day03;

import java.util.Scanner;

public class Ex03_ArrayTest2 {

	public static void main(String[] args) {
		/* 3명의 국어 성적을 입력받아 저장한 후, 3명의 국어 성적 평균을 구하는 코드를 작성하세요.
		 * */
		Scanner scan = new Scanner(System.in);
		int [] scores = new int[3];
		int sum = 0;
		double avg = 0.0;
		
		System.out.print("3명의 국어 성적을 입력하세요 : ");
		for(int i = 0; i < scores.length; i++) {
			scores[i] = scan.nextInt();
			sum += scores[i];
		}
		System.out.println("3명의 국어 성적 총합 : " + sum);
		avg = sum / (double)scores.length;
		System.out.println("3명의 국어 성적 평균 : " + avg);
	}

}
