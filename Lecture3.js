// in javascript there are two types of data types.
// 1. Primitive data type :> mem allocation in stack :> 1.numbers 2.strings 3.boolean 4.null 5.undefined 6.symbol

//Strings :
let name = "sid";
console.log("my string is "+ name); //here op will be my string is sid 
console.log("data type is " + (typeof name) ); //typeof will give datatype


//Numbers : 
let marks = 34.4 ;  //it will give num only
console.log("Data type is " +(typeof marks)); //typeof will give datatype which is number

//Boolean:
let isDriver = true;
console.log("Data type is " + (typeof isDriver))

//Null
let nullvar = null;
console.log("Data type is " + (typeof nullvar));      //it will give data type as object and if it is giving object it is ref data type 


//undefined
let undef = undefined;
console.log("Data type is " +  (typeof undef))

//Reference data type 

myarr = [1,2,3,4,true,"string"];
console.log("Data type is " +  (typeof myarr))                    //data type of ref will be object even it contains true and string


//object literals

let stMark ={
    harry :89,
    Shubham : 36,
    RohanDas: 34
}
console.log(typeof stMark) // it will give type as object


function findName() {
    
}

console.log(typeof findName) // it will give function 

let date = new Date();
console.log(typeof date);











// 2. Reference data type :> mem allocation in heap :> 1.array 2.objetcs 3. function 4.dates
// 