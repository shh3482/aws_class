package homework.hw09;

import java.util.InputMismatchException;
import java.util.Scanner;

import homework.HW08_BaseballGame;

public class HW09_BaseballGame2 {

	private static GameRecordManager gm = new GameRecordManager();
	private static Scanner scan = new Scanner(System.in);
	
	public static void main(String[] args) {
		/* 기본 게임 방식은 HW08과 동일한데 기록 관리를 추가
		 * 관리할 기록은 횟수와 입력한 이니셜
		 *  메뉴
		 *  1. 플레이
		 *  2. 기록 확인
		 *  3. 종료
		 *  메뉴 선택 : 1
		 *  //HW08에 했던 야구 게임이 진행
		 *  //정답을 맞추면 맞춘 횟수를 출력
		 *  정답입니다.
		 *  시도횟수는 4회
		 *  5등안에 들었습니다. 
		 *  이니셜을 남겨주세요 : JIK
		 *  
		 *  메뉴
		 *  1. 플레이
		 *  2. 기록 확인
		 *  3. 종료
		 *  메뉴 선택 : 2
		 *  1. JIK - 4회
		 *  메뉴
		 *  1. 플레이
		 *  2. 기록 확인
		 *  3. 종료
		 *  메뉴 선택 : 3
		 * */
		int menu = 0;
		final int EXIT = 3;
		
		do {
			printMenu();
			try {
				menu = scan.nextInt();
				System.out.println("=========");
				run(menu);
			}catch(InputMismatchException e) {
				scan.nextLine();
				System.err.println("정수를 입력하세요.");
			}
		}while(menu != EXIT);
		
	}

	private static void printMenu() {
		System.out.println("===메뉴===");
		System.out.println("1. 게임하기");
		System.out.println("2. 기록 확인");
		System.out.println("3. 종료");
		System.out.println("=========");
		System.out.print("메뉴 선택 : ");
		
	}

	private static void run(int menu) {
		
		switch(menu) {
		case 1:
			play();
			break;
		case 2:
			printRecord();
			break;
		case 3:
			System.out.println("프로그램을 정료합니다.");
			break;
		}
		
	}

	private static void play() {
		int record = HW08_BaseballGame.play();
		if(!gm.isSave(record)) {
			System.out.println("[게임 종료]");
		}
		System.out.println("새 기록을 달성했습니다.");
		System.out.print("이름을 입력하세요(예 : ABC) : ");
		String name = scan.next();
		GameRecord gr = new GameRecord(name, record);
		gm.add(gr);
	}

	private static void printRecord() {
		gm.print(gr->true);
		
	}
}


