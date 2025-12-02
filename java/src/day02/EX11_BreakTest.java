package day02;

import java.util.Scanner;

public class EX11_BreakTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 문자를 입력받아 입력받은 문자열을 출력하는 코드를 작성하세요.
		
		char ch;
		Scanner scan = new Scanner(System.in);
		
//		System.out.print("문자를 입력하세요: ");
//		ch = scan.next().charAt(0);
//		//System.out.println("입력 문자 : " + ch);
//		// q 를 유니번호?로 바꾸고, 유니번호가 해당하는 숫자가 맞는지 확인되면 break;
//		//System.out.println((char)113);
//		if (scan.next().charAt(0) == (char)113) {
//			System.out.println("입력 문자 : " + ch);
//		}
		
		do {
			for (ch = 'a'; ch != 'q'; ) {
				System.out.print("문자를 입력하세요: ");
				ch = scan.next().charAt(0);
				System.out.println("입력 문자 : " + ch);
			}
		}while(ch != 'q');
		System.out.println("프로그램 종료.");
	}

}
