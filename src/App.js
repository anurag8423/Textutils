import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {  Routes, Route } from "react-router-dom";

function App() {
  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
   setalert({

    msg:message,
    typ:type
   })
  }
  const [mode, setmode] = useState('light');

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#270d58';
      document.title = 'Text Reader- Dark Mode enabled';
      showalert("Dark mode has been enabled successfully","success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'Text Reader- Light Mode enabled'
      showalert("Light mode has been enabled successfully","success");
    }
  }
  return (
    <>
      <Navbar title='TextUtils1' about='About Textutils' mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
        <Routes>
          <Route path='/about' element={<About mode={mode} />}/>
          <Route path='/' element={<TextForm heading="Enter your text here to analyze " mode={mode}/>}/>
        </Routes>
        {/* <TextForm heading="Enter your text here to analyze " mode={mode} />
        <About /> */}
      </div>
    </>
  );
}

/* 'exact' is used for matching the path exactly
 */
export default App;
