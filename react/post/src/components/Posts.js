import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const mockData = [
      { id: 1, title: "리액트 Hooks 기초 완벽 정리", author: "한성호" },
      { id: 2, title: "MyBatis와 Spring Boot 연동하기", author: "관리자" },
      { id: 3, title: "API 호출과 데이터 바인딩 실습", author: "홍길동" }
    ];
    setPosts(mockData);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>🌿 게시글 목록</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th>번호</th>
            <th>제목 (클릭 시 상세 이동)</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td style={{ textAlign: 'left', paddingLeft: '10px' }}>
                <Link to={`/post/detail/${post.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                  {post.title}
                </Link>
              </td>
              <td>{post.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;