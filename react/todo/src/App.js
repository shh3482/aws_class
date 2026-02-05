import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Navbar from './component/nav/Navbar';
import Main from './component/body/Main';
import List from './component/body/List';
import Insert from './component/body/Insert';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Main/>} />
        <Route path="/todo/list" element={<List/>} />
        <Route path="/todo/insert" element={<Insert/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
