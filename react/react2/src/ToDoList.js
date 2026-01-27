import { useState } from "react";


function ToDoList(){
	let [id, setId] = useState(2);
	let [text,inputText] = useState("");
	let [posts, setPosts] = useState([
		{ id : 1, text : '할 일 입니다.'},
	])

	const change = (e) => {inputText(e.target.value)}

	const postInsert = (e) =>{
		e.preventDefault();
		const obj = {
			id,
			text
		}
		if (!obj.text.trim()){
				alert("내용을 입력하세요");
				return;
			}
		setId(id + 1);
		console.log(id);
		setPosts([...posts, obj]);
		inputText("");
	}

	const delPost = (id)=>{
		console.log(id)
		const newPosts = posts.filter((item)=>{
			return item.id !==id;
		});
		setPosts(newPosts);
	}

	return (
		<div>
			<form onSubmit={postInsert}>
				<input type="text" placeholder="할일을 입력하세요." onChange={change} value={text}/>
				<button>등록</button>
			</form>
			<h1>할 일 목록</h1>
			<ul>
				{
					posts.length === 0 ?
					<li>등록된 할 일이 없습니다.</li> :
					posts.map(item=>{
						return (
							<li key={"post" + item.id}>{item.text}{item.id}
							<button style={{fontSize:'20px'}} onClick={e=>delPost(item.id)}>&times;</button>
							</li>
						);
					})
				}
			</ul>
		</div>
	);
}

export default ToDoList;