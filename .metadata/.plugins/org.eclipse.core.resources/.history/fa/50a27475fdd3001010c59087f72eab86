package day06;

import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class EX06_List {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* List 를 이용하여 1~5사이의 정수를 입력받아 중복이 안되면 저장하고 중복이 되면 저장하지 않는 예제를 작성하세요.
		 * 
		 */
		creatRandomList(1, 10, 6);
		ArrayList<Integer> numList = new ArrayList<>();
		Scanner scan = new Scanner(System.in);
		int inputNum = 0;
		
		// list.size() 로 제한하는것도 가능
		for(int i = 0; i < 3;) {
			
			System.out.print("\u001B[33m1~5 사이의 정수를 입력하세요: ");
			inputNum = scan.nextInt();
			
			if(inputNum >= 1 && inputNum <= 5) {
				System.out.println("\u001B[33m숫자를 입력 받았습니다: " + inputNum + "\n");
				
				if(numList.contains(inputNum)) {
					System.out.println("\u001B[38;5;210m중복된 숫자입니다. \n");
				}
				else {
					System.out.println("\u001B[38;5;120m정상적으로 숫자 " + inputNum + " 을/를 저장하였습니다.\n");
					numList.add(inputNum);
					i++;
				}
			}
			else {
				System.out.println("\u001B[38;5;210m잘못된 값을 입력하였습니다.\n");
			}
		}
		System.out.println("\u001B[38;5;117m저장을 완료하여 종료합니다.\n");
	}
	
	/* 기능 : min~max사이의 중복되지 않은 size개의 랜덤한 정수를 리스트에 담아 반환하는 메서드 
	 * 매개변수 : min~max, size => int min, int max, int size
	 * 리턴타입 : 랜덤한 정수가 담긴 리스트
	 * 메서드명 : creatRandomList
	 */
	public static ArrayList<Integer> creatRandomList(int min, int max, int size) {

		ArrayList<Integer> numList = new ArrayList<>();
		Random random = new Random();
		
		if(min > max) {
			int tmp = min;
			min = max;
			max = tmp;
		}
		// 랜덤으로 생성할 수 있는 개수보다 원하는 크기가 더 큰 경우 => 무한루프
		if (max - min + 1 < size) {
			return null;
		}
		while(numList.size() < size) {
			int pickNum = random.nextInt(min, max+1);
			if(!numList.contains(pickNum)) {
				numList.add(pickNum);
			}
		}
		System.out.println("\u001B[38;5;117m랜덤한 정수 리스트.");
		System.out.println(numList + "\n");
		return numList;
		
	}
}
