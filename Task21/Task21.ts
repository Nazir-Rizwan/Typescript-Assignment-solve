//  generic array type Array<elementtype>
// let mountain:Array<string>=["Nanga Parbat","Broad Peak","Kanjut Sar"];
// let rivers:Array<string>=["Chenab","Ravi","Jehlum"];
// let language:Array<string>=["Chinese","Spanish","Urdu"];
// let countries:Array<string>=["Saudia Arabia","Dubai","Pakistan"];
// //  similar to array declare in javascript
// let city:string[]=["Lahore","Sahiwal","Pakpattan"];

type objtype={
    name1:string,
    name2:string,
    name3:string
}

const listarray:Array<objtype>=[
//  first assign to mountain
    {
    name1:"Nanga Parbat",name2:"Broad Peak",name3:"Kanjut Sar"
},
//  second assign to rivers 
{
    name1:"Chenab",name2:"Ravi",name3:"Jehlum"
},
//  third
{
    name1:"Chinese",name2:"Spanish",name3:"Urdu"
},
{

    name1:"Saudia Arabia",name2:"Dubai",name3:"Pakistan"   
}
,{
    name1:"Lahore",name2:"Sahiwal",name3:"Pakpattan"
}




]

console.log(listarray)
//  acess any objects 
console.log(listarray[2])

