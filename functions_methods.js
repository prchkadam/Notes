// Function are a block of code designed to perform a particular task, can be invoked whenever needed
// It prevents redundancy

/* Function definition
function functionName(){
    //do some work;
}

function functionName(parameter1 , parameter2){
    //do some work;
}
*/

/*  Function Call
functionName();
*/


function myFun() {
    console.log("Hello World!");
    console.log("This is an example of function");
}

myFun();
console.log("\n");


function myFunction(msg){ //parameter --> input
    console.log(msg);
}

let sample = "This is a new world!";
myFunction(sample);
myFunction("This is also a way to call a function"); // argument
console.log("\n");

// The value which we pass in function defination is called parameter and the one which we pass in calling is called argument
// Function parameters are like local variable, they are block scoped 


// Return property
function sum(num1 , num2){
    summation = num1 + num2;
    console.log("Before return");
    return summation;
    console.log("After return"); // code after return statement never gets executed 
}

let num1 = 15;
let num2 = 19;
let val = sum(num1 , num2);
console.log(val);
console.log("\n");


/* Arrow function = Compact way of writing a function. It is a form of modern JavaScript

    const functionName = ( param1, param2 ...) => {
    // do some work;
    }

    this is arrow function [( param1, param2 ...)=> {// do some work;}]
    and wwe are storing the fun in some variable
*/

// Example 1
const arrowSum = (val1 , val2) => {
    console.log(val1 + val2);
}
arrowSum(5 , 7);
console.log("\n");

// Example 2
const arrowMul = (val1 , val2) => {
    return val1 * val2;
}
let mul = arrowMul(5 , 4);
console.log(mul);
console.log("\n");

const printHello = () => console.log("Print Hello!");
printHello();
console.log("\n");

/* forEach loop in arrays 
arr.forEach( callBackFunction )

CallbackFunction : Here, it is a function to execute for each element in the array

A callback is a function passed as an argument to another function.

arr.forEach( 
    (val) => {
    console.log(val);} 
    )
*/

let arr = ["mumbai", "delhi", "pune", "chennai", "goa"]
arr.forEach(function converToUpperCase(val){
    new_val = val.toUpperCase();
    console.log(new_val);
})
console.log("\n");

arr.forEach((val) => {
    console.log(val);
})

// We can use three parameter, those are value, index, parameter itself
arr.forEach((val, inx, arr) => {
    console.log(val, inx, arr);
})
console.log("\n");


// Higher order function/methods => one which uses function as a parameter or returns a function


/* Map = Creates a new array with the results of some operation. The value its callback returns are used to form new array
arr.map( callbackFnx( value, index, array ) )
*/
let arr1 = [12, 46, 65, 83];
let new_arr1 = arr1.map((val) => {
    return val * val;
})
console.log(new_arr1);
console.log(arr1);console.log("\n");
// This is not changing the original array


// For each is used to apply operation on each element of array, whereare map is used to create a new array after doing operations


/* Filter = Creates a new array of elements that give true for a condition/filter.
arr.filter( callbackFnx ())
*/  
let arr2 = [12, 46, 65, 83];
let new_arr2 = arr2.filter((val) => {
    return (val % 2 !== 0 && val > 70);

})
console.log(new_arr2);
console.log(arr2);
// This is not changing the original array


/* Reduce = Performs some operations & reduces the array to a single value. It returns that single value.
arr.reduce( callbackFnx (previous , current ))
*/
// It kinda acts like a loop; it starts with prev as first element and current as 2nd then operation gets performed and the value is stored in prev later the next elements is used as current and again same operations are performed...
let arr3 = [87, 65, 84, 67, 15, 94];
const max = (prev, curr) =>{
    return prev > curr? prev : curr;
};
let new_arr3 = arr3.reduce(max);
console.log(new_arr3);
console.log("\n");

