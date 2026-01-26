
function App8(){
	const list = [
		{
			name : "홍길동",
			age : 21
		},
		{
			name : "둘리",
			age : 31
		},
		{
			name : "고길동",
			age : 41
		}
	];
	// 객체 배열 => 문자열로 배열
	let content = list.map((item) => {
		return "이름: " + item.name + ", " +"나이: " + item.age + "세";
	});
	return(
		<div>
			<ul>
				<li>
					{content[0]}
				</li>	
				<li>
					{content[1]}
				</li>	
				<li>
					{content[2]}
				</li>	
			</ul>	
		</div>
	);
}
export default App8;