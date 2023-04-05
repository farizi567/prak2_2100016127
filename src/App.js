import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './pages/About';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/About" element={<About/> } />
      </Routes>
      
      </Router>
      </>
  );
}

export default App;
