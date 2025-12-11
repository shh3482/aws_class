package day03;

public class EX14_Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 학생 3명의 국어, 영어, 수학 성적을 관리하는 프로그램을 만들려고 한다.
		// 이 때 필요한 변수나 배열을 선언하세요.
		// 단, 관리할 정보는 학년, 반, 번호, 이름, 국어, 영어, 수학 점수
		/*
		리턴타입, 메서드명(매개변수들){
			
		}
		
		*/
	
	final int STUDENT_COUNT = 3;
	int grade[] = new int [STUDENT_COUNT];
	int classNum[] = new int [STUDENT_COUNT];
	int phoneNum[] = new int [STUDENT_COUNT];
	String name[] = new String [STUDENT_COUNT];
	int koreanScore[] = new int [STUDENT_COUNT];
	int englishScore[] = new int [STUDENT_COUNT];
	int mathScore[] = new int [STUDENT_COUNT];
	Student students[] = new Student[STUDENT_COUNT];
	
	//students[0] = new Student(1,1,1,"홍길동");
//	students[1] = new Student(1,1,1,"임꺽정");
//	students[2] = new Student(1,1,1,"홍길동");
//	students[0].print();
}
class Student{
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
	Student(){}
	
	//생성자 오버로딩
	Student(int grade1, int classNum1, int phoneNum1, String name1){
		grade = grade1;
		classNum = classNum1;
		phoneNum = phoneNum1;
		name = name1;
				
		}

	}
}