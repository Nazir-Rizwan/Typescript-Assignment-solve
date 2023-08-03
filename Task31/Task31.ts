const all_users:Array<string>=["guest","administrator","user","root","admin"]

// console.log(all_users.splice(0, all_users.length))
// console.log(all_users)
if(!all_users.length){
    console.log("We Need to find some user")
    }

    else{

//  pop method
let i=all_users.length;
while(i>0){
    all_users.pop();
    i--;
    
}
 }

//  remove all usernames from the array and print message 
    console.log("Your username not exist in aarray"+all_users)

    // if(all_users.length===0){
// console.log("We Need to find some user")
// }
