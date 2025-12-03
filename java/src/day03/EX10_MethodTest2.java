package day03;

public class EX10_MethodTest2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 두 정수의 최대 공약수를 구하는 메서드를 만들고 테스트 해보세요.
		
		/* 최대 공약수를 이용하여 최소 공배수를 구하세요.
		 * A, B의 최대 공약수를 g라 하면
		 * A = ga, B = gb로 표현할 수 있고,
		 * 최대 공약수를 이용하여 최소 공배수를 l를 다음과 같이 표현
		 * l= gab
		 * l= AB/g
		 */
		
		int num1 = 12;
		int num2 = 24;
		int a = 0;
		int res = result(num1, num2, a);
		System.out.println(num1 + " 과 " + num2 + " 의 최대 공약수는 " + res + " 입니다.");
	}
	public static int result(int num1, int num2, int a) {
		for(int i = 1; i <= num1 && i <= num2; i++) {
			if(num1 % i == 0 && num2 % i ==0) {
				a = i;
				System.out.println(num1 + " 과 " + num2 + " 의 공약수 " + a);
			}
		}
		return a;
	}

}
