const data = require("../data.json")

exports.getAllProducts = ()=>{
    return data.products
}

exports.getProductById = (productId)=>{
    const product = data.products.find(p=>(p.id == productId))
    return product;
}

exports.searchProduct = (searchText)=>{
     const products = data.products.filter(p=>p.title.includes(searchText))
     return products
}

exports.getproductsByBrand = (brandName) =>{
    const products =  data.products.filter(p=>p.brand == brandName)
    return products
}

exports.createProduct = (product)=>{
       data.products.push(product)
       return product
}

