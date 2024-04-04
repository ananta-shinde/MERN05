import logo from './logo.svg';
import './App.css';
import products from "./data.json"
import ProductListSimple from './components/ProductListSimple';
 
function App() { 

  return (
    <>
       <div className='product-grid'>
        {products.map((p)=>( 
        <div className='product-card' style={{width:"18rem"}}>
           <img src={p.image}/>
           <h4>{p.title}</h4>
           <p class="badge-success">{p.rating.rate}</p>
           <p>Rs:{p.price}</p>
         </div>))}
       </div>
       {/* <ProductListSimple/> */}
    </>
  );
}

export default App;
