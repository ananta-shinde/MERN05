
var empDetails = 
[
    {LastName:"Thomson",dept:"Civil",firstName:"John"},
    {firstName:"Virat",LastName:"Thomson",dept:"Civil"},
    {firstName:"Rahul",LastName:"Thomson",dept:"Civil"},
    {firstName:"John",LastName:"Thomson",dept:"Civil"},
    
]
var productDetails = 
[
    {Name:"Mobile",price:"10000",discount:"10%"},
    {Name:"Mobile",price:"10000",discount:"10%"},
    {Name:"Mobile",price:"10000",discount:"10%"},
    {Name:"Mobile",price:"10000",discount:"10%"},
]

var empTable = document.getElementById("emp-table")

for(i=0;i<empDetails.length;i++)
{
    var tableRow = document.createElement("tr")
     
    var tableData = document.createElement("td")
    tableData.innerHTML = empDetails[i].firstName
    tableRow.appendChild(tableData)
    var tableData = document.createElement("td")
    tableData.innerHTML = empDetails[i].LastName
    tableRow.appendChild(tableData)
    var tableData = document.createElement("td")
    tableData.innerHTML = empDetails[i].dept
    tableRow.appendChild(tableData)
    empTable.appendChild(tableRow)
}


 

