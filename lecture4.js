// Practise Questions

// Q1. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.

let sum = 0;
let marks = [85, 97, 44, 37, 76, 60];
for(let m of marks){
    sum = sum + m;
}
let avg = sum / marks.length;
console.log(`Average marks of entire class is ${avg}`);
console.log("\n");


// Q2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];
let i = 0;
for(let val of items){
    // items[i] = items[i] - (items[i] * 0.1);
    items[i] = val - (val * 0.1);
    i++ ;
}
console.log(items);
console.log("\n");


// Q3.  Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

let a = companies.shift();
console.log(companies);
let b = companies.splice(1 , 1 , "Ola");
console.log(companies);
let c = companies.push("Amazon");
console.log(companies);