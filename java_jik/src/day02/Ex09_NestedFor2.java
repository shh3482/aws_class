package day02;

public class Ex09_NestedFor2 {

	public static void main(String[] args) {
		
		/* 다음과 같이 출력되도록 코드를 작성하세요.
		 * 1 2 3 4 
		 * 5 6 7 8
		 * 9 10 11 12
		 * 13 14 15 16
		 * */
		int div = 5;
		for(int i = 1; i <= div*div; i++) {
			System.out.print(i + " ");
			//i가 4의 배수이면 엔터
			//i를 4로 나누었을 때 나머지가 0과 같으면 엔터
			if(i % div == 0) {
				System.out.println();
			}
		}
		System.out.println("================");
		
		int num;
		//첫번째 줄
		num = 1;
		for(int i = num; i < num + div; i++ ) {
			System.out.print(i + " ");
		}
		System.out.println();
		//두번째 줄
		num = 5;
		for(int i = num; i < num + div; i++ ) {
			System.out.print(i + " ");
		}
		System.out.println();
		//세번째 줄
		num = 9;
		for(int i = num; i < num + div; i++ ) {
			System.out.print(i + " ");
		}
		System.out.println();
		
		//네번째 줄
		num = 13;
		for(int i = num; i < num + div; i++ ) {
			System.out.print(i + " ");
		}
		System.out.println("");
		System.out.println("=============");
		
		int line = 1;
		num = 1;	//line : 1, num : 1
		num = 5;	//line : 2, num : 5
		num = 9;	//line : 3, num : 9
		num = 13;	//line : 4, num : 13
					//line : n, num : 4*n-3
		for(line=1 ; line <=div; line++) {
			num = div * line - (div-1);
			for(int i = num; i < num + div; i++ ) {
				System.out.print(i + " ");
			}
			System.out.println();
		}
	}

}
