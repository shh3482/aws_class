package kr.hi.community.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import kr.hi.community.model.vo.BoardVO;
import kr.hi.community.model.vo.PostVO;
import kr.hi.community.service.PostService;

@Controller
public class PostController {
	
	@Autowired
	PostService postService;
	
	// Get: URL 을 직접 입력하거나, 링크를 클릭해서 이동했을 때 대부분 Get.
	// Post: 값을 입력하여 중요한 정보를 전송할 때(form태그 + method = post)

	@GetMapping("/post/list")
	public String postList(Model model) {
		ArrayList<PostVO> list = postService.getPostList();
		model.addAttribute("list", list);
		return "/post/list";
	}
	
	@GetMapping("/post/detail/{num}")
	public String postDetail(
		@PathVariable("num")int po_num, Model model) {
		postService.updateView(po_num);
		PostVO post = postService.getPost(po_num);
		model.addAttribute("post", post);
		return "/post/detail";
	}
	
	@GetMapping("/post/insert")
	public String postInsert(Model model) {
		postService.postInsert();
		ArrayList<BoardVO> list = postService.getBoardList();
		model.addAttribute("list", list);
		return "/post/insert";
	}
	
	
}
