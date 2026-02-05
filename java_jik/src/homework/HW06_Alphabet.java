package homework;

public class HW06_Alphabet {

	public static void main(String[] args) {
		/* 다음 결과가 출력 되도록 코드를 작성하세요. 
		 * 참고 예제 : day02.Ex02_ForTest에서 a부터 z까지 한줄로 출력 예제
		 * a
		 * ab
		 * abc
		 * abcd
		 * abcde
		 * ...
		 * abcdefghijk...xyz
		 * */
		
		/* 별 예제에서 왼쪽 삼각형 참고
		 * i=1~5를 i=0~25까지 반복
		 * *를 i번 찍는 대신 a부터 a+i까지 알파벳 출력
		 * */
		for(int i = 0; i < 26; i++) {
			for(int j = 0; j <= i; j++) {
				System.out.print((char)('a'+j));
			}
			System.out.println();
		}
	}

}
