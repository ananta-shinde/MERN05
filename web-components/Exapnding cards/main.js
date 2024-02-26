
var panels = document.querySelectorAll(".panel")

// panels[1].addEventListener("click",()=>{
//     panels[1].classList = "panel active"
// })
// panels[2].addEventListener("click",()=>{
//     panels[2].classList = "panel active"
// })

const removeActive = (panel) =>{
     panel.setAttribute("class","panel");
}

panels.forEach(panel=>{
    panel.addEventListener("click",()=>{
        panel.classList.add("active")
    })
})



