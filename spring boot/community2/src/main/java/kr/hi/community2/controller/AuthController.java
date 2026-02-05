package kr.hi.community2.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.hi.community2.model.dto.LoginDTO;
import kr.hi.community2.service.UserService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@AllArgsConstructor
public class AuthController {
	
	private final UserService userService;

	@PostMapping("/signup")
	public ResponseEntity<Boolean> signup(@RequestBody LoginDTO user){
		boolean res = userService.signup(user);
		return ResponseEntity.ok(res);
	}
}
