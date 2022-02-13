import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Posts from './pages/Posts'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<Posts/>} />
          <Route path="/posts/:id" element={<PostDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
