import { useEffect, useState } from "react";
import "./List.css";
/* 
비동기 통신으로 할일 목록 전체를 요청해서 가져온 후 화면에 출력
url : /api/v1/todos
method : GET
*/
function Signup(){

	let [info,setInfo] = useState({id:},9)

	return(
		<div>
			<h1>회원가입</h1>
			<div>
				<label htmlFor="id">아이디</label>
				<input type="text" name="id" id="id" />
			 </div>
			<div>
				<label htmlFor="pw">아이디</label>
			 <input type="text" name="pw" id="ipsd" />
	 	
		</div>
	}
}

export default Signup;