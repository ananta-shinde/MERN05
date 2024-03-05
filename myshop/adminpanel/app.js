
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
    if(e.target.id == "add-product"){
       
        addProductForm.style.display = "block"
        addCategoryForm.style.display = "none"
        addBrandForm.style.display = "none"
    }
    if(e.target.id == "add-category"){
       
        addCategoryForm.style.display = "block"
        addBrandForm.style.display = "none"
        addProductForm.style.display = "none"
    }
    if(e.target.id == "add-brand"){
        
        addBrandForm.style.display = "block"
        addCategoryForm.style.display = "none"
        addProductForm.style.display = "none"
    }
    
}

