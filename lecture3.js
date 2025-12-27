// Practise Questions

// Q1. Print all even numbers from 0 to 10
for(let i = 0; i <= 10; i = i + 2){
    console.log(i);
}
console.log("\n");

// Q2. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length. 
// eg: user_name = “shradhakhapra” , username should be “@shradhakhapra13”
let fullName =prompt("Enter your full name without spaces");
let length = fullName.length;
let username = "@" + fullName.concat(length) ;
console.log(username);