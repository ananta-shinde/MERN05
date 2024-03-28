import logo from './logo.svg';
import './App.css';
import Functionality01 from './Functionality01';
import Functionality02 from './Functionality02';
import Functionality03 from './Functionality03';
import { useState } from 'react';
function App() {
  const [message,setMessage] = useState("Hello from App");
  
  
  return (
    <>
     <Functionality01 message={message}/>
     <Functionality02 message={message}/>
     <Functionality03 setMessage={setMessage}/>
     </>
  );
}

export default App;
