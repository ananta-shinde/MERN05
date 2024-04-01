import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function Comp01(props)
{
  const [userMessage,setUserMessage] = useState(props.message);
  function handleChange(e)
  {
    setUserMessage(e.target.value)
    console.log(e.target.value)
  }
  var name = ""
  return(
    <>
    <input id="userInput" placeholder='Enter name' onChange={handleChange}/>
    <button>Save</button>
    <Comp02 message={userMessage}/>
    </>
  )
}

function Comp02(props)
{
  return(
    <>
     <h4>{props.message}</h4>
     <p>list of names</p>
     </>
  )
}
function App() {  
  return (
    <>
      <Comp01 message="Sample Message"/>
     </>
  );
}

export default App;
