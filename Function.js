// used in js to organize code.
// it does separation of logic
//it is blackbox which takes ip and anylze it and gives output
// need of functions : to reduce repetative actions


const hello =()=>{
    console.log("hey how are you")
    return "hi"
}

function onePlusAvg(x,y){
    console.log('Done')
    return Math.round (1 + (x+y)/2)
}

const sum = (p,q) => {
    return p+q
}

let a = 1;
let b = 2;
let c = 3;

hello();
console.log(" one plus Average of a and b is",onePlusAvg(a,b))
console.log("one plus Average of a and b is",onePlusAvg(b,c))
console.log("one plus Average of a and b is",onePlusAvg(c,a))
console.log(sum(9,7))