package homework.hw09;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.function.Predicate;

import homework.ProgramManager;

public class GameRecordManager implements ProgramManager {

	List<GameRecord> list = new ArrayList<GameRecord>();
	final int MAX_RECORD = 5;
	int lastScore = 0;
	
	@Override
	public boolean add(Object obj) {
		//obj가 게임 기록이 아니면 false 반환 후 종료
		if(!(obj instanceof GameRecord)) {
			return false;
		}
		GameRecord gr = (GameRecord) obj;
		//저장된 마지막 기록의 위치
		int lastIndex = list.size() - 1;
		
		//MAX_RECORD만큼 저장되지 않으면 바로 저장
		if(lastIndex < MAX_RECORD - 1) {
			lastScore = gr.getScore();
			list.add(gr);
			sort();
			return true;
		}
		//마지막 기록 가져옴
		GameRecord lastRecord = list.get(lastIndex);
		//마지막 기록보다 새 기록이 좋으면 마지막 기록 삭제 후 새 기록 추가
		if(lastRecord.getScore() < gr.getScore()) {
			remove(lastRecord);
			list.add(gr);
			sort();//정렬
			lastScore = gr.getScore();
			return true;
		}
		//아니면 기록 추가하지 않고 false 반환 후 종료
		return false;
	}

	//GameManager에서 수정이 필요하지 않은데, add할 때 remove를 사용해서 구현 함.
	@Override
	public boolean remove(Object obj) {
		//obj가 게임 기록이 아니면 false 반환 후 종료
		if(!(obj instanceof GameRecord)) {
			return false;
		}
		GameRecord gr = (GameRecord) obj;
		return list.remove(gr);
	}

	//GameManager에서는 수정이 필요하지 않음
	@Override
	public boolean update(Object obj) {
	
		return false;
	}

	//GameManager에서는 수정이 필요하지 않음
	@Override
	public Object find(Object object) {
		return null;
	}

	@Override
	public void print(Predicate<Object> p) {
		for(GameRecord gr : list) {
			if(p.test(gr)) {
				System.out.println(gr);
			}
		}
	}

	@Override
	public void sort() {
		Collections.sort(list);
	}
	
	public boolean isSave(int score) {
		if(list.size() < MAX_RECORD) {
			return true;
		}
		return lastScore < score;
	}

}
