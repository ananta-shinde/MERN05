var hambergerBtn = document.getElementById("hambergerBtn")
var menuContainer = document.getElementById("menu-container")
var cancelBtn = document.getElementById("cancel-btn");
const handleMenuClick = ()=>{
       menuContainer.style.display = "block"
}
const handleCancelClick = ()=>{
       menuContainer.style.display = "none"
}
hambergerBtn.addEventListener("click",handleMenuClick)
cancelBtn.addEventListener("click",handleCancelClick)