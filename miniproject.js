// Q2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value. If the player’s guess is higher than the actual number, the program displays “Lowernumber please”. Similarly, if the user’s guess is too low, the program prints “Higher number please”.When the user guesses the correct number, the program displays the number of guesses the player used to arrive at the number.
let randomNumber = Math.floor(Math.random() * 101) ;
let guessedNumber = prompt("Guess a number =");
let count = 0;
while(guessedNumber != randomNumber){
    if (guessedNumber > randomNumber){
        console.log("Lower number please");
    }
    else{
        console.log("Higher number please");
    }
    guessedNumber = prompt("Re-Guess a number =");
    count++ ;
}
console.log("You have entered correct number!");
console.log(`The number of guesses are ${count + 1}`);
