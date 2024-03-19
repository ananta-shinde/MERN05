
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

function TodoList()
{
  const [toDoList,setTodoList] = useState([])
  // const toDoList = [
  //   {taskId:1,description :"Learn HTML"},
  //   {taskId:2,description :"Learn CSS"},
  //   {taskId:3,description :"Learn React"}
  // ];
  
  
  const handleSave = () =>{
        //  toDoList.push({taskId:4,description:"Learn JS"})
         setTodoList([...toDoList,{taskId:4,description:"Learn JS"}])
  }
  return(
    <>
      <div className='todo-container'>
          <h4>Welcome to to do list app</h4>
          <input placeholder='Enter task to do' type='text'/>
          <button onClick={handleSave}>Save</button>
          <ul className='task-list'>
            {
               toDoList.map((task)=>(
                <li className='task-item' id={task.taskId}><input type='checkbox'/>{task.description}</li>
               ))
            }
          </ul>
          <p>No task to do</p>
       </div>
    </>
  )
}

function App() { 
  return (
    <>
       <Counter/>
       <TodoList/>
    </>
    
  );
}

export default App;
