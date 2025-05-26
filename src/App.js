import './App.css';
import Navbar from './components/Navbar';
import {Route , Routes} from "react-router-dom"
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </div>
  );
}

export default App;
//to understand complexities watch last video from 30 minutes later
