
var products =[
    {
        id:1,
        name : "iPhone",
        price : 45000,
        category : "Electronics",
        discount : 10
    },
    {
        id:2,
        name : "One Plus",
        price : 45000,
        category : "Electronics",
        discount : 10
    },
    {
        id:2,
        name : "One Plus",
        price : 45000,
        category : "Electronics",
        discount : 10
    }
]

var categories = [
    {
    id : 1,
    name:"electronics"
    },
    {
    id : 2,
    name:"Cloths"
    }
]


 

const createHeader = (keys) =>{
    var result = "";
       for(var i=0;i<keys.length;i++)
       {
        result = result + `<th>${keys[i]}</th>`
       }    
   return `<tr>${result} </tr>`;
}

const createDataRow = (product,keys) => {
    var result = ""    
    for(var i=0;i<keys.length;i++) {
        result = result +`<td>${product[keys[i]]}</td>`
    }
    return `<tr>${result}</tr>`   
}


const getDataRows = (data)=>{
    var keys = Object.keys(data[0]);
    var result = createHeader(keys);
    data.map(p=>{result = result+createDataRow(p,keys)});
    return result;
}



var dataTable =  document.getElementById("data-table")
dataTable.innerHTML = getDataRows(categories);
