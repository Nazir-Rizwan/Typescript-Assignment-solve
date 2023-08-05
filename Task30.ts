const usernames:Array<string>=["guest","administrator","user","root","admin"]


//  for of loops return values  => for in loops return indexes
for(const i of usernames)
{
if(i==="admin")
{
console.log(`Hello ${i}, would you like to see a status report?`)
break;
}
else{
    continue; // not print this message
    console.log(`Hello ${i}, thank you for logging in again.`)

}
}