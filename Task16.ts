let friend_new:string[] =["Mohsin","Bilal","Ali"];
//  first index add
//  exercise 15 array 
console.log(friend_new);

friend_new.splice(0,0,"nazir")
friend_new.splice(2,0,"rizwan")
friend_new.push("imran")
for(let i=0;i<friend_new.length;i++)
{
    console.log(`i invited to ${friend_new[i]} dinner `)
}

console.log("Biger Dinner Table total people \t"+friend_new.length)

