package kr.hi.community.service;

import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import kr.hi.community.dao.MemberDAO;
import kr.hi.community.model.dto.MemberDTO;

@Service
public class MemberService {

	@Autowired
	MemberDAO memberDAO;
	
	@Autowired
	@Lazy
	BCryptPasswordEncoder pwEncoder;// = new BCryptPasswordEncoder();
	
	public boolean signup(MemberDTO member) {
		// TODO Auto-generated method stub
		if (member == null) {
			return false;
		}
		String idRegex="^[a-zA-Z0-9!@#$]{6,13}$";
		String id = member.getId();
		if (id == null || !Pattern.matches(idRegex,id)) {
			return false;
		}
		String pwRegex="^[a-zA-Z0-9!@#$]{8,13}$";
		String pw = member.getPw();
		if (pw == null || !Pattern.matches(pwRegex,pw)) {
		
		return false;
		}
		if(member.getEmail() == null) {
			return false;
		}
		try {
			String encodedPW = pwEncoder.encode(pw);
			member.setPw(encodedPW);
			return memberDAO.insertMember(member);
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}
	
}
