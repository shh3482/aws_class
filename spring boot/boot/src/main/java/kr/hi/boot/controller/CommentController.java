package kr.hi.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kr.hi.boot.model.vo.Comment;
import kr.hi.boot.model.vo.Post;
import kr.hi.boot.service.CommentService;
import kr.hi.boot.service.PostService;

@RestController
@RequestMapping("/api/v1")
public class CommentController {

	private final CommentService commentService;

	public CommentController(CommentService commentService) {
		this.commentService = commentService;
	}

	// api/v1/posts/게시글번호/comments 임시로 null
	@GetMapping("/posts/{num}/comments")
	@ResponseBody
	public ResponseEntity<List<Comment>> getComments(
		@PathVariable("num")int poNum
		) {
		// 게시글 번호 가져옴
		// 서비스한테 번호주고 댓글 목록 가져옴
		List<Comment> list = commentService.getComments(poNum);
		// 댓글목록 화면에 출력
		return ResponseEntity.ok(list);
	}
}
