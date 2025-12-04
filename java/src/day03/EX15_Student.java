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
		final char EXIT = '5';
		
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
				updateStudents(stds, count, scan);
				break;
				
			case '3':
				System.out.println("학생 추가 기능 구현 예정");
				break;
				
			case '4':
				printStudents(stds, count);
				break;
				
			case EXIT:
				System.out.println("프로그램을 종료합니다.");
				break;
				
			default:
				System.out.println("잘못된 메뉴입니다.");
			}
		}while(menu != EXIT);
	}
	
	public static void printMenu() {
		System.out.println("======메뉴======");
		System.out.println("1. 학생 추가");
		System.out.println("2. 학생 성적 수정");
		System.out.println("3. 학생 삭제");
		System.out.println("4. 학생 정보 확인");
		System.out.println("5. 종료");
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
	
	public static void printStudents(MyStudent [] stds, int count) {
		// 추가된 학생 정보를 출력하는 메서드
		for(int i = 0; i < count; i++) {
			stds[i].print();
		}
		if (count == 0) {
			System.out.println("등록된 학생이 없습니다.");
		}
	}
	// 학생 정보들에서 학년, 반, 번호를 이용하여 학생의 위치를 찾는 메서드
	public static int indexOf(MyStudent[]stds, int count, int grade, int classNum, int num) {
		int index = -1;
		for(int i = 0; i <= count; i++) {
			MyStudent std = stds[i];
			if(std.grade == grade
			&& std.classNum == classNum
			&& std.num == num) {
				// 없으면 -1로 저장
		    index = -1;
		    break;
			}
		}
		return index;
	}
	
	// 학생 정보를 입력받아 학생의 성적을 수정하는 메서드
	public static void updateStudents(MyStudent[] stds, int count, Scanner scan) {
		// 성적을 수정할 학생 정보를 입력(학년, 반, 번호)
		System.out.print("수정할 학생의 학년, 반, 번호를 입력하세요 : ");
		int grade = scan.nextInt();
		int classNum = scan.nextInt();
		int num = scan.nextInt();
		
		int index = indexOf(stds, count, grade, classNum, num);
		
		// 학생 정보들에서 학년반번호로 검색해서 있으면 위치를 저장
		
		// 학생이 없으면 없다고 알리고 종료
		if(index == -1) {
			System.out.println("등록된 학생이 아닙니다.");
			return;
		}
		// 수정할 성적을 입력(국어, 영어, 수학)
		System.out.print("성적 입력(국어, 영어, 수학 순) : ");
		int korScore = scan.nextInt();
		int engScore = scan.nextInt();
		int mathScore = scan.nextInt();
		
		// 입력받은 성적을 수정한 학생 정보에 변경
		stds[index].update(korScore, engScore, mathScore);
		System.out.println("학생 추가 기능 구현 예정");
	}
	
}

class MyStudent{
	int grade, classNum, num, korScore, engScore, mathScore;
	String name;
	
	void print() {
		System.out.println("=================");
		System.out.println("학년 : " + grade);
		System.out.println("반 : " + classNum);
		System.out.println("번호 : " + num);
		System.out.println("이름 : " + name);
		System.out.println("국어 : " + korScore);
		System.out.println("영어 : " + engScore);
		System.out.println("수학 : " + mathScore);
		System.out.println("=================");
	}
	
	public void update(int korScore2, int engScore2, int mathScore2) {
		// TODO Auto-generated method stub
		korScore = korScore2;
		engScore = engScore2;
		mathScore = mathScore2;
		
	}

	//기본 생성자
	MyStudent(){}
	
	//생성자 오버로딩
	MyStudent(int grade1, int classNum1, int num1, String name1){
		grade = grade1;
		classNum = classNum1;
		num = num1;
		name = name1;
				
	}
}