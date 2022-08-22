import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Login';
import {useEffect} from "react";
import {auth} from "./firebase";

function App() {

    useEffect(()=> {
        auth.onAuthStateChanged(authUser => {
            console.log("사용자는 다음과 같습니다.", authUser);
            if(authUser){

            }else {

            }
            })
        }, [])

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
