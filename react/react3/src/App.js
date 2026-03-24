import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
          <Link to="/posts" style={{ fontWeight: 'bold' }}>[게시글 목록]</Link>
        </nav>

        <Routes>
          <Route path="/" element={<div style={{padding:'20px'}}>위의 목록 링크를 클릭하세요!</div>} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/detail/:num" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;