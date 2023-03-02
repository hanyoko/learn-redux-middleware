import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import PostContainer from './containers/PostContainer';
import PostListContainer from './containers/PostListContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CounterContainer />
        <Routes>
          <Route path="/" element={<PostListContainer />} />
          <Route path="/:id" element={<PostContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
