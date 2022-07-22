// there are 7 primitive data types in JS
// these are built in dataypes in JS
// what is data type : this will tell you in which variablw what kind of data should be stored
// N N S S B B U -- > null,number,string,symbol,boolean,bigint,undefined

//OBJECT : key value pair

// Primitive
let a = null;
let b = 234;
let c = true;
let d = BigInt("456")+BigInt("5")
let e = "Harry"
let f = Symbol("I am nice symbol")
let g = undefined;
console.log(a,b,c,d,e,f,g)
console.log(typeof d)


//NON Primitive : objects : key value pair

const item ={
    "prat":  true,
    "shubh": false,
    "sid":    44,
    "rohan":  undefined
}
console.log(item["rohan"])