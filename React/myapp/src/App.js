
import { useState } from 'react';
import './App.css';

function Counter(props)
{
  // let count = 0;
  const [count,setCount] = useState(0);
  function increment()
  {
      setCount(count+1);
      console.log(count)
  }

  function decrement()
  {
      setCount(count-1);
      console.log(count)
  }
   return(
    <>
    <input placeholder='initial count' value={count}/>
    <button onClick={increment}>{props.btnIncText}</button>
    <button onClick={decrement}>{props.btnDecText}</button>
    </>
   )
}
function App() { 
  return (
    <>
       <Counter btnIncText="increment" btnDecText="decrment"/>
    </>
    
  );
}

export default App;
