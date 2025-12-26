// Practise Questions

// Q1. Print all even numbers from 0 to 10
for(let i = 0; i <= 10; i = i + 2){
    console.log(i);
}

// Q2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let randomNumber = Math.floor(Math.random() * 101) ;
console.log(randomNumber);
// let guessedNumber = prompt("Guess a number =");
// while(guessedNumber != randomNumber){
//     guessedNumber = prompt("Re-Guess a number =");
// }
// console.log("You have entered correct number!");

// Q3. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length. 
// eg: user name = “shradhakhapra” , username should be “@shradhakhapra13”
let fullName = "@" + prompt("Enter your full name without spaces");
let length = fullName.length;
let username = fullName.concat(length) ;
console.log(username);