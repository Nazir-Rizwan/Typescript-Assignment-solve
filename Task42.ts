import { magician_name } from "./Task41"
//  copy array 
//let magicianname:string []=[...magician_name]
let greeting:any[];

function make_greet(greet_name:string[]){
     greeting = greet_name.map((value)=>(
        `Greet ${value}`
    ))
return greeting
}



console.log(make_greet(magician_name))

export {greeting}