import { useState } from "react";

/*
등록 버튼을 클릭하면 입력한 제목, 작성자, 내용이 콘솔에 출력되도록 작성
*/

function PostMapApp2(){
	// 게시글 등록할 때 게시글 번호
	let [num, setNum] = useState(2);

	let [posts, setPosts] = useState([
		{ num : 1, title : '제목입니다', content : '내용입니다.', writer : '홍길동'},
	])
	let [inputTitle,setInputTitle] = useState("");
	let [inputContent,setInputContent] = useState("");
	let [inputWriter,setInputWriter] = useState("");
	const titleChange = (e)=>{setInputTitle(e.target.value)}
	const writerChange = (e)=>{setInputWriter(e.target.value)}
	const contentChange = (e)=>{setInputContent(e.target.value)}
	const btnClick = () => {
		console.log(inputTitle);
		console.log(inputContent);
		console.log(inputWriter);
	}


	const postInsert = (e) =>{
		e.preventDefault();
		const obj = {
			num,
			inputTitle,
			inputWriter,
			inputContent
		}
		setNum(num + 1);
		setPosts([obj, ...posts]);
	}

	

	return(
		<div>
			<form onSubmit={postInsert}>
				<input type="text" placeholder="제목을 입력하세요." onChange={titleChange} />
				<br/>
				<input type="text" placeholder="작성자를 입력하세요." onChange={writerChange} />
				<br/>
				<textarea placeholder="내용을 입력하세요." onChange={contentChange} ></textarea>
				<br/>
				<button onClick={btnClick}>게시글 등록</button>
			</form>
			<h1>게시글 목록</h1>
			<table>
				<thead>
					<tr>
						<th>번호</th>
						<th>제목</th>
						<th>작성자</th>
					</tr>
				</thead>
				<tbody>
					{
						posts.map(item=>{
							return (
								<tr key={"post" + item.num}>
									<td>{item.num}</td>
									<td>{item.inputTitle}</td>
									<td>{item.inputWriter}</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		</div>
	);
}
export default PostMapApp2;