
import { useState } from "react";

function Convert3(){

	let [num, setNum] = useState(0);
	const change = (e)=>{setNum(e.target.value);};

	let [isSwaped, swapNum] = useState(true);
	const btnClick = ()=>{
		setNum(isSwaped ? parseInt(num * 60) : parseInt(num / 60));
		swapNum(!isSwaped);
	};

	return(
		<div>
			<div>
				<input type="number" disabled={!isSwaped} value={isSwaped ? num : parseInt(num / 60) } onChange={change} />
				<button onClick={btnClick}>변환</button>
			</div>
			<input type="number" disabled={isSwaped} value={isSwaped ? parseInt(num * 60) : num } onChange={change} />
		</div>
	);
}

export default Convert3;