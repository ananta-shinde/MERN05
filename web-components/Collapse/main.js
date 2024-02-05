
var firstBtn = document.getElementById("first-btn")
var secondBtn = document.getElementById("second-btn")
var toggleBtn = document.getElementById("toggle-btn")
var firstPara = document.getElementById("first-para")


function btnShowClick(){
    firstPara.setAttribute("class","py-4 d-block")
}
function btnHideClick(){
    firstPara.setAttribute("class","py-4 d-none")
}

// function toggleClick()
// {
//     if(toggleBtn.getAttribute("show") == "1"){
//         firstPara.setAttribute("class","py-4 d-block")
//         toggleBtn.setAttribute("show","0");
//     }
//     else
//     {
//         firstPara.setAttribute("class","py-4 d-none")
//         toggleBtn.setAttribute("show","1");
//     }
    
   
// }
function toggleClick()
{
    if( firstPara.getAttribute("class").includes("d-block")){
        firstPara.setAttribute("class","py-4 d-none") 
    }
    else
    {
        firstPara.setAttribute("class","py-4 d-block") 
    }
    
   
}
