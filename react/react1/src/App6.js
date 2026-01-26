import { useState } from "react";

function App6(){
//버튼을 누르면 input태그에 입력된 값을 h1태그에 추가하는 기능을 구현하세요.

let [fruit,setSelect] = useState("");
const selectFruit = (e)=>{setSelect(e.target.value)}

	return(
		<div>
			<h1>좋아하는 과일은?</h1>
			<select onChange={selectFruit}>
				<option value="">과일을 선택하세요.</option>
				<option>사과</option>
				<option>바나나</option>
				<option>포도</option>
			</select>
			<h3>좋아하는 과일 : {fruit === "" ? "선택된 과일이 없습니다." : fruit}</h3>
		</div>
	);
}

export default App6;