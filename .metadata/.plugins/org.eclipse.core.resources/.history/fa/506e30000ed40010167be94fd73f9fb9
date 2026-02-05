package day06;

import java.util.Objects;

public class Student {
		
	private int grade, classNum, num;
	private String name;
	
	public Student(int grade, int classNum, int num, String name) {
		super();
		this.grade = grade;
		this.classNum = classNum;
		this.num = num;
		this.name = name;
	}

	@Override
	public String toString() {
		return grade + "학년 " + classNum + "반 " + num + "번 " + name;
	}

	@Override
	public int hashCode() {
		return Objects.hash(classNum, grade, num);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Student other = (Student) obj;
		return classNum == other.classNum && grade == other.grade && num == other.num;
	}
	
}
