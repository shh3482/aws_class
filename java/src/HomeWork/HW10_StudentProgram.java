package HomeWork;

import java.util.Scanner;

import Utility.ColorPool;

public class HW10_StudentProgram {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 학생의 성적을 관리하는 프로그램을 구현하세요.
		 * 메뉴
		 * 1. 학생 등록
		 * 	- 학년, 반, 번호, 이름을 입력받아 등록
		 * 	- 학년, 반, 번호가 같은 학생은 등록 못함
		 * 2. 학생 삭제
		 * 	- 학년, 반, 번호를 입력받아 삭제
		 * 3. 학생 조회
		 * 	- 학년, 반, 번호를 입력받아 조회
		 * 4. 과목 등록
		 * 	- 학년, 학기, 과목명을 입력받아 등록
		 * 	- 같은 학년, 학기, 과목명은 가진 과목은 등록 못함
		 * 5. 과목 삭제
		 * 	- 학년, 학기, 과목명을 입력받아 삭제
		 * 6. 과목 조회
		 * 7. 학생 성적 추가
		 * 	- 학생의 학년, 반, 번호를 입력받아 있으면 과목 학년, 학기, 과목명, 성적을 입력받아 추가
		 * 8. 학생 성적 삭제
		 * 	- 학생의 학년, 반, 번호를 입력받아 있으면 과목 학년, 학기, 과목명을 입력받아 삭제
		 * 9. 프로그램 종료
		 */
		
		
		Scanner scan = new Scanner(System.in);
		
		int grade = 0;
		int classNum = 0;
		int num = 0;
		String name = "";
		char menu;
		
		printMenu();
		
//		do {
//			//메뉴 출력
//			printMenu();
//			
//			//메뉴 입력
//			menu = scan.next().charAt(0);
//			
//			switch(menu) {
//			case 1:
//				break;
//				
//			case 2:
//				break;
//				
//			case 3:
//				break;
//				
//			case 4:
//				break;
//				
//			case 5:
//				break;
//				
//			case 6:
//				break;
//				
//			case 7:
//				break;
//				
//			}
//			
//		}while(menu != EXIT);
//		
	}
	
	public static void printMenu() {
		System.out.println(ColorPool.RESET +"==========📚 학생 관리 메뉴==========\n");
		System.out.print(ColorPool.BRIGHT_RED + "1. 학생 등록");
		System.out.print("  ");
		System.out.print("2. 학생 삭제");
		System.out.print("  ");
		System.out.println("3. 학생 조회\n");
		
		System.out.print(ColorPool.BRIGHT_GREEN + "4. 과목 등록");
		System.out.print("  ");
		System.out.print("5. 과목 삭제");
		System.out.print("  ");
		System.out.println("6. 과목 조회\n");
		
		System.out.print(ColorPool.BRIGHT_BLUE + "7. 성적 추가");
		System.out.print("  ");
		System.out.print("8. 성적 삭제");
		System.out.print("  ");
		System.out.println("9. 화면 종료\n");
		System.out.println(ColorPool.RESET + "=================================\n");
		System.out.print("메뉴 선택 (1~9) ▶ ");
		
		//System.out.println("⚠ 잘못된 메뉴입니다. 다시 입력하세요.");
	}

}
