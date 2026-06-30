console.log("Hello World"); //print into the console

let a = 12;
let name = "Manoj";
let isAlive = true;
let bigInt = 120000;
let b;
const PI = 3.14;
var c = null;

console.log(a,name,isAlive,bigInt,PI,c);

// typeof used to display what kind of data type
console.log(typeof a,typeof name,typeof isAlive,typeof bigInt,typeof b,typeof PI,typeof c);


/* 
    primitive data types : 
            number,null,undefined,null,boolean,string,bigint

    non primitive data types
            objects
*/

// objects => key value pair

let details = {
    "Name":"Manoj",
    "Age":19,
    "IsAdult":true
};

console.log(details);

//access particular key

console.log(details.Name)