
// single object : entity
var user = {
    id:1,
    name1:"Ananta",
    email:"demo@example.com"
}

// array of object : collection entities
var users = [
    {
        id:1,
        name:"Ananta",
        email:"demo@example.com",
        city:"Pune"
    },
    {
        id:2,
        name:"Demo",
        email:"demo@example.com",
        city : "Pune"
    },
    {
        id:3,
        name:"Ram",
        email:"ram@example.com",
        city : "Goa"
    }
]

var predicate = "Demo";
for(var i=0;i<users.length;i++)
{
    if(users[i].name != predicate)
    {
        console.log(users[i])
    }
   
}
predicate = "Pune"
for(var i=0;i<users.length;i++)
{
    if(users[i].city != predicate)
    {
        console.log(users[i])
    }
   
}

 
function filterUsers(key,value)
{
    console.log("executed");
    for(var i=0;i<users.length;i++)
    {
        if(users[i][key] == value)
        {
            console.log(users[i])
        }
    
    }
}

filterUsers("name","Ananta");








 
 
