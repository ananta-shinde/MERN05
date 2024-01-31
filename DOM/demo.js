
// selectors in dom

var data = ["para 1","para 2","para 3","para 4","Ananta"];
var color_data = ["red","green","blue","yellow","gray"];

var hero = document.getElementById("hero");

var services = document.getElementById("services");

for(i=0;i<data.length;i++)
{
    var div = document.createElement("div");
    var para = document.createElement("p");
    para.innerHTML = data[i]
    para.classList = "text-success"
    para.setAttribute("style",`color:${color_data[i]}`);
    // para.style = "color : red"
    div.appendChild(para)
    services.appendChild(div)
}

 
 
// services.innerHTML = `<div><p>Para 1</p></div>
// <div><p>Para 2</p></div>
// <div><p>Para 3</p></div>`
