// Practice questions

// Q1.  Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS. 
let heading = document.querySelector("h2");
heading.innerText += " , Hellow World!"
console.log(heading.innerText);

// Q2.  Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.
let div = document.querySelectorAll(".box");

let i = 1;
for(let divs of div){
    divs.innerText = `Hello World from ${i}!`;
    i++;
}
console.log(div);
