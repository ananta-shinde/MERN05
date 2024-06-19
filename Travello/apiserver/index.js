// import express module
const express = require("express")
const bodyParser = require("body-parser")
const { getAllProducts, getProductById, searchProduct, getproductsByBrand, createProduct } = require("./helpers/products")
const { cityModel } = require("./db.config")
// create an app object
const app = express()

app.use(bodyParser.json())

app.get("/",(req,res)=>{
      
})

app.get("/products",(req,res)=>{
    var result = undefined;
    if(req.query.searchText)
    {
        console.log(req.query.searchText)
        result = searchProduct(req.query.searchText);
    }else{
        result = getAllProducts();
    }
     res.send(result)
})

app.post("/products",(req,res)=>{
    const result = createProduct(req.body)
    res.send(result)
})

app.put("/products/:id",(req,res)=>{
    res.send("data updated...")
})
app.delete("/products/:id",(req,res)=>{
    res.send("data deleted...")
})

app.get("/products/brands/:brandName",(req,res)=>{
    const result = getproductsByBrand(req.params.brandName)
    res.send(result)
})

app.get("/products/:id",(req,res)=>{
    const result =getProductById(req.params.id)
    res.send(result)
})

app.post("/cities",(req,res)=>{
    const newCity = new cityModel(req.body)
    newCity.save()
    res.send(newCity)
})
app.get("/cities",async(req,res)=>{
    const cities = await cityModel.find({})
    res.send(cities)
})
app.put("/cities/:id",async(req,res)=>{
    const cities = await cityModel.findByIdAndUpdate(req.params.id,req.body )
    res.send("city updated")
})

app.delete("/cities/:id",(req,res)=>{
    const currentCity = cityModel.deleteOne({_id:req.params.id})
    res.send("doct deleted")
})


//start app (server)
app.listen(5000,()=>{console.log("server started")})