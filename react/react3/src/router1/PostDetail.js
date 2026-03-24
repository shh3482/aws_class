import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function PostDetail(){
  let {num} = useParams(); // URL의 게시글 번호
  let [post, setPost] = useState({});

  useEffect(()=>{
    const getPost = async ()=>{
      // 서버 대신 번호(num)에 맞는 가짜 상세 데이터 제공
      const mockDetails = {
        1: { title: "asd", writer: "한성호", date: "2026-03-24", content: "123" },
        2: { title: "MyBatis와 Spring 연동 성공", writer: "관리자", date: "2026-03-24", content: "서버와 DB를 정석대로 연결했습니다." },
        3: { title: "SPA 라우팅 기능 구현", writer: "홍길동", date: "2026-03-24", content: "react-router-dom을 이용한 페이지 이동." }
      };
      
      setPost(mockDetails[num] || {});
    };
    getPost();
  }, [num]);
  
  if(Object.keys(post).length === 0){
    return (<div><h1>등록되지 않은 게시글입니다.</h1><Link to="/posts">목록으로</Link></div>);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>게시글 상세</h1>
      <div style={{ border: '1px solid #ddd', padding: '15px' }}>
        <p><strong>제목 :</strong> {post.title}</p>
        <p><strong>작성자 :</strong> {post.writer}</p>
        <p><strong>작성일 :</strong> {post.date}</p>
        <hr />
        <div style={{ minHeight: '100px' }}>{post.content}</div>
      </div>
      <br />
      <Link to="/posts">목록으로 돌아가기</Link>
    </div>
  )
}

export default PostDetail;