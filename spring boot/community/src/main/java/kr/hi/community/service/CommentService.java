package kr.hi.community.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.hi.community.dao.CommentDAO;
import kr.hi.community.model.dto.CommentDTO;
import kr.hi.community.model.util.CommentCriteria;
import kr.hi.community.model.util.Criteria;
import kr.hi.community.model.util.CustomUser;
import kr.hi.community.model.util.PageMaker;
import kr.hi.community.model.vo.CommentVO;

@Service
public class CommentService {
	@Autowired
	CommentDAO commentDAO;

	public String insertComment(CommentDTO dto, CustomUser customUser) {
		// TODO Auto-generated method stub
		if (customUser == null || customUser.getUsername() == null) {
			return "로그인이 필요한 서비스입니다.";
		}
		if (dto == null || dto.getContent().trim().isEmpty()||
				dto.getPostNum()==0) {
			return "댓글 정보가 없습니다.";

		}
		try {
			dto.setId(customUser.getUsername());
			commentDAO.insertComment(dto);
			return "댓글을 등록했습니다.";
		}catch(Exception e) {
			e.printStackTrace();
			return "댓글을 등록하지 못했습니다.";
		}

	}

	public List<CommentVO> getCommentList(Criteria cri) {
		// TODO Auto-generated method stub
		List<CommentVO> list = commentDAO.selectCommentList(cri);
		return list;
	}

	public PageMaker getPageMaker(Criteria cri) {
		// TODO Auto-generated method stub
		int totalcount = commentDAO.selectCommentCount(cri);
		return new PageMaker(3, cri, totalcount);
	}

	public String deleteComment(int coNum, CustomUser customUser) {
		// TODO Auto-generated method stub
		if (customUser == null || customUser.getUsername() == null) {
			return "로그인이 필요한 서비스입니다.";
		}

		if(!isWriter(coNum,customUser)) {
			return "작성자가 아닙니다.";
		}
		
		boolean result = commentDAO.deleteComment(coNum);
		
		if(result) {
			return "댓글을 삭제했습니다.";
		}
		return "댓글을 삭제하지 못했습니다.";
//		try {
//			commentDAO.deleteComment(coNum);
//			return "댓글을 삭제했습니다.";
//		}catch(Exception e) {
//			e.printStackTrace();
//			return "댓글을 삭제하지 못했습니다.";
//		}
	}

	public String updateComment(CommentDTO dto, CustomUser user) {
		// TODO Auto-generated method stub
		if (user == null || user.getUsername() == null) {
			return "로그인이 필요한 서비스입니다.";
		}
		if (!isWriter(dto.getCoNum(),user)) {
			return "작성자가 아닙니다.";
		}
		boolean result = commentDAO.updateComment(dto);
		if(result) {
			return "댓글을 수정했습니다.";
		}
		return "댓글을 수정하지 못했습니다.";
	}
	
	private boolean isWriter(int coNum, CustomUser user) {
		if (user == null || user.getUsername() == null) {
			return false;
		}
		CommentVO comment = commentDAO.selectComment(coNum);
		
		if(comment == null || !comment.getCo_me_id().equals(user.getUsername())) {
			return false;
		}
		return true;
	}
}
