
import { useState } from "react";

function Convert2(){

	let [sec, setSec] = useState(0);
	const change = (e)=>{setSec(e.target.value);};

	//let [isSwaped, swapNum] = useState(true);
	//const btnClick = ()=>{swapNum(!isSwaped);};

	return(
		<div>
			<div>
				<input type="number" disabled={true} value={sec} onChange={change} />
				{/* <button onClick={btnClick}>변환</button> */}
			</div>
			<input type="number" disabled={false} value={parseInt(sec / 60)} />
		</div>
	);
}

export default Convert2;