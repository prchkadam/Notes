// Practise Questions

// Q1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.
let num = prompt("Enter a number: ");

if(num % 5 === 0){
    console.log(`The number ${num} is multiple of 5`);
}
else{
    console.log(`The number ${num} is not multiple of 5`);
}


// Q2. Write a code which can give grades to students according to their scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let grade = prompt("Enter your score: ");
if( grade <=100 && grade >= 90){
    console.log("A");
}
else if(grade <= 89 && grade >= 70){
    console.log("B");
}
else if(grade <= 69 && grade >= 60){
    console.log("C");
}
else if(grade <= 59 && grade >= 40){
    console.log("D");
}
else{
    console.log("F");
}
