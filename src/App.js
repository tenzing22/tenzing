
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import About from './components/About'

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
           setAlert({
             msg:message,
             type:type
           })
           setTimeout(()=>{
                    setAlert(null);
           },1000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable","success");
      document.title="TextUtils-Dark Mode";


    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable","success");
      document.title="TextUtils-Light Mode";
   

    }
  }
  return (
    <>
    
      <Navbar title="Tenzi-Nav" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        
           <About/>
          
        <TextForm showAlert={showAlert} heading="Enter the text analyze" mode={mode} />
        
      
        
      </div>
    


    </>
  );
}

export default App;
