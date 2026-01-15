package kr.hi.boot.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import kr.hi.boot.model.vo.Comment;

public interface CommentDAO {

	List<Comment> selectComments(@Param("poNum")int poNum);
	//삭제되지 않은 댓글만 가져옴, 시오오리넘 기준 내림차순 시오넘 기준 오름차순
}