package kr.hi.community.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import kr.hi.community.model.dto.LikeDTO;
import kr.hi.community.model.dto.PostDTO;
import kr.hi.community.model.util.Criteria;
import kr.hi.community.model.util.CustomUser;
import kr.hi.community.model.util.PageMaker;
import kr.hi.community.model.vo.BoardVO;
import kr.hi.community.model.vo.FileVO;
import kr.hi.community.model.vo.PostVO;
import kr.hi.community.service.PostService;

@Controller
public class PostController {

	@Autowired
	PostService postService;
	
	
	// xxx : Get, Post
	/*
	@xxxMapping("url")
	public String 메서드명() {
		return "";
	}
	*/
	@GetMapping("/post/list/{num}")
	public String postList(Model model,
		@PathVariable("num") int boardNum,
		Criteria cri) {
		cri.setBoardNum(boardNum);
		//서비스에게 게시글 목록을 가져오라고 요청
		//가져온 게시글 목록을 list에 저장
		ArrayList<PostVO> list = postService.getPostList(cri);
		ArrayList<BoardVO> boardList = postService.getBoardList();
		int totalCount = postService.getTotalCount(cri);
		PageMaker pm = new PageMaker(3, cri, totalCount);
		//게시글 목록을 화면에 전송
		model.addAttribute("list", list);
		model.addAttribute("boardNum", boardNum);
		model.addAttribute("boardList", boardList);
		model.addAttribute("pm",pm);
		return "post/list"; //post폴더에 list.html을 화면으로 보내줌
	}
	
	@GetMapping("/post/detail/{num}")
	public String postDetail(
		@PathVariable("num")int po_num, Model model,
		@AuthenticationPrincipal CustomUser customUser) {
		//게시글 번호를 이용해서 조회수 증가
		postService.updateView(po_num);
		
		//게시글 번호를 이용해서 게시글 가져옴
		//게시글 번호(기본키)를 이용하여 게시글을 조회하면? => 최대 1개(왜?) 
		//기본키이니까 => 기본키의 정의 => 기본키로 검색하면 최대 1행이 조회되는 컬럼
		PostVO post = postService.getPost(po_num);
		
		//서비스에게 게시글 번호를 주면서 첨부파일을 가져오라고 요청
		List<FileVO> files = postService.getFileList(po_num);
		
		//가져온 게시글을 화면에 전달
		model.addAttribute("post", post);
		
		//가져온 첨부파일 목록을 화면에 전달
		model.addAttribute("files",files);
		model.addAttribute("user",
				customUser == null? "" : customUser.getUsername());
		return "post/detail";
	}
	
	@GetMapping("/post/insert")
	public String postInsert(Model model) {
		//게시판 목록을 가져옴
		ArrayList<BoardVO> list = postService.getBoardList();
		
		//게시판 목록을 화면에 전송
		model.addAttribute("list", list);
		return "post/insert";
	}
	
	@PostMapping("/post/insert")
	public String postInsertPost(
		//게시글 등록에 필요한 정보를 받아옴
		PostDTO post, //제목, 내용, 게시판 번호
		@AuthenticationPrincipal CustomUser customUser,
		@RequestParam("files") List<MultipartFile> files
		//작성자(로그인한사용자) 정보
		) {
		//게시글 정보와 작성자 정보와 첨부파일 정보를 서비스에게 주면서 등록하라고 요청
		boolean result = postService.insertPost(post, customUser, files);
		//등록에 성공하면 /post/list로 이동, 실패하면 /post/insert로 이동
		if(result) {
			return "redirect:/post/list/" + post.getBoard();
		}
		return "redirect:/post/insert";
	}
	
	@PostMapping("/post/delete/{num}")
	public String postDelete(
		@PathVariable("num")int po_num, Model model,
		@AuthenticationPrincipal CustomUser customUser) {
		PostVO post = postService.getPost(po_num);
		postService.deletePost(po_num, customUser);
		return "redirect:/post/list/" + post.getPo_bo_num();
	}
	
	
	@GetMapping("/post/update/{num}")
	public String postUpdate(
		@PathVariable("num")int po_num, Model model,
		@AuthenticationPrincipal CustomUser customUser) {
		
		PostVO post = postService.getPost(po_num);
		model.addAttribute("post", post);
		
		// 게시글 번호를 서비스에게 주면서 첨부파일 목록을 가져오라고 요청
		List<FileVO> files = postService.getFileList(po_num);
		//가져온 첨부파일 목록을 화면에 전달
		model.addAttribute("files",files);
		
		postService.updatePost(po_num, customUser);
		
		return "post/update";
	}
	
	@PostMapping("/post/update/{num}")
	public String postUpdatePost(
		@PathVariable("num")int po_num,
		// PostDTO post 를 써도 됨
		@RequestParam("title")String po_title,
		@RequestParam("content")String po_content,
		@AuthenticationPrincipal CustomUser customUser,
		@RequestParam("files") List<MultipartFile> files,
		@RequestParam(value = "delFileNums", required = false) List<Integer> delFileNums
		) {
		
		postService.postUpdatePost(po_num, po_title, po_content, customUser, files, delFileNums);
		
		return "redirect:/post/detail/{num}";
	}
	
	@PostMapping("/post/like")
	@ResponseBody
	public ResponseEntity<String> postLike(
		@RequestBody LikeDTO like,
		@AuthenticationPrincipal CustomUser customUser
		) {
		try {
			String result = postService.updateLike(like, customUser);
			postService.updateBoardLike(like.getPostNum());
			return ResponseEntity.ok(result);			
		}catch(Exception e) {
			return ResponseEntity
					.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(e.getMessage());
		}
	}
	
	@GetMapping("/post/like/count/{num}")
	@ResponseBody
	public ResponseEntity<Map<String, Object>> postLikeCount(
		HashMap<String, Object> map,
		@PathVariable("num")int postNum
		){
		int up = postService.getLikeCount(postNum,1);
		int down = postService.getLikeCount(postNum,-1);
		map.put("up",up);
		map.put("down",down);
		return ResponseEntity.ok(map);
		
	}
	
	@GetMapping("/post/like/check/{num}")
	public ResponseEntity<Integer> postLikeCheck(
		@PathVariable("num")int postNum,
		@AuthenticationPrincipal CustomUser customUser
		){
		int state = postService.getLikeState(postNum,customUser);
		
		return ResponseEntity.ok(state);
	}
}



