package kr.hi.community.model.vo;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
public class CommentVO {
	
	int co_num;
	String co_content;
	String co_date;
	int co_ori_num;
	String co_del;
	String co_me_id;
	int co_po_num;
}