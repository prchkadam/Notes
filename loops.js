// Loops are used to execute a block of code repeatedly.


/* For loop
   for (let index = 0; index < array.length; index++) {
    const element = array[index];   
    }
    
    for (initilization; stopping condition; increment/decrement updation){
        
    }
    */

    // i --> iterator
    for (let i = 1 ; i <= 5 ; i++){
        console.log("i = ", i);
    }
    // the i which we have initialized is not accessible outside the loop

    // Calculate sum of 1 to n numbers
    // let n = prompt("Enter your desired number");
    let n = 5;
    let sum = 0;
    for (let i = 0; i <= n; i ++){
        sum = sum + i;
    }
    console.log(`sum = ${sum}`);


/* infinite loop */


/* While loop
while (condition) {
    
}
*/
let i = 1;
while(i <= 5){
    console.log("i = ", i);
    i++ ;
} 


/* Do while loop
do {
    
} while (condition);
*/
// This will print atleast one time
let num = 1;
do{
    console.log("number = ", num);
    num++ ;
} while(num <= 5);


/* For - of loop
It helps to apply loop on string and arrays 

for(let val of strVar){
    
}
*/
let str = "Divya Kadam";
let size = 0;
for(let i of str){
    console.log(i);  
    // i = iterator --> character
    size++;
}
console.log(`Size of string = ${size}`);


/*  For in loop 
It is used for objects, it returns the key of the object
for ( let key in objVar){

}
*/
let student = {
    name : "Sita",
    roll_no : 12,
    class : "A",
    isPassed : true
};

for (let i in student){
    console.log("Key =", i, "Value = ", student[i]);
}


