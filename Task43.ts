const greet:string[]=Array(3)
greet.fill("greet")
const m_names:string[]= ["Merlin","Teller","Ricky"]
function show_magicians(){

   const addtwo= m_names.map((value,index)=>(
        `${value}  ${greet[index]}  `
    ))
    return addtwo
}

console.log(show_magicians())


