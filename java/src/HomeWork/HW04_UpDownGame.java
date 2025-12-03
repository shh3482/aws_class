package HomeWork;

import java.util.Random;

public class HW04_UpDownGame {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 1~100 사이의 랜덤한 수를 생성해서 맞추는 게임
		 * 랜덤한 수 : 33 //안보여야 함
		 * 정수입력 : 50
		 * DOWN
		 * 정수입력 : 25
		 * UP
		 * 정수입력 : 30
		 * UP
		 * 정수입력 : 33
		 * 정답입니다.
		 * 
		 */
		
		Random random = new Random();
		// min 이상 max+1 미만의 정수를 랜덤으로 뽑아줌
		int r2 = random.nextInt(min, max+1);
		System.out.println(r2);
	}

}
