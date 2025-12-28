/* Window Object
The window object represents an open window in a browser. It is browser’s object (not JavaScript’s) & is automatically created by browser.
It is a global object with lots of properties & methods.
*/
console.log("Hello World");
console.log(window);
window.console.log("Hello World");
console.log("\n");

/* Document Object Model
When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.
*/
console.log(window.document); // prints the html code of the page
console.dir(document); // prints the properties & methods of document object
console.log("\n");
console.log("\n");


/*
 DOM is a tree structure of the page.
 It starts with the window object.
 Then document object.
 Then html object.
 Then body & head object.
 Then all the elements inside the body & head.

 These all are called nodes.
*/ 

console.log(document.body);
console.log(document.head);
console.log("\n");

console.log(document.body.childNodes[1]);
console.log("\n");
// This is used when we want to access a specific node, it helps when we make dynamic changes to the page.


/* document.body.innerHTML = "<h1>Hellow World</h1>" => This is used when we want to change the content of the entire page dynamically.*/

/* document.body.childnodes[1].innerHTML = "<h1>Hellow World</h1>" => This is used when we want to change the content of a specific node dynamically.*/


// DOM Manipulation

// Selecting with ID => document.getElementById(“myId”)
let element1 = document.getElementById("Cache");
console.log(element1);
console.dir(element1);
let element1_error = document.getElementById("Cash"); // wrong id will return null
console.log(element1_error);
console.dir(element1_error);
console.log("\n");


// Selecting with Class => document.getElementsByClassName(“myClass”)
// => it returns a HTML collection
let element2 = document.getElementsByClassName("properties");
console.log(element2);
console.dir(element2);
console.log("\n");
element2_error = document.getElementsByClassName("module"); // wrong class will return empty HTML collection
console.log(element2_error);
console.dir(element2_error);
console.log("\n");


// Selecting with Tag => document.getElementsByTagName(“myTag”)
let element3 = document.getElementsByTagName("li");
console.log(element3);
console.dir(element3);
console.log("\n");


// Query Selector

// document.querySelector(“#myId / .myClass / tag”)
// Returns the first element that matches the specified CSS selector(s) in the document.
let element4 = document.querySelector("p");
console.log(element4);
console.dir(element4);
console.log("\n");



// document.querySelectorAll(“#myId / .myClass / tag”)
// Returns all elements that matches the specified CSS selector(s) in the document.
let element5 = document.querySelectorAll(".properties");
console.log(element5);
console.dir(element5);
console.log("\n"); 


// tagName : returns tag for element nodes
console.log(element1.tagName);
console.log(element2.tagName); // This will return undefined as it a HTML collection
console.log(element2[0].tagName); // This will return the tag name of the first element in the HTML collection
console.log(element3.tagName); // This will return undefined as it a HTML collection
console.log(element3[1].tagName); // This will return the tag name of the second element in the HTML collection
console.log(element4.tagName);
console.log(element5.tagName); // This will return undefined as it a HTML collection
console.log(element5[2].tagName); // This will return the tag name of the third element in the HTML collection
console.log("\n");


// parent and child node => 
// document.body.parentNode / document.body.childNodes
console.log(`All the parent nodes are as follows :`);
console.log(document.body.parentNode);
console.log("\n");
console.log(`All the child nodes are as follows :`);
console.log(document.body.childNodes);
console.log("\n");

// firstChild / lastChild => it is the first and last element in the node list
console.log(`The first child node is :`);
console.log(document.body.firstChild);
console.log("\n");
console.log(`The last child node is :`);
console.log(document.body.lastChild);
console.log("\n");

// desendents & siblings => it is the children and siblings of an element in the node list
console.log(`All the children nodes are as follows :`);
console.log(document.querySelector("ul").children
);
console.log("\n");
console.log(`All the siblings nodes are as follows :`);
console.log(document.querySelector("p").nextSibling);
console.log("\n");


// In DOM we have text nodes, comment nodes and element nodes
// Text nodes are the text content of an element
// Comment nodes are the comments in the code
// Element nodes are the elements in the code


// innerText : returns the text content of the element and all its children
console.log(element1.innerText);
console.log(element2[0].innerText);
console.log(element2[1].innerText);
console.log(element2[2].innerText);
console.log("\n");
console.log(document.body.innerText);
console.log("\n");
console.log(document.head.innerText);
console.log("\n");


// innerHTML : returns the plain text or HTML contents in the element 
console.log(document.querySelector("ul").innerHTML);
console.log("\n");
console.log(document.head.innerHTML);

// We can also manipulate the inner text of an element
document.querySelectorAll(".properties")[1].innerText ="It also promotes modularity";
let print = document.querySelectorAll(".properties");
console.log(print[1].innerText);
console.log("\n");

// We can also manipulate the inner HTML of an element
document.querySelector("ul").innerHTML = `<ol>
    <li class="properties">It improves readability</li>
    <li class="properties">It promotes modularity</li>
    <li class="properties" id="Cache">It also helps with browser caching</li>
</ol>` ;            
let print2 = document.querySelector("ul").innerHTML;
console.log(print2);
console.log("\n");


// textContent : returns textual content even for hidden elements
console.log(`Here we have an hidden element :`, document.querySelector("#hidden").innerText);
console.log(`Here we have an hidden element :`, document.querySelector("#hidden").textContent);
console.log("\n");