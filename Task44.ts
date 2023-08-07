let sandwitch:string[]=["egg sandwitch","chicken sandwitch","seafood sandwitch"];

const sandwitchlist=function(...list:string[]):string[]{
    return list.sort();
}

console.log(`${sandwitchlist(...sandwitch)} `);
console.log(sandwitchlist("seafood sandwitch","roast beef sandwitch","ham sandwitch"))
console.log(sandwitchlist("Nutella Sandwich","Grilled Chicken Sandwich"))

