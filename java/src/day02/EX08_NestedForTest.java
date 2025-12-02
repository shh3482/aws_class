package day02;

public class EX08_NestedForTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// num가 소수이면 num를 출력하고 아니면 출력하지 않는 코드를 작성하세요.
		
		int num;
		int count = 0;
		
		for(num = 2; num <= 100; num++) {
			for(int i = 1; i <= num; i++) {
				if(num % i == 0) {
					count++;
				}
			}
			if(count == 2) {
				System.out.println(num);
			}
			count = 0;
		}
		
	}

}
