import logo from './logo.svg';
import './App.css';
import products from "./data.json"
import ProductListSimple from './components/ProductListSimple';
import ProductListGrid from './components/ProductListGrid';
import { useState } from 'react';
 
function App() { 
  const [listingType,setListingType] = useState("grid");
  const handleListChange = ()=>{
    if(listingType != "list"){
      setListingType("list")
    }
    else{
      setListingType("grid")
    }
   
    console.log(listingType)
  }
  return (
    <>
    <button onClick={handleListChange}>toggle</button>
    {
     listingType == "grid" && <ProductListGrid/>
    }
    {
     listingType == "list" && <ProductListSimple/>
    }   
       
    </>
  );
}

export default App;
