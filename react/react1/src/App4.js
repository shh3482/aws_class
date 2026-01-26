import { useState } from "react";

function App4(){

	const change = (e)=>{setText(e.target.value)}
	let [text,setText] = useState("");

	return(
		<div>
			<input type="text" onChange={change} />
			<h1>{text == "" ? "입력하세요." : text}</h1>
		</div>
	);
}

export default App4;