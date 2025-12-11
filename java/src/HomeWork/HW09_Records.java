package HomeWork;

import java.util.Objects;

public class HW09_Records implements Comparable<Player>{

	private int rank;
    private String name;
    private int count;

    public Player(int rank, String name, int count) {
        this.rank = rank;
        this.name = name;
        this.count = count;
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

    @Override
    public int compareTo(Player o) {
        return o.score - this.score;
    }

}


