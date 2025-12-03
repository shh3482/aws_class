package day03;

import java.util.Scanner;

public class EX09_MethodTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 두 정수와 산수 연산자가 주어지면 연산 결과를 알려주는 메서드를 만들고,
		 * 만들어진 메서드를 호출해서 테스트 해보세요.
		 * 
		 */
		
		Scanner scan = new Scanner(System.in);
		int num1 = 10,  num2 = 2;
		char i = '+';
		double res = result(num1, i, num2);
		System.out.println(res);
	}
	
	public static double result(int num1, char i, int num2){
		if(i == '+') {
			return (num1 + num2);
		}
		else if(i == '-') {
			return (num1 - num2);
		}
		else if(i == '/') {
			return (num1 / num2);
		}
		else if(i == '*') {
			return (num1 * num2);
		}
		else if(i == '%') {
			return (num1 % num2);
		}
		else {
		}
		return i;			
	}

}
