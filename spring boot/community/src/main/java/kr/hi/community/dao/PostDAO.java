package kr.hi.community.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import kr.hi.community.model.dto.PostDTO;
import kr.hi.community.model.vo.BoardVO;
import kr.hi.community.model.vo.PostVO;

public interface PostDAO {

	PostVO selectPost(@Param("post")PostDTO post);

	ArrayList<PostVO> selectPostList();

	void updateView(@Param("num") int po_num);

	PostVO selectPost(@Param("num") int po_num);

	ArrayList<BoardVO> selectBoardList();
}
