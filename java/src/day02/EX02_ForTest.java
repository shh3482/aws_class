package day02;

import java.util.Scanner;

public class EX02_ForTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 구구단 2단을 출력하는 코드를 작성하세요.
		
		for(int i = 1; i <=9; i++) {
			System.out.println( "2 x " + i + " = " + (2 * i));
		}
		System.out.println();
		
		// a에서 z까지 출력하는 코드를 작성하세요.
		for(int i = 0; i < 26; i++) {
			System.out.print((char)(97+i));
		}
		System.out.println();
		
		for(char ch = 'a' ; ch <= 'z' ; ch++) {
			System.out.print(ch);
		}
		System.out.println();
		
		/* 1부터 10까지 합을 구하는 코드를 작성하세요.
		 * 
		 */
		
		int i;
		int sum;
		for(i = 1, sum = 0; i <= 10; i++) {
			sum = sum + i;
		}
		System.out.print(sum);
	}

}
