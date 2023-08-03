let places:string[]=["Lahore","Islamabad","Karachi","Swat","Kart"];
//  form create a new array copies
//let e =Array.from(places);
let e=[...places];

console.log(places)
console.log(e.sort())
console.log(places)
console.log(e.reverse())
console.log(e.reverse().sort())


const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){  
return a-b});
