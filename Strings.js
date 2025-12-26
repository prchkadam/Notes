// Strings is a sequence of characters used to represent text.

// Initializing string
let str = "Hello World!";
let str1 = '        Hello World        ';
let str2 = `Welcome Us`;


// String length = spaces are also counted
console.log(str.length);
console.log(str1.length);


// String Indices
str[0], str[1];
console.log(str[11]); // here space is not an index, therefore even though length is 12 still ! comes at 11th position
console.log(str1[0]);


// Template literals = A way to have embedded expressions in strings.
let specialString = `This is an example of temple literals`;
console.log(specialString);

// Example
let object ={
    item : "Pen",
    price : 10,
};

// First way
console.log("The cost of", object.item, "is", object.price, "rupees");
// Second way
let output = `The cost of ${object.item} is ${object.price} rupees.` ;
console.log(output);


// String Interpolation = To create stings by doing substitution of placeholder
// `string text ${expression} string text`;
console.log(`The sum of 6 + 7 is = ${6+7}`);
console.log(typeof `The sum of 6 + 7 is = ${6+7}`);


// Escape character
console.log("This will create a \n new line");
console.log("This will create a \t tab space");
// The length of escape character is 1
let length = "\n"
console.log(length.length);


// string methods = these are built in functions to manipulate a string
// Strings are immutable(unchangeable) in JavaScript, i.e using method won't change the original string, to save the change we have to save it in new variable(i.e returns new strings)
/*
  1. str.toUpperCase( )
  2. str.toLowerCase( )
  3. str.trim(  ) // removes whitespaces
  4. str.slice(start, end?) // returns part of string
  5. str1.concat( str2 ) // joins str2 with str1
  6. str.replace( searchVal, newVal )
  7. str.charAt( idx ) // will show which charater is at that index
  */

console.log(str.toUpperCase());
console.log(str.toLowerCase()); 
console.log(str1.trim());

console.log(str.slice(0,6)); //returs part of string, and end index is exclusive
console.log(str.slice(-6)); // returns part of string from end

console.log(str.concat(str2));
// we can also use + operator to join strings(string concatenation)

console.log(str.replace("World", "Universe")); //replaces a part of string
console.log(str.replace("l", "x")); // this will replace only first l character
console.log(str.replaceAll("l", "x")); // this will replace all l characters

console.log(str.charAt(0));

str[0] = 'M';
console.log(str.charAt(0));
str = str.replace("H", "m"); // we can't use location str(0) instead of 'H'
console.log(str);