
var data = document.getElementsByTagName("input")
var buttons = document.getElementsByTagName("button");

function printformData()
{
    console.log(data[0].value);
    console.log(data[1].value);
    console.log(data[2].value);
}

buttons[0].addEventListener("click",printformData);

 



