import logo from './logo.svg';
import './App.css';
  
function Comp02(props)
{
  return(
    <>
      <ul>
        { props.data && props.data.map(d=>(<li>{d}</li>))  }
      </ul>
    </>
  )
}

function Comp03()
{
  return(
    <>
      <input placeholder='enter name'/>
      <button>Save</button>
    </>
  )
}

function Comp01(props)
{
     return(
      <>
        <Comp03/>
        <Comp02 data={props.data}/>
        <Comp02 data={props.data}/>
      </>
     )
}
function App() { 
  var data = ["CSS","HTML","React","JS"]; 
  return (
    <>
       <Comp02 data={data}/>
       <Comp01 />
     </>
  );
}

export default App;
