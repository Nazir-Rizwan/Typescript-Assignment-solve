//  stage of life 


let person_age:number=24;


if(person_age<2)
{
    console.log("Person is Baby")
}
else if(person_age>=2 && person_age<4)
{
    console.log("person is a toddler.")
}
else if (person_age>=4 && person_age<13)
{
    console.log("person is a kid.")
}
else if(person_age>=13 && person_age<20)
{
    console.log("person is a teenager.")
}
else if(person_age>=20 && person_age<65)
{
    console.log("person is an adult.")
}

else {
    console.log("person is an elder.")
}