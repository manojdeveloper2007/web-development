alert("Welcome to the world");
confirm("Are you ready to go into the webpage ? ");

let name = prompt("Enter Your Name : ");
let age = prompt("Enter your Age : ");

if(age>=18) {
    console.log("you are eligible to vote");
    if(name){
        console.log("Welcome to office ",name);
    }
}

else {
    console.log("you are not eligible to vote");
}

document.title = "Conditional Statements"