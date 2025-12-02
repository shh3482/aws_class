package day02;

public class EX06_DoWhileTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 두 정수의 최대 공약수를 구하는 코드를 작성하세요.
		
		int int1 = 10; // 1, 2, 5, 10
		int int2 = 20; // 1, 2, 4, 5, 10, 20
		int int1num = 0;
		int	int2num = 0;
		int i;
		int i2;
		
		// int1의 약수를 구한다.
		for(i = int1; i> 0 ; i--) {
			if(int1 % i == 0) {
				int1num = int1 / i;
				//System.out.println(int1num);
			}
		}
		
		// int2의 약수를 구한다.
		for(i2 = int2; i2> 0 ; i2--) {
			if(int2 % i2 == 0) {
				int2num = int2 / i2;
				//System.out.println(int2num);
				
				if(int1num == int2num) {
					System.out.println(int1 + " 과 " + int2 + " 의 최대 공약수는 " + int1num + " 입니다.");
				}
			}
		}
	}

}
