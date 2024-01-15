
var numbers = ["Ananta","Ram",3,4]
var root = document.getElementById("root");
root.innerHTML = "<h1 id='heading'>Welcome to JS</h1><button id='btn'>Change color</button>";

var btn = document.getElementById("btn");
btn.addEventListener("click",handleClick);
for(i=0;i<4;i++)
{
    root.innerHTML = root.innerHTML + `<p>${numbers[i]}</p>`
    
}

function handleClick()
{
    var heading = document.getElementById("heading");
    heading.style = "color:gray";
    btn.style = "background-color : red";
    console.log("btn clicked")
}



