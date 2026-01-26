function Btn1(){

	function 함수명(){
		
	}

	return(
		<button onClick={함수명}>일반 버튼1</button>
	);
}

const Btn2 = () =>{
	return(
		<button>일반 버튼2</button>
	);
}

// 부모가 보낸 정보를 props 객체로 받음
function Btn3(props){
	return(
		<button>{props.text}</button>
	);
}

// 부모가 보낸 정보를 객체로 받음
function Btn4({text="버튼", style}){
	return(
		<button style={style}>{text}</button>
	);
}

export {Btn1, Btn2, Btn3, Btn4};