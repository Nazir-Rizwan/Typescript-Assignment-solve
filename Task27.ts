// import {alien_color} from './Task25';
let alien_color="red";

if(alien_color==="green"){
    //  change color 
    console.log( "\u001b[1;32m Player just earn 5 points" );
    
    
}
else if(alien_color==="red")
{
    console.log( "\u001b[1;31m Player just earn 15 points " );

}

else if(alien_color==="yellow"){
    console.log( "\u001b[1;33m Player just earn 10 points" );
    
}
else{

}
//  default Foreground color

console.log( "\u001b[0m " );