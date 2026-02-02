import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './component/nav/Navbar';
import Main from './component/body/Main';
import Insert from './component/body/Insert';
import Login from './component/body/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Main/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;