package day01;

import java.util.Scanner;

public class EX10_OperatorTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 두 정수를 입력받아 합을 구하는 코드를 작성하세요.
		
		Scanner scan = new Scanner(System.in);
		System.out.print("두 정수 입력 : ");
		int num1 = scan.nextInt();
		int num2 = scan.nextInt();
		System.out.println(num1 + "+" + num2 + "=" + (num1 + num2));
	}

}
