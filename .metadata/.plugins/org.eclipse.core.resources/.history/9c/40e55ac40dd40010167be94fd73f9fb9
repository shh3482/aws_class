package day06;

import java.util.ArrayList;
import java.util.function.Predicate;

public class EX08_FunctionalInterFace {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 라이브러리가 제공하는 함수형 인터페이스
		 * - 모두 제네릭 인터페이스
		 * Consumer : 매개변수 O, 리턴 X, 주로 출력문 담당
		 * Supplier : 매개변수 X, 리턴 O
		 * Function : 매개변수 O, 리턴 O, 매개변수타입 != 리턴타입
		 * Operator : 매개변수 O, 리턴 O, 매개변수타입 == 리턴타입
		 * Predicate : 매개변수 O, 리턴 boolean
		 */
		ArrayList<Student> list = new ArrayList<Student>();
		list.add(new Student(1, 1, 1, "홍길동"));
		list.add(new Student(1, 1, 2, "가길동"));
		list.add(new Student(1, 2, 1, "고길동"));
		list.add(new Student(2, 1, 1, "임꺽정"));
		list.add(new Student(3, 1, 1, "홍가네"));
		
		Predicate<Student> p = (student){
			return true;
		}
		printStudent(list, s->true);
		
		printStudent(List, s->s.getGrade() == 1 && s.getClassNum() == 1){
			
		}
	}
	
	
	public static void printStudent(ArrayList<Student>list, Predicate<Student> p) {
		for(Student tmp : list) {
			if(p.test(tmp)) {
				System.out.println(tmp);
			}
		}
	}
}
