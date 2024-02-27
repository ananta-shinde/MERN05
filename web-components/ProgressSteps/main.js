
var steps = document.querySelectorAll(".circle")
var prevBtn = document.getElementById("prev")
var nextBtn = document.getElementById("next")
var currentStep = 1;
function onNext()
{

    if(currentStep < 5)
    {
        currentStep++;
    }
    if(currentStep == 4){
        nextBtn.setAttribute("disabled","true")
    }
    prevBtn.removeAttribute("disabled")
    steps.forEach(s=>{
        if(currentStep == s.innerHTML)
        s.classList.add("active");
    })
     
}
function onPrev()
{
    steps.forEach(s=>{
        if(currentStep == s.innerHTML)
        s.classList.remove("active");
    })
    if(currentStep <= 4){
        nextBtn.removeAttribute("disabled")
    }
    currentStep--;
}