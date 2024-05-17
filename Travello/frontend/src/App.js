import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"

function ProductList()
{
  var productList = [];
  
  useEffect(()=>{
    fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(data=>{
       productList = data
       console.log(productList)
    })
  })
  

  return(
    <>
    <h6>{JSON.stringify(productList)}</h6>
    </>
  )
}

function App() {
  return (
     <>
        <ProductList/>
     </>
  );
}

export default App;
