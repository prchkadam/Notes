// Practice questions

// Q1.  Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS. 
let heading = document.querySelector("h2");
heading.innerText += " , Hellow World!"
console.log(heading.innerText);
console.log("\n");

// Q2.  Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.
let div = document.querySelectorAll(".box");

let i = 1;
for(let divs of div){
    divs.innerText = `Hello World from ${i}!`;
    i++;
}
console.log(div);
console.log("\n");

// Q3.   Create a new button element. Give it a text “click me”, background color of red & text color of white. Insert the button as the first element inside the body tag.
let button = document.createElement("button");
button.textContent = "Click me";
button.style.backgroundColor = "red";
button.style.color = "white";
document.body.prepend(button);

// Q4. Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the <p> element. Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.
let para = document.querySelector(".demo-para");
// para.setAttribute("class", "newClass");
// console.log("Class added:", para.getAttribute("class"));

// This setAttribute removes the old attribute - demonstrating the overwrite issue
console.log("Before adding class:", para.classList);
para.classList.add("newClass");
console.log("After adding class:", para.classList);
// Using classList avoids overwriting existing classes - it just adds the new class and preserves existing ones
// We can also remove classes using classList.remove("className")