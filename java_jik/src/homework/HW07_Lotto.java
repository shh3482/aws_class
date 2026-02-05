package homework;

import java.util.ArrayList;
import java.util.Random;

public class HW07_Lotto {

	public static void main(String[] args) {
		/* 1~45사이의 랜덤한 수 6개를 생성하여 배열에 저장하고 출력하세요.
		 * 중복 X
		 * */
		
		//int [] lotto = new int[6];
		
		//테스트 할 때는 1~8로 테스트하여 중복되지 않는지 확인 후 이상 없으면 1~45로 변경
		
		//랜덤 번호 생성

		
		
		
		
		
		
		
		
		
		
		//배열 대신 리스트로
		int min = 1, max = 45;
		final int SIZE = 6;
		//랜덤으로 로또 6개 생성
		ArrayList<Integer> lotto = createRandomList(min, max, SIZE);
		
		//보너스 번호 생성
		int bonus;
		//생성된 보너스 번호가 로또 번호에 포함되어 있으면 반복, 아니면 종료
		while(lotto.contains(bonus = random(min, max)));
		//로또 번호 확인
		System.out.println("로또 번호 : " + lotto);
		System.out.println("보너스 번호 : " + bonus);
	}
	//min~max 사이의 랜덤한 수 생성
	public static int random(int min, int max) {
		//최소가 최대보다 크면 바꿈
		if(min > max) {
			int tmp = min;
			min = max;
			max = tmp;
		}
		Random random = new Random();
		return random.nextInt(min, max+1);
	}
	
	//min~max사이의 랜덤한 정수를 size개 만들어 리스트로 반환하는 메서드(day06.Ex06_list예제)
	public static ArrayList<Integer> createRandomList(int min, int max, int size){
		//최소가 최대보다 크면 바꿈
		if(min > max) {
			int tmp = min;
			min = max;
			max = tmp;
		}
		//랜덤으로 생성할 수 있는 개수보다 원하는 크기가 더 큰 경우 => 무한루프
		if(max - min + 1 < size) {
			return null;
		}
		ArrayList<Integer> list = new ArrayList<Integer>();
		
		while(list.size() < size) {
			int num = random(min, max);
			//추가하기 전에 종복 검사
			//리스트에 num가 없으면
			if(num > max || num < min) {
				continue;
			}
			if(!list.contains(num)) {
				list.add(num);//추가			
			}
		}
		return list;
	}

}
