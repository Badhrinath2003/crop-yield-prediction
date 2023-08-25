import './App.css';
import Home from './Home';
import Yield from './Yield1';
import Data from './Data';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yield" element={<Yield />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;