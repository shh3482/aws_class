import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);

  useEffect(() => {
    const details = {
      1: { title: "리액트 Hooks 기초 완벽 정리", content: "useState와 useEffect는 리액트의 핵심입니다.", author: "한성호" },
      2: { title: "MyBatis와 Spring Boot 연동하기", content: "서버와의 데이터 통신을 담당합니다.", author: "관리자" },
      3: { title: "API 호출과 데이터 바인딩 실습", content: "서버로부터 받은 데이터를 화면에 출력합니다.", author: "홍길동" }
    };
    setPost(details[id] || { title: "데이터 없음", content: "해당 번호의 글이 없습니다.", author: "-" });
  }, [id]);

  if (!post) return <div style={{ padding: '20px' }}>로딩 중...</div>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', margin: '20px', borderRadius: '8px' }}>
      <h3>📄 게시글 상세 내용 ({id}번)</h3>
      <hr />
      <h4>제목: {post.title}</h4>
      <p><strong>작성자:</strong> {post.author}</p>
      <div style={{ minHeight: '100px', backgroundColor: '#fafafa', padding: '15px', border: '1px solid #eee' }}>
        {post.content}
      </div>
      <br />
      <Link to="/posts" style={{ color: '#007bff', textDecoration: 'none' }}>← 목록으로 돌아가기</Link>
    </div>
  );
};

export default PostDetail;