import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"

function ProductList()
{
  const [productList, setProductList] = useState([])
  const [categories,setCategories] = useState([])
  const [filter,setfilter] = useState({})
  useEffect(()=>{
    var productListUrl = "http://localhost:5000/products"

    if(filter.categoryId){
      productListUrl ="http://localhost:5000/products?categoryId="+filter.categoryId
    }

    fetch(productListUrl)
    .then(res => res.json())
    .then(data=>{
       setProductList(data)
       console.log(data)
    })

    fetch("http://localhost:5000/categories")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setCategories(data)
    })
  },[filter])
  
  const handleChange = (e)=>{
         
         if(e.target.value == 0){
             setfilter({})
         }
         else{
          setfilter({...filter,categoryId:e.target.value})
         }
  }

  return(
    <>
    <div className='row'>
      <div className='col-3'>
        <form>
            <select className='form-control' onChange={handleChange}>
              <option value={0}> -- select category --</option>
               {categories.map(c=>(<option value={c.id}>{c.name}</option>))} 
            </select>
        </form>
      </div>
      <div className='col'>
      <div className='row'>
            {productList.map(p=>(
              <div className='col-4'>
                <div className='card'>
                    <h4>{p.name}</h4>
                </div>
              </div>
            ))}
       </div>
      </div>
    </div>
   
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
