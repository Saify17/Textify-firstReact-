import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextFom from './components/TextFom';
import Alert from './components/Alert';
import About from './components/About';
import React ,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]=useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },800);
  }
 const toggleMode =()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor="#0c1a3a"
    document.body.style.color="#eceded"
    showAlert ("Dark Mode is Enabled", "success");
  }else{
    setMode('light')
    document.body.style.backgroundColor="white"
    document.body.style.color="rgb(0, 0, 0)"
    showAlert ("light Mode is Enabled", "warning");
  }
 }



  return (
    <>
<Router basename="/Textify-firstReact-"> 
  <Navbar navbar="Demoo" Home="HoMe" About="About us" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />

  <Routes>
    <Route path="/about" element={<About mode={mode} />} />
    <Route path="/demoo" element={<TextFom formheading="Enter Your Text Here!" showAlert={showAlert} />} />
    <Route path="/" element={<TextFom formheading="Enter Your Text Here!" showAlert={showAlert} />} />
  </Routes>
</Router>


    </>
  );
}

export default App;
