//
let a = prompt("Hey whats your age?")
// console.log(typeof a)  //it will give string

// a = Number.parseInt(a) //converting string to number
// if(a>0){
//     alert("this is a valid age")
// }

// else{
//     alert("this is an invalid age");
// }


//here if will execute when condition is true
//out of if and else one will only one execute
//if we want to convert a into integers

//in abouve line since we are writing prompt it will ask question.

// alert will tell.

a = Number.parseInt(a);
if(a<0){
    alert("this is an invalid age");
}
else if(a<9){
    alert("you are kid and you cant think of it")
}
else if (a<18 && a>=9){
    alert("you are kid and you can drive")
}
else{
  alert("you can now drive as you are abouve 18")  
}
console.log("done")
console.log("you can", (a<18? "not drive" :"drive"))

//in abouve code we can have multiple else if but out of all only one will get executed.


// homework
//exlpore switch statent and make 1 pgm

//Ternary Operator: its shortcut method
//
