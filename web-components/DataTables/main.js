
var employee = "Ananta" // string
employee = 22; // Number
var temp = {}; // Object : JSON
var temp = []; // Object : Array
var isloggedIn = true; // boolean
const marks = ["22",23,"ture",[1,2,5]];
console.log(typeof(marks[0]));
console.log(typeof(marks[1]));

employee = {
   name :"Ananta",
   city:"Pune",
   pincodes:["431001","431006"]
}

console.log(employee["city"])
console.log(employee.name);
console.log(employee.pincodes[0]);

products = [
    {
        "id" : 1,
        "name": "p1",
        "price":2500,
        "categories":["men","electronics"]
    }, 
    {
        "id" : 2,
        "name": "p2",
        "price":6500,
        "categories":[]
    }, 
    {
        "id" : 3,
        "name": "p3",
        "price":4500,
        "categories":[]
    }, 
    {
        "id" : 4,
        "name": "p4",
        "price":6500,
        "categories":[]
    }, 
    {
        "id" : 5,
        "name": "p5",
        "price":6500,
        "categories":[]
    }, 
]

console.log(products[2].price)
console.log(products[0].categories[1])

var response = {
    status:200,
    products:[
        {
            "id" : 4,
            "name": "p4",
            "price":6500
        }
    ]
}

console.log(response.products[0])

for(var i=0;i<products.length;i++)
{
    console.log(products[i].name +" "+ products[i].price)
    for(var j=0;j<products[i].categories.length;j++)
    {
        console.log(products[i].categories[j])
    }
    
}




 
 
