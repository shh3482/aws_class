package HomeWork;

public class HW06_Alphabet {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 다음 결과가 출력 되도록 코드를 작성하세요.
		 * 참고 예제 : day02_EX02
		 * a
		 * ab
		 * abc
		 * abcd.....
		 * abcdefghijklmnopqrstuvwxyz
		 */
		

		int textLimit = 1;
		int i = 0;
		
		for(i = 0; i < textLimit; i++) {
			for(int a = 0; a < 26; a++) {
				for(i = 0; i < textLimit; i++) {
					System.out.print((char)(97+i));
				}
				textLimit++;
				System.out.println();
			}
		}
		
	}

}
