package kr.hi.community.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import kr.hi.community.model.dto.MemberDTO;
import kr.hi.community.service.MemberService;

@Controller
public class HomeController {
	
	@Autowired
	MemberService memberService;
	
	// Get: URL 을 직접 입력하거나, 링크를 클릭해서 이동했을 때 대부분 Get.
	// Post: 값을 입력하여 중요한 정보를 전송할 때(form태그 + method = post)
	@GetMapping("/")
	public String home() {
		return "index";
	}

	@GetMapping("/signup")
	public String signup() {
		return "signup";
	}
	
	@PostMapping("/signup")
	public String signupPost(
		MemberDTO member) {
		
		boolean result = memberService.signup(member);
		
		if(result) {
			return "redirect:/";
			
		}
		else {
			return "redirect:/signup";
		}
	}
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	
}
