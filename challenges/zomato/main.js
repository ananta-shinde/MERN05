
var cities = ["Agra","Pune","Mumbai","Nagpur","Indore"]


var root = document.getElementById("root");

 
// function createSturture(city)
// {
//     console.log("city name:"+ city);
// }

// for(var i=0;i<cities.length;i++)
// {
//     createSturture(cities[i]);
// }

var result ="";
const createSturture = (city)=>( result = result+`<a href="restaurants.html"><div class="col-4 p-4 card">${city} Restaurant</div></a>`)
cities.map(createSturture)
 root.innerHTML = `<div class="container">
                    <div class="row">
                    ${result }
                    </div></div>` 



 