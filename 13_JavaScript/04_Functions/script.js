//function is a block of code

// with parameter and without return type
function sum1(a,b) {
    console.log(a+b);
}

// with parameter and with return type
function sum2(a,b){
    return a+b;
}

// arrow function

let sum3 = (a,b) => {
    return a+b;
}

sum1(2,4);
console.log(sum2(4,4));
console.log(sum3(3,6));