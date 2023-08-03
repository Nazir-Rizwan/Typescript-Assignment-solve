const pizza_names:Array<string>=["Greek Pizza","Detroit Pizza","Neapolitan Pizza"] 
//  print names of pizza list
pizza_names.map((value)=>(console.log(value)))

const pizza_list= pizza_names.map((value)=>(value=="Greek Pizza" ?`i like ${value}` :value))
console.log(pizza_list);

console.log("🍕 How Much you Like pizza 🍕 ")
console.log("You like Greek pizza 🍕 ")
console.log("I really love pizza 🍕❤️")