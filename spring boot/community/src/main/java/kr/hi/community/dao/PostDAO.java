package kr.hi.community.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import kr.hi.community.model.dto.PostDTO;
import kr.hi.community.model.util.Criteria;
import kr.hi.community.model.util.CustomUser;
import kr.hi.community.model.vo.BoardVO;
import kr.hi.community.model.vo.PostVO;

public interface PostDAO {

	ArrayList<PostVO> selectPostList(@Param ("cri")Criteria cri);

	//@Param("매퍼.xml에서 사용할 이름")
	void updateView(@Param("num")int po_num);

	PostVO selectPost(@Param("num")int po_num);

	ArrayList<BoardVO> selectBoardList();

	void insertPost(@Param("post")PostDTO post);

	void insertBoard(@Param("name")String name);

	void deleteBoard(@Param("num")int num);

	void updateBoard(@Param("num")int num, @Param("name")String name);

	int selectTotalCount(@Param("cri")Criteria cri);

	void deletePost(@Param("num")int po_num);
	
	void hidePost(@Param("num")int po_num);

	void updatePost(@Param("num")int po_num);

}