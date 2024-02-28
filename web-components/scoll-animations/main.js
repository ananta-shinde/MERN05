
console.log(window.innerHeight)
var boxes = document.querySelectorAll(".box");

const loadContent = () =>{
boxes.forEach(box=>{
        var boxTop = box.getBoundingClientRect().top;
        console.log(boxTop)
        if(boxTop < window.innerHeight){
            box.classList.add("active")
        }else{
            box.classList.remove("active")
        }
    })
}
     

document.addEventListener("scroll",loadContent);
