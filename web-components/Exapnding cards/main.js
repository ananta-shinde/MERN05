
var panels = document.querySelectorAll(".panel")

// panels[1].addEventListener("click",()=>{
//     panels[1].classList = "panel active"
// })
// panels[2].addEventListener("click",()=>{
//     panels[2].classList = "panel active"
// })

const removeActiveClass = (panel) =>{
     panels.forEach(panel=>{
        panel.classList.remove("active")
     })
}

panels.forEach(panel=>{
    panel.addEventListener("click",()=>{
        removeActiveClass();
        panel.classList.add("active")
    })
})



