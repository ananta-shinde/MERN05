import { useState } from "react";
import products from "../data.json"
const ProductListGrid = ()=>{
    const [gridClass,setGridClass] = useState('product-grid grid-3')
    
    const handlechange = (e)=>{
           if(e.target.value == "3")
           {
                setGridClass('product-grid grid-3')
           }
           if(e.target.value == "4")
           {
                setGridClass('product-grid grid-4')
           }
    }

    return (
        <>
        <select onChange={handlechange}>
            <option value="3">3-product-grid</option>
            <option value="4">4-product-grid</option>
        </select>
        <div className={gridClass}>
        {products.map((p)=>( 
        <div className='product-card' style={{width:"18rem"}}>
           <img src={p.image}/>
           <h4>{p.title}</h4>
           <p class="badge-success">{p.rating.rate}</p>
           <p>Rs:{p.price}</p>
         </div>))}
       </div>
        </>
    )
}

export default ProductListGrid;