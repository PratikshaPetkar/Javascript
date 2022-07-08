console.log('bye')

//Varaiables in js: used to store data
// keywords used to create variables.
// VAR, LET, CONST

var name = 'Pratiksha';
var channel;                                      // we can only define variable and also initalized
var marks =  34;                                     // channel ='codewithharry'
   marks = 0;                                         //we can also assign value 
                                                       // we can change value of variable 
console.log (name, channel, marks) 

//Rules for creating Varaible 

/* 1. cannot start with numbers
 2. can start with letter,number, _ or $ (but recommended to not use _ and $ while creating var this are used as private var in object oriented JS)
3. var names are case senssitive 
*/


var city = 'pune'
console.log(city)


const ownersName = 'Hari Ram';    // we cannot change the value of const once defined and use of this is where dont want to change the 
                                  // value
// ownersName = 'harry';      (cannot do this)       
console.log(ownersName)

const fruit = 88;                        // we have to assign value if we are using const to declare var it cant only initialize

// 1. scope for var is global and it is used in old JS 
// 2. scope for let is block level

{
    let city = 'rampur'
    city = 'kolkata'
    console.log(city);             // op is rampur coz let is block level so it will print rapur
}
console.log(city);                   //op is pune as var is golbal level


const arr1 =[14,55,13,89.88];
// arr1 = [12,15,46]                    // we cant redeclare array
// arr1.push(45);
console.log(arr1);



/* MOST COMMON PROGRAMMING CASE TYPES 

1. camelCase  
2. kebab-case 
3. snake_case
4. PascalCase

WE ARE GOING TO USE camelCase only 

second commit

*/
 