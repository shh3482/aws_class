package kr.hi.community2.dao;

import kr.hi.community2.model.dto.LoginDTO;

public interface UserDAO {

	boolean insertUser(LoginDTO user);

}
