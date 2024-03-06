
var products = [ 
    
]

function addproduct(e){
     
    products.push({
        name:"p2",
        price:100,
        description:"demo",
        category : "c2"
    })
}




var mainMenus = document.querySelectorAll(".main-menu")

mainMenus.forEach(menu=>{
    menu.children[0].addEventListener("click",()=>{
        menu.classList.toggle("active")
        if(menu.classList.contains("active")){
            menu.children[1].classList = "bi bi-chevron-down"
        }else{
            menu.children[1].classList = "bi bi-chevron-right"
        }
         
    })
})

var subMenus = document.querySelectorAll(".sub-menu")
subMenus.forEach(sm=>{
    
    for(var i=0;i<sm.children.length;i++)
    {
        sm.children[i].addEventListener("click",enableForms)
    }
})
function enableForms(e)
{    
    var addProductForm = document.getElementById("add-product-form")
    var addCategoryForm = document.getElementById("add-category-form")
    var addBrandForm = document.getElementById("add-brand-form")
    var viewProductContainer = document.getElementById("view-product-container")
    var viewCategoryContainer = document.getElementById("view-categories-container")

    if(e.target.id == "add-product"){
        addProductForm.style.display = "block"
        addCategoryForm.style.display = "none"
        addBrandForm.style.display = "none"
        viewProductContainer.style.display = "none"
        viewCategoryContainer.style.display = "none"
    }
    if(e.target.id == "add-category"){
        addCategoryForm.style.display = "block"
        addBrandForm.style.display = "none"
        addProductForm.style.display = "none"
        viewProductContainer.style.display = "none"
        viewCategoryContainer.style.display = "none"
    }
    if(e.target.id == "add-brand"){
        addBrandForm.style.display = "block"
        addCategoryForm.style.display = "none"
        addProductForm.style.display = "none"
        viewProductContainer.style.display = "none"
        viewCategoryContainer.style.display = "none"
    }
    if(e.target.id == "view-product"){
        loadProductTable()
        addBrandForm.style.display = "none"
        addCategoryForm.style.display = "none"
        addProductForm.style.display = "none"
        viewProductContainer.style.display = "block"
        viewCategoryContainer.style.display = "none"
    }
    if(e.target.id == "view-category"){
        addBrandForm.style.display = "none"
        addCategoryForm.style.display = "none"
        addProductForm.style.display = "none"
        viewProductContainer.style.display = "none"
        viewCategoryContainer.style.display = "block"
    }
    
}

function loadProductTable()
{
    var productTable = document.getElementById("product-table")
    products.forEach(p=>{
        productTable.innerHTML =productTable.innerHTML + ` <tr>
    <td>${p.name}</td>
    <td>${p.price}</td>
    <td>${p.description}</td>
    <td>${p.category}</td>
</tr>`
    })
}

