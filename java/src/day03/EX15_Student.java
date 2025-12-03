package day03;

import java.util.Scanner;

public class EX15_Student {

	final static int MAX_COUNT = 3;
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 프로그램 기능
		 * 1. 학생 추가
		 * 2. 학생 성적 수정
		 * 3. 학생 삭제
		 * 4. 종료
		 * 
		 */
		
		Scanner scan = new Scanner(System.in);
		char menu;
		MyStudent stds[] = new MyStudent[MAX_COUNT];
		int count = 0; // 현재 저장된 학생 수 => 학생을 배열에 추가할 때 사용
		int grade, classNum, num;
		String name;
		
		do {
			//메뉴 출력
			printMenu();
			
			//메뉴 입력
			menu = scan.next().charAt(0);
			
			switch(menu) {
			case '1':
				count = addStudent(stds, count, scan);
				break;
				
			case '2':
				System.out.println("학생 추가 기능 구현 예정");
				break;
				
			case '3':
				System.out.println("학생 추가 기능 구현 예정");
				break;
				
			case '4':
				System.out.println("프로그램을 종료합니다.");
				break;
				
			default:
				System.out.println("잘못된 메뉴입니다.");
			}
		}while(menu != '4');
	}
	
	public static void printMenu() {
		System.out.println("======메뉴======");
		System.out.println("1. 학생 추가");
		System.out.println("2. 학생 성적 수정");
		System.out.println("3. 학생 삭제");
		System.out.println("4. 종료");
		System.out.print("메뉴 입력 : ");
	}
	
	public static int addStudent(MyStudent []stds, int count, Scanner scan) {
		if(count == MAX_COUNT) {
			System.out.println("더이상 학생을 추가할 수 없습니다.");
			return count;
		}
		// 학생의 학년, 반, 번호, 이름을 입력
		System.out.println("학년 반 번호 이름순으로 입력하세요.");
		int grade = scan.nextInt();
		int classNum = scan.nextInt();
		int num = scan.nextInt();
		String name = scan.next();
		// 객체를 생성해서 배열에 저장
		MyStudent std = new MyStudent(grade, classNum, num, name);
		stds[count] = std;
		count++;
		return count;
	}
	
}

class MyStudent{
	int grade, classNum, phoneNum, koreanScore, englishScore, mathScore;
	String name;
	
	void print() {
		System.out.println("=================");
		System.out.println("학년 : " + grade);
		System.out.println("반 : " + classNum);
		System.out.println("번호 : " + phoneNum);
		System.out.println("이름 : " + name);
		System.out.println("국어 : " + koreanScore);
		System.out.println("영어 : " + englishScore);
		System.out.println("수학 : " + mathScore);
		System.out.println("=================");
	}
	
	//기본 생성자
	MyStudent(){}
	
	//생성자 오버로딩
	MyStudent(int grade1, int classNum1, int phoneNum1, String name1){
		grade = grade1;
		classNum = classNum1;
		phoneNum = phoneNum1;
		name = name1;
				
	}
}