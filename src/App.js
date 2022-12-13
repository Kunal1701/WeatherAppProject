
import './App.css';
import Card from './components/Card';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
    <Router>
    <div className="conatiner">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/card" element={<Card/>}/>
      </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
