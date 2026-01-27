
import { useState } from "react";

function ReadOnly(){

	let [canInput, setInput] = useState(true);

	const btnClick = ()=>{setInput(!canInput); console.log(!canInput)};

	return (
		<div>
			<input type="text" readOnly={canInput}/>
			<button onClick={btnClick}>{canInput ? "쓰기" : "읽기"}</button>
		</div>
	)
}

export default ReadOnly;