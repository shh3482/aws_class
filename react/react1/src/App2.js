
function App2(){
	let num = 1;

	const plusNum = ()=>{
		++num;
		console.log(num);
	}

	return(
		<div>
			<h1>값 : {num}</h1>
			<button onClick={plusNum}>+</button>
		</div>
	);
}

export default App2;