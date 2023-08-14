//  original array 
let places:string[]= ["Karachi","Lahore","Islamabad","Swat","Kalam"];
//  form create a new array copies
//let e =Array.from(places);

//  sorted function 
function sortalphabet(location:string[],order:number):string[]{
   if(order===0){
    return [...location].sort() 

   }
else{
    return [...location].reverse();
}
    }
    

 
// without sorting alphabet
console.log(places)
//  with sort
  console.log(sortalphabet(places,0))
//   Show that your array is still in its original order by printing it.
 console.log(places)
//  reverse alphabet
let e=sortalphabet(places,1); 
console.log(e)
//  print original array 
console.log(places)

// 

console.log(Object.keys(e).reverse())
console.log(Object.keys(places))






