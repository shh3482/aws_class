package kr.hi.boot.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kr.hi.boot.model.dto.CommentResponseDTO;
import kr.hi.boot.model.util.Criteria;
import kr.hi.boot.model.util.CustomUser;
import kr.hi.boot.model.util.PageMaker;
import kr.hi.boot.model.vo.Comment;
import kr.hi.boot.service.CommentService;

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
	public ResponseEntity<CommentResponseDTO> getComments(
		@PathVariable("num")int poNum,
		Criteria cri
		) {
		cri.setPerPageNum(5);
		// 게시글 번호 가져옴
		// 서비스한테 번호주고 댓글 목록 가져옴
		List<Comment> list = commentService.getComments(poNum, cri);
		
		//서비스에게 게시글 번호와 페이지 정보를 주면서 pagemaker 객체를 가져오라고 요청
		PageMaker pm = commentService.getPageMaker(poNum, cri);
		
		// 댓글목록 화면에 출력
		CommentResponseDTO dto = new CommentResponseDTO(list, pm);
		
		return ResponseEntity.ok(dto);
	}
	
	@PostMapping("/posts/{num}/comments")
	@ResponseBody
	public ResponseEntity<String> getCommentsPost(
		@PathVariable("num")int postNum,
		@RequestBody Comment comment,
		@AuthenticationPrincipal CustomUser user) {
		comment.setPostNum(postNum);
		String result = commentService.insertComment(comment,user);
		return ResponseEntity.ok(result);
	}
	
	@DeleteMapping("/posts/{postNum}/comments/{coNum}")
	public ResponseEntity<String> postsCommentsDelete(
		@PathVariable("coNum") int coNum,
		@AuthenticationPrincipal CustomUser user) {
		String result = commentService.deleteComment(coNum,user);
		
		return ResponseEntity.ok(result);
	}
	
	@PutMapping("/posts/{postNum}/comments/{coNum}")
	public ResponseEntity<String> updateCommentsPost(
		@PathVariable("postNum") int postNum,
		@PathVariable("coNum") int coNum,
		@RequestBody Comment comment,
		@AuthenticationPrincipal CustomUser user) {
		comment.setPostNum(postNum);
	    comment.setNum(coNum);
		String result = commentService.updateComment(coNum, comment, user);
		return ResponseEntity.ok(result);
	}
}
