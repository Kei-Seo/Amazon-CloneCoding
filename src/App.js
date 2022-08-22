import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>}/>

          <Route path="/" element={<Header><Home /></Header>}/>
        
          <Route path = "/checkout" element={<Header><Checkout/></Header>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
