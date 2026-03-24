import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
          <Link to="/posts" style={{ fontSize: '18px', fontWeight: 'bold' }}>[게시글 목록 보러가기]</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div style={{padding:'20px'}}>위의 링크를 클릭해 주세요!</div>} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/detail/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;