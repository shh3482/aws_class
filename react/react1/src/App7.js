
// 접기 버튼을 누르면 글자가 더보기로 바뀌고, 내용이 감춰짐.
// 더보기 버튼을 누르면 글자가 접기로 바뀌고, 내용이 보임.

import { useState } from "react";

function App7(){

	// defineState 를 통해서 {state}가 접기인지, 더보기 인지 구별.
	let [isOpen, setOpen] = useState(true);
	// {state}가 접기이면 더보기로, 더보기면 접기로 변경.
	// {state}가 접기이면 {content}에 빈문자열을 출력, 더보기면 content를 출력.

	//const btnClick = ()=>{isOpen ? setOpen(false) : setOpen(true)};
	const btnClick = ()=>{setOpen(!isOpen)};
	return(
		<div>
			<button onClick={btnClick}>{isOpen ? "접기" : "더보기"}</button>
			{
				isOpen ?
				<div>
					내용입니다.
				</div>
				:
				null
			}
		</div>
	);
}
export default App7;