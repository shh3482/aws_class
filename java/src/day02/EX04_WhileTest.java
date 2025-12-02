package day02;

public class EX04_WhileTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// Hello World 5번 출력 예제
		int i = 0;
		while (++i <= 5) {
			System.out.println("Hello World!");
		}
		
		// 2단 구구단 출력 예제
		i = 0;
		while (++i < 10) {
			System.out.println("2 x " + i + " = " + (2 * i));
		}
	}

}
