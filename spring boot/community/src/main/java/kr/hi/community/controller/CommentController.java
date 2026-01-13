package kr.hi.community.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.hi.community.model.dto.CommentDTO;
import kr.hi.community.model.util.CommentCriteria;
import kr.hi.community.model.util.CustomUser;
import kr.hi.community.model.util.PageMaker;
import kr.hi.community.model.vo.CommentVO;
import kr.hi.community.service.CommentService;

@RestController
@RequestMapping("/comment")
public class CommentController {
	@Autowired
	CommentService commentService;

	@PostMapping("/insert")
	public ResponseEntity<String> insert(
			@RequestBody CommentDTO commentDto,
			@AuthenticationPrincipal CustomUser customUser
			) {

		String result = commentService.insertComment(commentDto, customUser);

		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/list")
	public ResponseEntity<Map<String, Object>> list(
		@RequestBody CommentCriteria cri,
		HashMap<String, Object> map
		){
		cri.setPerPageNum(3);
		List<CommentVO> list = commentService.getCommentList(cri);
		PageMaker pm = commentService.getPageMaker(cri);
		map.put("list", list);
		map.put("pm", pm);
		return ResponseEntity.ok(map);
	}
	
	@PostMapping("/delete/{coNum}")
	public ResponseEntity<String> delete(
		@PathVariable("coNum") int coNum,
		@AuthenticationPrincipal CustomUser customUser
		) {
		String result = commentService.deleteComment(coNum, customUser);

		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/update")
	public ResponseEntity<String> update(
		@RequestBody CommentDTO dto,
		@AuthenticationPrincipal CustomUser user
		) {
		String result = commentService.updateComment(dto, user);

		return ResponseEntity.ok(result);
	}
}
