import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home'
import List from './components/List'
function App() {
  return (
    <BrowserRouter basename="/nobel-prize-list">
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/list' element={<List />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}
