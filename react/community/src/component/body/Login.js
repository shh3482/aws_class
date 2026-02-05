import { useState } from "react";


function Login(){

	let [info, setInfo] = useState({id : "", pw : ""})

	const changeHandler = e =>{
		const {name, value} = e.target;
		setInfo({...info, [name] : value});
	}
	const submitHandler = e =>{
		e.preventDefault();
	}
	return(
		<div>
			<h1>로그인</h1>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="id">아이디 : </label>
					<input type="text" name="id" id="id" onChange={changeHandler}/>
				</div>
				<div>
					<label htmlFor="pw">비번 : </label>
					<input type="text" name="pw" id="pw" onChange={changeHandler}/>
				</div>
				<button>로그인</button>
			</form>
		</div>
	)
}

export default Login;