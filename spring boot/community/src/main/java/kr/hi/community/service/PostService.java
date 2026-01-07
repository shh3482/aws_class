package kr.hi.community.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.hi.community.dao.PostDAO;
import kr.hi.community.model.dto.PostDTO;
import kr.hi.community.model.util.Criteria;
import kr.hi.community.model.util.CustomUser;
import kr.hi.community.model.vo.BoardVO;
import kr.hi.community.model.vo.PostVO;

@Service
public class PostService {

	@Autowired
	PostDAO postDAO;

	public ArrayList<PostVO> getPostList(Criteria cri) {
		//다오에게 게시글 목록을 가져오라고 요청
		ArrayList<PostVO> list = postDAO.selectPostList(cri);
		//게시글 목록을 반환
		return list;
	}

	public void updateView(int po_num) {
		postDAO.updateView(po_num);
	}

	public PostVO getPost(int po_num) {
		PostVO post = postDAO.selectPost(po_num);
		return post;
	}

	public ArrayList<BoardVO> getBoardList() {
		//다오에게 게시판 목록을 가져오라고 요청
		ArrayList<BoardVO> list = postDAO.selectBoardList();
		//게시판 목록을 반환
		return list;
	}
	
	private boolean checkEmpty(String str) {
		//null이거나
		if(str == null) {
			return true;
		}
		//공백으로 이루어져 있으면 true를 리턴
		if(str.trim().isEmpty()) {
			return true;
		}
		//공백이 아닌 한글자라도 있는 경우 false를 리턴
		return false;
	}
	

	public boolean insertPost(PostDTO post, CustomUser customUser) {
		//게시글 정보 확인 => 입력 안된 값 있는지 확인해서 잘못된게 있으면 false를 반환
		if( checkEmpty(post.getTitle()) || 
			checkEmpty(post.getContent()) || 
			post.getBoard() == 0) {
			return false;
		}
		//사용자 정보를 확인 => 로그인 됐는지 확인해서 안햇으면 false를 반환
		if(customUser == null || customUser.getUser() == null) {
			return false;
		}
		//게시글의 작성자를 로그인한 회원의 아이디로 수정
		post.setWriter(customUser.getUsername());
		
		try {
			//다오에게 게시글 정보를 주면서 등록하라고 시킴 
			postDAO.insertPost(post);
			return true;
		}catch (Exception e) {
			//잘못된 게시판 번호를 입력한 경우 게시글 등록에 실패
			e.printStackTrace();
			return false;
		}
	}

	public void insertBoard(String name) {
		//공백으로 되어 있는 경우
		if(checkEmpty(name)) {
			return;
		}
		//예외 처리 => 게시판명이 중복되면 예외 발생하기 때문에
		try {
			postDAO.insertBoard(name);
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void deleteBoard(int num) {
		try {
			postDAO.deleteBoard(num);
		}catch(Exception e) {
			//게시글이 있는 게시판을 삭제하려고 하면 예외가 발생
			// => 외래키 옵션에서 게시판 번호를 참조하는 게시글이 있는 경우
			//    해당 게시판을 삭제하지 못하도록(Restrict)로 설정되어 있기 때문에
			e.printStackTrace();
		}
	}

	public void updateBoard(int num, String name) {
		if(checkEmpty(name)) {
			return;
		}
		try {
			postDAO.updateBoard(num, name);
		}catch (Exception e) {
			//수정하려는 게시판 명이 중복되면 예외 발생
			e.printStackTrace();
		}
	}

	public int getTotalCount(Criteria cri) {
		// TODO Auto-generated method stub
		if (cri == null) {
			return 0;
		}
		return postDAO.selectTotalCount(cri);
	}

	public void deletePost(int po_num, CustomUser customUser) {
		// TODO Auto-generated method stub
		if(customUser == null || customUser.getUsername() == null) {
			return;
		}
		PostVO post = postDAO.selectPost(po_num);
		if(post == null || !post.getPo_me_id().equals(customUser.getUsername())) {
			return;
			
		}
		postDAO.hidePost(po_num);
	}

	public void updatePost(int po_num, CustomUser customUser) {
		// TODO Auto-generated method stub
		if(customUser == null || customUser.getUsername() == null) {
			return;
		}
		PostVO post = postDAO.selectPost(po_num);
		if(post == null || !post.getPo_me_id().equals(customUser.getUsername())) {
			return;
			
		}
		postDAO.updatePost(po_num);
	}
	
}
