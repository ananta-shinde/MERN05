
var mainMenus = document.querySelectorAll(".main-menu")

mainMenus.forEach(menu=>{
    menu.addEventListener("click",()=>{
        menu.classList.toggle("active")
        if(menu.classList.contains("active")){
            menu.children[1].classList = "bi bi-chevron-down"
        }else{
            menu.children[1].classList = "bi bi-chevron-right"
        }
        console.log(menu.children[2])
    })
})