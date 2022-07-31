// for (let i=0; i<5; i++){
//     console.log(i)
// }

// 1st statement let i=0 : executes one time only before loop is starting so i =0

//for(let i=0; i<500; i++)
//it will execute till n-1
//Progra to add first n natural numbers

// let sum = 0
// let n =prompt("enter the value of n")
// n = Number.parseInt(n)
// for (let i=0; i<n; i++){
// sum += (i+1)
// console.log(i+1)

// }
// console.log("sum of first" + n +"natural number is" +sum)


//FORIN LOOP

// let obj ={
//     harry: 90,
//     shubh:45,
//     shivika: 56,
//     ritika: 57,
//     shiv: 23
// }
// for (let a in obj){
//     console.log("Marks of" + a + "are" + obj[a])
// }

// //FOROF LOOP
// for (let b of "Harry"){
//     console.log(b)
// }

//WHILE LOOP
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// let i =0;
// while(i<n){
//     console.log(i)
//     i++;
// }

//here condin evaluated and if its true it will get executed 

//DOWHILE LOOP
//variant of while
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
let i =10;
do{
    console.log(i)
    i++;
}while (i < n)
//difference is that here loop will get run anyways then it will check condition
//it will get executed minimum once
