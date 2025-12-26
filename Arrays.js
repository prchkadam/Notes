// Arrays are collections of values
// Arrays can contain different types of data
let arr = ["arr0" , "arr1", "arr2", "arr3"];
let info = ["Name", true, 22];
console.log(arr);
console.log(info);

console.log(typeof info); // Array is an object, containing key : value pair, but instead of key we have index
console.log(arr.length); // length is a property


// Array Indices = arr[0], arr[1].......
console.log(info[1]);
console.log(info[3]);
info[2] = 11; // arrays are mutable, that is we can change the value of an array
console.log(info);


// Looping over an array = print all elements of an array
// loop --> iterable(strings, objects, arrays)

for(let idx = 0; idx < arr.length; idx++){
    console.log(arr[idx]);
}

// We prefer to use for of loop
for(let el of info){
    console.log(el);
}

let games = ["FIR", "GTA", "GNG", "COD", "CSGO"];
for(let game of games){
    console.log(game.toLowerCase());
}



/* Array Methods
   1. Push( ) : add to end
   2. Pop( ) : delete from end & return
   3. toString( ) : converts array to string
   4. Concat( ) : joins multiple arrays & returns result
   5. Unshift( ) : add to start
   6. shift( ) : delete from start & return
   7. Slice( ) : returns a piece of the array 
      slice( startIdx, endIdx )
   8. Splice( ) : change original array (add, remove, replace)
      splice( startIdx, delCount, newEl1... )
*/
// There are two types of methods, one which changes the original array & other which don't change the original array instead returns us a new array

// Push( ) 
let students = ["Shyam", "Ram", "Mohan", "Sita", "Rita"];
students.push("Tina", "Om", "Soham");
// this changes the original array

console.log(students);


// Pop( )
students = ["Shyam", "Ram", "Mohan", "Sita", "Rita"];
console.log(students);
let deleted_students = students.pop();
// this changes the original array
console.log(students);
console.log(deleted_students);


// toString( )
roll_no = [12, 15, 17]; 
console.log(roll_no.toString());
console.log(roll_no);
// Thus this doesn't change the original array instead returns a new string


// Concat( )
console.log(students.concat(roll_no , games));
console.log(students);  
// Thus this doesn't change the original array instead returns a new array


// Unshift( )
students = ["Shyam", "Ram", "Mohan", "Sita", "Rita"];
students.unshift("Tina", "Om", "Soham");
// this changes the original array

console.log(students);


//shift()
students = ["Shyam", "Ram", "Mohan", "Sita", "Rita"];
console.log(students);
deleted_students = students.shift();
// this changes the original array
console.log(students);
console.log(deleted_students);


//slice(startIndex , endIndex)
students = ["Shyam", "Ram", "Mohan", "Sita", "Rita"];
console.log(students.slice(1,3)); //endIndex is exclusive
console.log(students.slice(3)); 
console.log(students.slice(-3)); //negative index counts from end
// doesn't change the original array
console.log(students);


//splice (startIndex , deleteCount , newElement)
// it changes the original array
students = ["Shyam", "Ram", "Mohan", "Sita", "Rita", "Tina", "Om", "Soham"];
students.splice(3 ,3 , "Riya", "Tiya"); //adds and deletes
console.log(students);
students.splice(3 ,0 , "Siya"); // only adds
console.log(students);
students.splice(3 ,1); // only deletes
console.log(students);
students.splice(3 ,1 , "Siya"); // only replaces
console.log(students);
students.splice(3);
console.log(students);
students.splice();
console.log(students);