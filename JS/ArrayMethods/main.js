
console.log("welcome to JS")

var numbers = [20,55,45,56,25];

// size of array
console.log("length of array "+ numbers.length)

// adding elements at the end of array
numbers = numbers.concat()

// 
console.log(numbers.entries())

// find index of value in array
console.log(numbers.indexOf(450))

// function condition(n)
// {
//       if(n == 40)
//       {
//         return true;
//       }
//       else{
//         return false;
//       }
// }

// finding an element in array
console.log(numbers.find(n=> n == 20));


console.log(numbers.findIndex(n=> n == 20));

console.log(numbers.filter(n=> n > 40 && n <50));


console.log(numbers.fill(20,3));

console.log(numbers.map((n)=>{
   if(n > 50)
   {
     return 0;
   }
   else{
     return n;
   }
}));

console.log(numbers.includes(20,5));

console.log(numbers.push(200));
console.log(numbers.push(400));

console.log(numbers.pop());
console.log(numbers.pop(55));








console.log(numbers)


const user = {
  id : 1,
  name :"Ananta",
  address:{
    city:"Pune",
    pincode : 421011
  }
}


console.log(Object.entries(user))
console.log(Object.keys(user))
console.log(Object.values(user))
