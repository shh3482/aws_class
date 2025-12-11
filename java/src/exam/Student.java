package exam;

import java.util.Objects;

public class Student implements Comparable<Student> {

    private String name;
    private int grade;
    private int classNum;
    private int num;
    private int score;

    @Override
    public int compareTo(Student o) {
        return o.grade - this.grade;
    }
    
    public Student(int grade, int classNum, int num , String name, int score) {
        this.grade = grade;
        this.classNum = classNum;
        this.num = num;
        this.name = name;
        this.score = score;
    }

    @Override
    public String toString() {
        return grade + "학년 " + classNum + "반 " + num + "번 " + name + " - 점수: " + score;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Student other = (Student) obj;
        return grade == other.grade &&
               classNum == other.classNum &&
               num == other.num;
    }

    @Override
    public int hashCode() {
        return Objects.hash(grade, classNum, num);
    }

    

}
