import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts(){
  let [posts, setPosts] = useState([]);

  useEffect(()=>{
    // 서버 호출 대신 가짜 데이터를 즉시 세팅 (요구사항: 최초 렌더링 시 로딩)
    const getPosts = async ()=>{
      const mockData = [
        { num: 1, title: "리액트 훅을 이용한 API 실습", writer: "한성호", date: "2026-03-24" },
        { num: 2, title: "MyBatis와 Spring 연동 성공", writer: "관리자", date: "2026-03-24" },
        { num: 3, title: "SPA 라우팅 기능 구현", writer: "홍길동", date: "2026-03-24" }
      ];
      setPosts(mockData);
      
      /* 실제 서버 연동 시 주석 해제
      try {
        const response = await fetch("/api/v1/posts");
        if(response.ok) {
          const result = await response.json();
          setPosts(result);
        }
      } catch(e) { console.error(e); }
      */
    };
    getPosts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>🌿 게시글 목록</h1>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={"post" + post.num}>
              <td>{post.num}</td>
              <td style={{ textAlign: 'left', paddingLeft: '10px' }}>
                {/* 요구사항: /post/detail/번호 로 이동 */}
                <Link to={"/post/detail/" + post.num}>{post.title}</Link>
              </td>
              <td>{post.writer}</td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Posts;