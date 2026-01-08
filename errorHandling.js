/* 
try-catch

try {
} catch (error) {
}
*/

let a = 10;
let b = 15;
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`a + b = ${a + b}`);
console.log("\n");

// console.log(`a + b = ${a + c}`);
// In this above line we have an error, and the complier won't load further lines.

try {
    console.log(`a - b = ${a - b}`);
} catch (err) {
    console.log("Error");
} // This is perfect code so it won, error
console.log("\n");


try {
    console.log(`a + b = ${a + c}`);
} catch (err) {
    console.log("Error");
} // It will show the error
console.log("\n");


try {
    console.log(`a - b = ${a - b}`);
    console.log(`a + b = ${a + c}`);
} catch (err) {
    console.log("Error");
} // This is executing the first line of code but as 2nd line has error it catches it.
console.log("\n");


console.log(`a * b = ${a * b}`);
console.log(`a / b = ${a / b}`);
