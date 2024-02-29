

var actions = document.querySelectorAll(".faq-toggle")

actions.forEach(toggle=>{
    toggle.addEventListener("click",()=>{
        toggle.parentNode.classList.toggle("active");
    })
})