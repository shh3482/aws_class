package kr.hi.boot.controller;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.hi.boot.model.util.CustomUser;
import kr.hi.boot.service.LikeService;


@RestController
public class LikeController {

	private final LikeService likeService;

	public LikeController(LikeService likeService) {
		this.likeService = likeService;
	}

	@PostMapping("/api/v2/posts/{postNum}/like")
	public ResponseEntity<String> likePost(
		@PathVariable("postNum")int postNum,
		@AuthenticationPrincipal CustomUser user){
		// 게시글 번호 가져오기
		// 로그인한 사용자 정보 가져옴
		// 서비스에 게시글 번호, 사용자 정보 주며 게시글 추천하라고 요청
		// 결과를 가져옴
		String result = likeService.like(postNum, user);
		// 가져온 결과를 화면에 전달
		return ResponseEntity.ok(result);
	}
	
}
