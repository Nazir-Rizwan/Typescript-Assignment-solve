let str1:string="typescript";
// let str2:string="TYPESCRIPT";
let str2:string="typescript";
// equality +inequality
console.log(str1===str2)
console.log(str1!=str2?true :false)

//  lower case function
console.log(str1.toUpperCase()===str2.toLowerCase())

//  work with numbers and Logical operator 
 let  mark:number=90;

console.log(mark>=90?"A+": "Decide Later")
//  
console.log(mark>=85 && mark==90?"A+": "B")

let vhicle:string="car"
console.log(vhicle==="car"||vhicle==="cycle"?true:false)

const arr:Array<Number>=[1,2,3,4]

console.log(arr.includes(4,3)?"find":"Not found");

console.log(arr.includes(5)?"find":"Not found");


