import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home'
import List from './components/List'
function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/list' element={<List />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
