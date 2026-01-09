package kr.hi.community.model.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LikeDTO {
	int postNum;
	int state;
	String id;;
	
	public LikeDTO(int postNum, String username) {
		this.postNum = postNum;
		this.id = username;
	}
}