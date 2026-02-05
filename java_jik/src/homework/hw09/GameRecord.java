package homework.hw09;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GameRecord implements Comparable<GameRecord>{
	
	String name;
	int score;
	
	@Override
	public int compareTo(GameRecord o) {
		return score - o.score;
	}

	@Override
	public String toString() {
		return name + " - " + score;
	}
}

