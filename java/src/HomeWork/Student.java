package HomeWork;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Student implements Serializable {
	
	private static final long serialVersionUID = 123L;

	//다음 필드를 추가하세요.
	//학생의 학년, 반, 번호, 이름, 과목 성적들 
	private int grade, classNum, num;
	private String name;
	private List<SubjectScore> list ;
	
	//toString 오버라이딩
	//1학년 1반 3번 홍길동 
	@Override
	public String toString() {
		return grade + "학년 " + classNum + "반 " + num + "번 " + name;
	}
	
	//학생의 성적을 출력하는 메서드 
	public void printScore() {
		/*
		====================
		1학년 1반 1번 홍길동 성적
		====================
		1학년 1학기 국어 90점
		1학년 1학기 수학 30점
		 * */
		System.out.println("====================");
		//System.out.println(grade + "학년 " + classNum + "반 " + num + "번 " + name + " 성적");
		System.out.println(toString() + " 성적");
		System.out.println("====================");
		
		if(list.size() == 0) {
			System.out.println("등록된 성적이 없습니다.");
			System.out.println("====================");
			return;
		}
		
		//[1학년 1학기 국어 90점, 1학년 1학기 수학 30점, ...]
		//System.out.println(list);
		/*
		for(int i = 0; i < list.size(); i++) {
			SubjectScore tmp = list.get(i);
			System.out.println(tmp);
		}
		*/
		for(SubjectScore tmp : list) {
			System.out.println(tmp);
		}
		System.out.println("====================");
	}
	
	//학년, 반, 번호, 이름을 이용한 생성자를 작성하세요. 
	public Student(int grade, int classNum, int num, String name) {
		this.grade = grade;
		this.classNum = classNum;
		this.num = num;
		this.name = name;
		//과목 성적을 저장할 빈 리스트 생성
		list = new ArrayList<SubjectScore>();
	}

	@Override
	public int hashCode() {
		return Objects.hash(classNum, grade, num);
	}

	//학생의 학년,반,번호가 같으면 같다고 판별하는 equals를 오버라이딩하세요.
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Student other = (Student) obj;
		return classNum == other.classNum 
				&& grade == other.grade 
				&& num == other.num;
	}

	public boolean addSubjectScore(SubjectScore subjectScore) {
		// TODO Auto-generated method stub
		
		//내가 한거
//		if(list.isEmpty()) {
//			list.add(subjectScore);
//			System.out.println(subjectScore);
//			return true;
//		}
//		list.add(subjectScore);
//		System.out.println(subjectScore);
//		return false;
		// 위에거 처럼 작성하면 내가 등록하는 성적이 개별 성적에 등록하는게 아닌 모든 성적을 성적 1개로만 관리하는 문제가 발생
		
		//등록된 성적인지 확인하기 위해 성적 목록에서 몇번지에 있는지 확인
		int index = list.indexOf(subjectScore);
		if(index < 0) {
			list.add(subjectScore);
			return true;
		}
		SubjectScore selectedScore = list.get(index);
		selectedScore.setScore(subjectScore.getScore());
		return false;
	}


	public boolean removeSubjectScore(Subject subject) {
		// TODO Auto-generated method stub
		SubjectScore subjectScore = new SubjectScore(0,0,"",0);
		subjectScore.setSubject(subject);
		return list.remove(subjectScore);
	}
	
	
}










