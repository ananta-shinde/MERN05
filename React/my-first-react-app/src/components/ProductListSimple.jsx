import products from "../data.json"
const ProductListSimple = ()=>{
    return(
        <ul class="product-list">
         {products.map((p)=>(
         <li class="product-card">
          <img class="img-thumbnail" src={p.image}/>
          <h3>{p.title}</h3>
          <p>{p.rating.rate}</p>
          </li>))}
       </ul>
    )
}

export default ProductListSimple;