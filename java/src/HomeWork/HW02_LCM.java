package HomeWork;

public class HW02_LCM {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 두 정수의 최소 공배수를 구하는 코드를 작성하세요.
		 * A의 배수 : 어떤 수를 A로 나누었을 때 나머지가 0인 수
		 * A와 B의 공배수 : A와 B의 배수들 중 공통으로 있는 수
		 * A와 B의 최소 공배수 : A와 B의 공배수 중 가장 작은 수
		 */
		int num1 = 150;
		int num2 = 200;

		for(int i = num1; i <= num1 * num2 ; i++) {
			if(i % num1 == 0 && i % num2 == 0 ) {
				System.out.println(i);
				break;
			}
		}
		
		//System.out.println(i);
		//System.out.println(num1 + " 와 " + num2 + " 의 최소 공배수는 " + i + " 입니다.");
	}

}
