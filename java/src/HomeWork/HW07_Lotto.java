package HomeWork;

import java.util.Random;

public class HW07_Lotto {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 1~45사이의 랜덤하 수 6개를 생성하여 배열에 저장하고 출력하세요.
		 * 중복 X
		 */
		
		//랜덤수 뽑기, 이프문으로 중복못하게 해서 컨티뉴 써서 스킵하기

		int [] lotto = new int[6];
		int min = 1, max = 45;
		
		Random random = new Random();
		int pickNum = random.nextInt(min, max+1);
		
		int i = 0;
		
		for(i = 0; i <= 5; ) {
			pickNum = random.nextInt(min, max+1);
			
			if(pickNum != lotto[0] && pickNum != lotto[1] &&
			   pickNum != lotto[2] && pickNum != lotto[3] &&
			   pickNum != lotto[4] && pickNum != lotto[5] ) {
				lotto[i] = pickNum;
				System.out.println("추첨된 번호는 " + lotto[i] + " 입니다.");
				i++;
			}
		}
		System.out.println("당신의 당첨 번호는 : ");
		System.out.println(lotto[0] + " " + lotto[1] + " " + lotto[2] + " " + lotto[3] + " " + lotto[4] + " " + lotto[5] );
		System.out.println();
	}
}
