package HomeWork;

import java.util.Scanner;

public class HW05_Reverse {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 4자리 정수를 입력받아 거꾸로 출력하는 코드를 작성하세요.
		 * 예시 
		 * 입력: 1234
		 * 결과: 4321
		 * 
		 */
		
		Scanner scan = new Scanner(System.in);
		int inputNum = 0;
		System.out.println("4자리 번호를 입력하세요: ");
		inputNum = scan.nextInt();
		int num1 = inputNum % 10000;
		int num2 = inputNum % 1000;
		int num3 = inputNum % 100;
		int num4 = inputNum % 10;
		
		int [] array = new int[4];
		array[0] = num4 * 1000;
		array[1] = ((num3 - num4)/10) * 100;
		array[2] = ((num2 - num3)/100) * 10;
		array[3] = (num1 - num2)/1000;
		
		System.out.println(array[0] + array[1]+ array[2] +array[3]);

	}

}
