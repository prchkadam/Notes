// Conditional Statements are used to implement decision making in the code


/* If statement
if (condition) {
    
}
*/

let mode = "Dark";
let colour;
if(mode === "Dark"){
    colour = "Black";
}
if(mode === "Light"){
    colour = "White";
}
console.log(colour);
console.log("\n");


/* If else statement
if (condition) {
    
} else {
    
}
*/
let age = 25;
if(age >= 18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}
console.log("\n");


// If a number is even or odd
let num = 35;
if(num % 2 === 0){
   console.log(`${num} is even`); 
   // we could use console.log(num, " is even");
   // but this will give result with ''
   // result --> 35 'is odd'
   // here we are using ` and not '
}
else{
    console.log(num + " is odd");
}
console.log("\n");



/* else if statement
if (condition) {
    
} else if (condition) {
    
}
*/
// we can skipt to use else at the end too


/* Ternary operator 
   It is a simpler and compact if else statement, it takes three operands 
   condition ? true output : false output
   */

let price = 20;
price > 40 ? console.log("Expensive") : console.log("Cheap");
console.log("\n");


/* Switch Statement
switch (key) {
    case value:
        
        break;

    default:
        break;
}
        */

const expr = "Oranges"
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

console.log("Is there anything else you'd like?");