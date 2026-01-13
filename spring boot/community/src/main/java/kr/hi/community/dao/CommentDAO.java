package kr.hi.community.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import kr.hi.community.model.dto.CommentDTO;
import kr.hi.community.model.util.CommentCriteria;
import kr.hi.community.model.util.Criteria;
import kr.hi.community.model.vo.CommentVO;

public interface CommentDAO {

	void insertComment(@Param("coDto")CommentDTO dto);

	ArrayList<CommentVO> selectCommentList(@Param("cri")Criteria cri);

	int selectCommentCount(@Param("cri")Criteria cri);

	boolean deleteComment(@Param("coNum")int coNum);

	CommentVO selectComment(@Param("coNum")int coNum);

	boolean updateComment(@Param("dto")CommentDTO dto);

}
