// Opearators are used to perform operations on variables and values

/* Arithematic Operators + - * / 
   1. Modulus 
   2. Exponentiation 
*/

let a = 5;
let b = 2;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
// a and b are opearands and +,-,*,/ are operators

console.log("a % b = ", a % b); // This will print the remainder of the division
console.log("a ** b = ", a ** b); // This will print the power of the division a^b
console.log("\n");
/* Unary operators
   1. Increment
   2. Decrement
*/

let c = 5;
console.log("c++ = ", c++); // post increment
console.log("c = ", c);

c = 5;
console.log( "c + 1 = ", c + 1);
console.log("\n");

c = 5;
console.log("++c = ", ++c); // pre increment
console.log("\n");

c = 5;
console.log("c-- = ", c--); // post decrement
console.log("c = ", c)

c = 5;
console.log("c - 1 = ", c - 1); 
console.log("\n");

c = 5;
console.log("--c = ", --c); // pre decrement
console.log("\n");

/* Assignment Operators */
let d = 5; 
// we have assigned the value of 5 to be, i.e value from right gets assigned to the left.

d += 1; // d = d + 1
console.log("d = ", d);

d = 5;
d -= 1; // d = d - 1
console.log("d = ", d);

d = 5;
d *= 2; // d = d * 2
console.log("d = ", d);

d = 5;
d /= 2; // d = d / 2
console.log("d = ", d);

d = 5;
d %= 2; // d = d % 2
console.log("d = ", d);

d = 5;
d **= 2; // d = d ** 2
console.log("d = ", d);
console.log("\n");

/* Comparison Operators
   1. Equal to ==
   2. Not equal to !=
   3. Equal to and type ===
   4. Not equal to and type !== 
   5. >, >=, <, <=
*/
// These operators will return true or false.
let e = 5;
let f = 2;
console.log("e == f = ", e == f);
console.log("e != f = ", e != f);
console.log("e === f = ", e === f); // this will first compare the numeric value then the type.
console.log("e !== f = ", e !== f);
console.log("\n");

e = 5;
f = "5"; // js will implicitely convert the string to number
console.log("e == f = ", e == f); // this will just compare the numeric value --> true
console.log("e === f = ", e === f); // this gives false, as type of data is different. --> false
console.log("e !== f = ", e !== f);
console.log("\n");

console.log("5 < 7 = ", 5 < 7);
console.log("5 > 7 = ", 5 > 7);
console.log("5 <= 7 = ", 5 <= 7);
console.log("5 >= 7 = ", 5 >= 7);
console.log("\n");


/*Logical Operators
   1. AND &&
   2. OR || (pipe symbol)
   3. NOT !
*/
// These operators will return true or false.
let cond1 = 5 < 7; // true
let cond2 = 5 > 7; // false
console.log("cond1 && cond2 = ", cond1 && cond2); // both conditions should be true
console.log("cond1 || cond2 = ", cond1 || cond2); // at least one condition should be true
console.log("!cond1 = ", !cond1); // opposite of the condition