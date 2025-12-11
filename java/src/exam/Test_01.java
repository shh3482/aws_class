package exam;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Test_01 {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		Students std = new StudentsImp();
		int grade = 0;
		int classNum = 0;
		int num = 0;
		boolean Stop = false;
		
		// 학생 3명 추가
		std.add(new Student(2, 1, 5, "김수현", 95));
		std.add(new Student(2, 1, 12, "최민수", 88));
		std.add(new Student(1, 3, 2, "이영희", 77));
		
		// 전체 출력
		std.printAll();
		System.out.println();
		
		do {
			try{
				// 특정 학생 정보 입력 후 검색 출력
				System.out.println("검색할 학생 정보 입력");
				grade = scan.nextInt();
				classNum = scan.nextInt();
				num = scan.nextInt();
				System.out.println("학년 입력: " + grade);
				System.out.println("반 입력: " + classNum);
				System.out.println("번호 입력: " + num);
				System.out.println(std.find(grade, classNum, num));
				System.out.println();
				
				// 특정 학생 정보 입력 후 삭제
				System.out.println("삭제할 학생 정보 입력");
				grade = scan.nextInt();
				classNum = scan.nextInt();
				num = scan.nextInt();
				System.out.println("학년 입력: " + grade);
				System.out.println("반 입력: " + classNum);
				System.out.println("번호 입력: " + num);
				std.remove(grade, classNum, num);
				System.out.println("삭제완료");
				System.out.println();
				
				// 점수 기준 정렬 후 다시 전체 출력
				System.out.println("=== 정렬 ===");
				std.sortByScore();
				std.printAll();
				System.out.println();
				
			}catch(Exception e){
				System.err.println("예외 발생");
				System.out.println();
				scan.nextLine();
			}
		}while(!Stop);
		
	}
}

interface Students{
	boolean add(Student student);
	Student remove(int grade, int classNum, int num);
	Student find(int grade, int classNum, int num);
	void printAll();
	void sortByScore();
}

class StudentsImp implements Students {

    private ArrayList<Student> list = new ArrayList<>();

    @Override
    public boolean add(Student student) {
        if(student == null) return false;

        int index = list.indexOf(student);

        if(index == -1) {
            return list.add(student);
        } else {
            list.set(index, student);
            return true;
        }
    }

    @Override
    public Student remove(int grade, int classNum, int num) {
        Student temp = new Student(grade, classNum, num, null, 0);
        int index = list.indexOf(temp);

        if(index == -1) return null;

        return list.remove(index);
    }

    @Override
    public Student find(int grade, int classNum, int num) {
        Student temp = new Student(grade, classNum, num, null, 0);

        int index = list.indexOf(temp);
        if(index == -1) return null;

        return list.get(index);
    }

    @Override
    public void printAll() {
        for (Student std : list) {
            System.out.println(std);
        }
    }

    @Override
    public void sortByScore() {
    	Collections.sort(list, Collections.reverseOrder());
    }
}

