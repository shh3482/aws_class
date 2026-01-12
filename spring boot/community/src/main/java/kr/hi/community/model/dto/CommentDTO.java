package kr.hi.community.model.dto;

import lombok.Data;

@Data
public class CommentDTO {
	String content;
	int postNum;
	int coOriNum;
	String id;
}
