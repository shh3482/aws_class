package kr.hi.boot.service;

import org.springframework.stereotype.Service;

import kr.hi.boot.dao.LikeDAO;
import kr.hi.boot.model.util.CustomUser;

@Service
public class LikeService {

	private final LikeDAO likeDAO;

	public LikeService(LikeDAO likeDAO) {
		this.likeDAO = likeDAO;

	}

	public String like(int postNum, CustomUser user) {
		// TODO Auto-generated method stub
		// 로그인 여부
		if (user == null) {
			return "로그인이 필요한 서비스입니다.";
		}
		// 다오에게 게시글번호와 아이디를 주면서 삭제하고 결과를 가져오라고 요청
		// 삭제했으면 추천을 취소했습니다 라고 반환
		// 못했으면(추천정보가 없어서)
		String id = user.getUsername();
		boolean result = likeDAO.deleteLike(postNum, id);
		if (result) {
			return "추천을 취소했습니다.";
		}
		// 다오에게 게시글번호와 아이디를 주면서 추천하고 결과를 가져오라고 요청
		// 추천했으면 추천을 했습니다를 반환
		// 못했으면 추천을 하지 못했습니다를 반환
		boolean result2 = likeDAO.insertLike(postNum, id);
		if (result2) {
			return "추천을 했습니다.";
		}
		return "추천을 하지 못했습니다.";
		//return "추천을 취소하지 못했습니다.";

	}
}
