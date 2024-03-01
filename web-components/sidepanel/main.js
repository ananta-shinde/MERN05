
var menubtn = document.getElementById("menubtn");
var cancelbtn = document.getElementById("cancelBtn");
var sideNav = document.querySelector(".side-nav");
menubtn.addEventListener("click",()=>{
     sideNav.classList.add("show");
})

cancelbtn.addEventListener("click",()=>{
    sideNav.classList.remove("show")
})