// Practice Question

// Q1. Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.
function numOfVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            count ++;
        }
    }
    console.log(`The number of vowels in ${str} is ${count}`);
}
numOfVowels("We are welcoming you");
console.log("\n");


// Q2. Create an arrow function to perform the same task.
const arrowNumOfVowels = (str) => {
    let count = 0;
    for (const char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count ++;
        }
    }
    console.log(`The number of vowels in ${str} is ${count}`);
}
arrowNumOfVowels("aeiou");
console.log("\n");


// Q3. For a given array of numbers, print the square of each value using the forEach loop.
/* let arr = [1, 2, 3, 4];
arr.forEach((val) =>{
    new_val = val*val;
    console.log(new_val);
})
*/

//Another method
let arr = [1, 2, 3, 4, 10];
const calSquare = (val) =>{
    new_val = val*val;
    console.log(new_val);
}
arr.forEach(calSquare);
console.log("\n");


// Q4. We are given array of marks of students. Filter our of the marks of students that scored 90+.
let marks = [97, 95, 84, 67, 15, 94];
let filtered_arr = marks.filter((val) => {
    return val > 90;
})
console.log(filtered_arr);
console.log("\n");


// Q5.  Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.
let n = prompt("Enter the requried number of elements in array");
let array = [];
for(let i = 0 ; i < n ; i++){
    array[i] = i + 1;
}
console.log(`The new array created is ${array}`);

let reduce_arr = array.reduce((prev , curr) => {
    return prev + curr;
})
console.log(reduce_arr);

let mul_arr = array.reduce((prev , curr) => {
    return prev * curr;
})
console.log(mul_arr);