package kr.hi.community.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.hi.community.dao.PostDAO;
import kr.hi.community.model.vo.BoardVO;
import kr.hi.community.model.vo.PostVO;

@Service
public class PostService {

	@Autowired
	PostDAO postDAO;

	public ArrayList<PostVO> getPostList() {
		// TODO Auto-generated method stub
		ArrayList<PostVO> list = postDAO.selectPostList();
		return list;
	}

	public void updateView(int po_num) {
		// TODO Auto-generated method stub
		postDAO.updateView(po_num);
	}

	public PostVO getPost(int po_num) {
		// TODO Auto-generated method stub
		PostVO post = postDAO.selectPost(po_num);
		return post;
	}

	public void postInsert() {
		// TODO Auto-generated method stub
		return;
	}

	public ArrayList<BoardVO> getBoardList() {
		// TODO Auto-generated method stub
		ArrayList<BoardVO> list = postDAO.selectBoardList();
		return list;
	}
	
}
