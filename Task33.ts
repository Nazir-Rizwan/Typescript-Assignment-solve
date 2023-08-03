let ordinal_number:number[]=[1,2,3,4,5,6,7,8,9,];
 let suffix:string[]=new Array(9).fill("th");


 console.log(ordinal_number.join("th\t"))
console.log("----------------------------")
//   by loop 
for(let i=0; i<ordinal_number.length;i++){

    if(ordinal_number[i]>0 && ordinal_number[i]<10)
    
    console.log(`${ordinal_number[i]}th`)
}

//  by join 







