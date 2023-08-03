const current_users:Array<string>=["guest","administrator","user","root","admin"]

let new_users:string[]=[...current_users];
//  only 5 users copy 




console.log(new_users);
//  one user also add in list of current users
current_users.push("stduser")



for(let i=0; i<new_users.length; i++)
{
    
if(new_users[i]==="guest" && new_users[i]==="GUEST"||
new_users[i]==="administrator"&& new_users[i]==="ADMINISTRATOR"||
new_users[i]==="user" && new_users[i]==="USER"||
new_users[i]==="root" && new_users[i]==="ROOT"||
new_users[i]==="admin"&& new_users[i]==="ADMIN"
){

    console.log("username already exist enter new username")
    
}
else {
    console.log("username available")
}
}



//  other method 



for(let i=0; i<new_users.length; i++)
{
    
if(new_users[i].includes(new_users[i].toLowerCase())||new_users[i].includes(new_users[i].toUpperCase())){

    console.log("username already exist enter new username")
   
}
else {
    continue;
    console.log("username available")
}
}



