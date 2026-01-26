import { useState } from "react";

function App5(){
//버튼을 누르면 input태그에 입력된 값을 h1태그에 추가하는 기능을 구현하세요.

let [inputText,setInputText] = useState("");
let [text,setText] = useState("");
const change = (e)=>{setInputText(e.target.value)}
const printText = ()=>{setText(inputText)}

	return(
		<div>
			<input onChange={change}/>
			<button onClick={printText}>입력</button>
			<h1>{text}</h1>
		</div>
	);
}

export default App5;