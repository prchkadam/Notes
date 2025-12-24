// JavaScript is a programming language that is used to add interactive elements to websites.
// We use chrome console to run our javascript code.

// Use ctrl + l to clear the console.

// Console.log = Used to log(print) a message on the console
// We use "_" or '_' to write a message in it.
console.log("Divya Kadam");
25
console.log(25);
console.log('25');


// variable
// JavaScript is a dynammicalled typed language meaning we don't need to declare the type of variable
fullName = "Divya";
sgpa = 8.04;
age = 64;

console.log(fullName);
console.log(sgpa);

console.log(typeof fullName);
console.log(typeof sgpa);
console.log(typeof age);

age = 'sixty four';
console.log(age);

console.log(typeof age);


// null means the variable is assigned a value of null
x = null;
console.log(x);
console.log(typeof x);


// undefined means the variable is declared but not assigned a value
y = undefined;
console.log(y);
console.log(typeof y);


// boolean values are true or false
ifFollow = true;
console.log(ifFollow);
console.log(typeof ifFollow);

ifPassed = false;
console.log(ifPassed);
console.log(typeof ifPassed);


// assignment operator (=) is used to assign a value to a variable


// variable rules
// 1. Variable names should be meaningful
// 2. Variable names are case sensitive
// 3. Variable names should not start with a number, only letter, _ and $ should be 1st character
// 4. Variable names should not be reserved keywords
// 5. Variable names should not contain special characters, only _ and $ are allowed
fullName = "Divya";
fullname = "Kadam";
console.log(fullName);
console.log(fullname);

// _fullName;
// $fullName;
// fullName12;
// we can't just initiate variable and leave it, we have to compulsory declare it
// although we can initiate varible like this and leave it
let _fullName;
var $fullName;
// but const initialise must be declared
// const pi;

// console.log(fullnames);
// if a variable is not declared and we use it, it will show error

// console = "Divya";
// console.log(console);
// never use resevered keywords

// we use camel case to write variable names, it is a naming convention where the first word is in lowercase and the first letter of each subsequent word is in uppercase


// different naming conventions
//snake case = it is a naming convention where the first word is in lowercase and the first letter of each subsequent word is in lowercase with an underscore
// first_name
//kebaba case = it is a naming convention where the first word is in lowercase and the first letter of each subsequent word is in lowercase with a hyphen
// hello-world
//pascal case = it is a naming convention where the first word is in uppercase and the first letter of each subsequent word is in uppercase
// HelloWorld


// let and const and var
// let = variable cannot be re-declared but can be updated, a block scope variable
// const = variable cannot be re-declared or updated, a block scope variable
// var = variable can be re-declared & updated, a global scope variable
let studentName = "Divya";
const studentAge = 25;
var studentSgpa = 8.04;
var studentSgpa = 8.05;
var studentSgpa = 8.14;
studentSgpa = 8.24;
studentName = "Divya Kadam";
console.log(studentName);
console.log(studentAge);
console.log(studentSgpa);

// we don't use var as can be re-declared & updated, which can cause confusion later in thousands lines of code

// let can be updated but can't be redeclared like this 
// let studentName = "Divya Kadam";


// block scope, it is block in 
    { 
        let a = 5;
        console.log(a);
    }


// DATA TYPES
// Primitives = These are of 7 types

// Numbers 
let price = 5;
console.log(price);
console.log(typeof price);
// Strings
let item = "Cake";
console.log(item);
console.log(typeof item);
// Boolean
let isPassed = true;
console.log(isPassed);
console.log(typeof isPassed);
// Null
let p = null;
console.log(p);
console.log(typeof p);
// Undefined
let o;
console.log(o);
console.log(typeof o);
// BigInt
let z = BigInt(1234); // there ends with n
console.log(z);
console.log(typeof z);
// Symbol
let s = Symbol("Hello!");
console.log(s);
console.log(typeof s);

// Non-Primitives
// Object (Arrays, Functions)
// Ojects are collection of values
const student = {
    name: "Ram",
    age: 18,
    sgpa: 7.89,
    isPassed: true,
};
console.log(student);
console.log(typeof student);
console.log(student.name);
console.log(student["age"]);
// the data inside the block is called keys and the values are called values
// key : value,

// We can reinitialize the key in const variable in these ways
student.name = "Shyam";
console.log(student.name);
student["age"] = 20
console.log(student.age);


// Mathematical operators
let num1= 10;
let num2 = 20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let char1 = "Divya";
let char2 = "Kadam";
console.log(char1 + char2);
console.log(char1 + num1);