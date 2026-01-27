import { useState } from "react";

function PostMapApp3(){
	// 게시글 등록할 때 게시글 번호
		let [num, setNum] = useState(2);
	
		let [posts, setPosts] = useState([
			{ num : 1, title : '제목입니다', content : '내용입니다.', writer : '홍길동'},
		])

		let [post, setPost] = useState({
			title : '',
			writer : '',
			content : '',
			num : 0
		})
	
		const postInsert = (e) =>{
			e.preventDefault();

			if (!post.title.trim()){
				alert("제목을 입력하세요");
				return;
			}
			if (!post.writer.trim()){
				alert("작성자를 입력하세요");
				return;
			}
			if (!post.content.trim()){
				alert("내용을 입력하세요");
				return;
			}
			
			setNum(num + 1);
			setPosts([post, ...posts]);
			setPost({
				title : '',
				writer : '',
				content : '',
				num : num
			})
		}

		const changeHandler = e =>{
			let {name, value} = e.target;
			setPost({
				...post,
				[name] : value,
				num : num
			})
		};
	
		return(
			<div>
				<form onSubmit={postInsert}>
					<input type="text" placeholder="제목을 입력하세요." onChange={changeHandler} name="title" value={post.title}/>
					<br/>
					<input type="text" placeholder="작성자를 입력하세요." onChange={changeHandler} name="writer" value={post.writer}/>
					<br/>
					<textarea placeholder="내용을 입력하세요." onChange={changeHandler} name="content" value={post.content}></textarea>
					<br/>
					<button>게시글 등록</button>
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
										<td>{item.title}</td>
										<td>{item.writer}</td>
									</tr>
								);
							})
						}
					</tbody>
				</table>
			</div>
		);
}
export default PostMapApp3;