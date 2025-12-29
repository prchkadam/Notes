// DOM Manipulation => Attributes
// getAttribute( attr ) => to get the attribute of an element
let print1 = document.querySelector("#div");
print = print1.getAttribute("id");
console.log(print);

print = print1.getAttribute("class"); //This will return null as the attribute is not present
console.log(print);

print = print1.getAttribute("name");
console.log(print);
console.log("\n");


// setAttribute( attr, value ) => to set the attribute of an element
let print2 = document.querySelector("p");
print2.setAttribute("id", "JSp");
let print2_1 = print2.getAttribute("id");
console.log(print2_1); 


// node.style => to get the style of an element
let print3 = document.querySelector("#div");
console.log(print3.style);
print3.style.fontSize = "20px";
console.log(print3.style.fontSize);



/* Inserting an element
   For this we first create an element 
   let el = document.createElement(“div“)

   and then we insert it into the DOM
   1. node.append( el ) => adds at the end of node (inside)
   2. node.prepend( el ) => adds at the start of node (inside)
   3. node.before( el ) => adds before the node (outside)
   4. node.after( el ) => adds after the node (outside)
*/

let el1 = document.createElement("ul");
let el2 = document.createElement("ul");
let el3 = document.createElement("div");
let el4 = document.createElement("div");
let el5 = document.createElement("div");
el1.textContent = "This list was added with append()";
el2.textContent = "This list was added with prepend()";
el3.textContent = "This div was added with before()";
el4.textContent = "This div was added with after()";
el5.textContent = "This is an extra div";

let node = document.querySelector("#div");
node.append(el1,el5);
node.prepend(el2);
node.before(el3);
node.after(el4);


// Delete Element
// node.remove( ) = removes the node
document.querySelector(".info").remove();

// appendChild( el ) => to append a child to an element, apending means adding at the end of the element, but we can only add one element at a time
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This paragraph was added with appendChild()!';
document.body.appendChild(newParagraph,);

// parentNode.removeChild( childNode ) => to remove a child from an element
let parent = document.querySelector(".parainfo");
let child = document.querySelector("#delete");
let deletedEl = parent.removeChild(child);
console.log("Removed element:", deletedEl);

// The removed element can still be used
console.log("Removed element text:", deletedEl.textContent);

/* To remove a specified element without having to specify its parent node:
if(node.parentNode){
   node.parentNode.removeChild(node);
}
*/
let childNode = document.querySelector("#keep");
if(childNode.parentNode){
   childNode.parentNode.removeChild(childNode);
}

/* To remove all children from an element:
while(node.firstChild){
   node.removeChild(node.firstChild);
}
*/
let childNode2 = document.querySelector("#extra");
while(childNode2.firstChild){
   childNode2.removeChild(childNode2.firstChild);
}