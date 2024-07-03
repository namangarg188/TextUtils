import './App.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
function App() {
  const[mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const togglemode=()=>{
    if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor='#042743';
    showalert("dark mode is enabled","success")
    document.title="TextUtils dark mode";
    setInterval(() => {
      document.title="TextUtils dark mode";
    }, 2000);
    setInterval(() => {
      document.title="amzing dark mode";
    }, 1500);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showalert("light mode is enabled","success");
      document.title="TextUtils light mode";
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" AboutText="About TextUtils" changemode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">

      {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route exact path="/"element= */}
                <TextForm showalert={showalert} heading="EnTeR ThE DaTa To AnAlYsE" changemode={mode} />
              
            {/* ></Route> */}
          {/* </Routes> */}


      </div>
      
      
      {/* <Navbar /> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
