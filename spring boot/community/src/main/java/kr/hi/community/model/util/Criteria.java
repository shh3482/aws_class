package kr.hi.community.model.util;

import lombok.Data;

@Data
public class Criteria {
	int boardNum;
	int type;
	String search = "";
	int page = 1;
	int perPageNum = 2;
	
	public int getPageStart() {
		return (page - 1) * perPageNum;
	}
}
