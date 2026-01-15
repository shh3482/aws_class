package kr.hi.boot.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import kr.hi.boot.dao.CommentDAO;
import kr.hi.boot.model.vo.Comment;

@Service
public class CommentService {
	
	private final CommentDAO commentDAO;
	
	public CommentService (CommentDAO commentDAO){
		this.commentDAO = commentDAO;
		
	}

	//다오한테 번호주고 댓글 목록 요청
	//댓글 목록 반환
	public List<Comment> getComments(int poNum) {
		// TODO Auto-generated method stub
		List<Comment> list = commentDAO.selectComments(poNum);
		return list;
	}

}