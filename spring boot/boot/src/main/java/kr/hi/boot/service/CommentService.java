package kr.hi.boot.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import kr.hi.boot.dao.CommentDAO;
import kr.hi.boot.model.util.Criteria;
import kr.hi.boot.model.util.CustomUser;
import kr.hi.boot.model.util.PageMaker;
import kr.hi.boot.model.vo.Comment;

@Service
public class CommentService {
	
	private final CommentDAO commentDAO;
	
	public CommentService (CommentDAO commentDAO){
		this.commentDAO = commentDAO;
		
	}

	//다오한테 번호주고 댓글 목록 요청
	//댓글 목록 반환
	public List<Comment> getComments(int poNum, Criteria cri) {
		// TODO Auto-generated method stub
		List<Comment> list = commentDAO.selectComments(poNum,cri);
		return list;
	}

	public PageMaker getPageMaker(int poNum, Criteria cri) {
		// TODO Auto-generated method stub
		// 한페이지네이션에서 최대 페이지수를 3개로 선언
		int pageCount = 3;
		// 다오에게 게시글번호를 주면서 전체 댓글 수를 가져오라고 요청
		int count = commentDAO.selectCommentsCount(poNum);
		// 최대 페이지수, 전체게시글수, 현재페이지 정보를 이용하여 PageMaker 객체를 생성
		PageMaker pm = new PageMaker(pageCount, cri, count);
		// 생성된 객체를 반환
		return pm;
	}

	public String insertComment(Comment comment, CustomUser user) {
		// TODO Auto-generated method stub
		if(user == null) {
			return "로그인이 필요한 서비스입니다.";
		}
		if(comment.getContent() == null ||
			comment.getContent().isBlank()) {
			return "댓글을 입력하세요.";
		}
		comment.setId(user.getUsername());
		boolean result = commentDAO.insertComment(comment);
		if(result) {
			return "댓글을 등록했습니다.";
		}
		return "댓글을 등록하지 못했습니다.";
	}

	public String deleteComment(int coNum, CustomUser user) {
		// TODO Auto-generated method stub
		if(user == null) {
			return "로그인이 필요한 서비스입니다.";
		}
		String id = user.getUsername();
		if(!isWriter(coNum, id)) {
			return "작성자가 아닙니다.";
		}
		
		boolean res = commentDAO.deleteComment(coNum);
		if(res) {
			return "댓글을 삭제했습니다.";
		}
		return "댓글을 삭제하지 못했습니다.";
		
	}
	private boolean isWriter(int coNum, String id) {
		Comment comment = commentDAO.selectComment(coNum);
		System.out.println(comment);
		if(comment == null) {
			return false;
		}
		String writer = comment.getId();
		return writer.equals(id);
	}

}