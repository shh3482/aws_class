
import { useState } from "react";

function Convert(){

	let [min, setMin] = useState(0);
	const change = (e)=>{setMin(e.target.value); console.log(min)};

	return(
		<div>
			<div>
				<input type="number" disabled={false} value={min} onChange={change} />
			</div>
			<input type="number" disabled={true} value={min * 60} />
		</div>
	);
}

export default Convert;