let magician_name:string []=["Merlin","Teller","Ricky"]

//  rest parameter 
let show_magicians=function(...magician:string[]){
for(var i=0;i<magician.length;i++)
{
console.log(magician[i])
}

}

show_magicians("Merlin","Teller","Ricky")