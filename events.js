// Events are changes or actions that happen in the browser, An event can be triggered by the user action
// Examples: click, hover, keypress, form submission, page load, etc.

// Event handling is the process of responding to user interactions like clicks, keypresses, etc.


/* node.event = ( ) => {
  //handle here
};
*/
let button = document.querySelector("#myButton");
button.onmouseover = (event) => {
    console.log("Button clicked!");
}

/* There are multiple ways to handle events in JavaScript:
    1. Inline event handlers (like in HTML)
    2. DOM property assignment (like above)
    3. addEventListener (most preferred method)

    Priority order => DOM property assignment > addEventListener > Inline handlers
    Also if twice we have assigned the same event, the last one will overwrite the previous one
 */


// Event object Event Object => It is a special object that has details about the event
button.onclick = (event) => {
    console.log(event);

    console.log("Event type:", event.type);
    
    console.log("Target element:", event.target); // This is used for the element that actually triggered the event
    
    console.log("Current target:", event.currentTarget); // This is used for event delegation - refers to the element that the event listener is attached to
    
    console.log("Mouse coordinates:", event.clientX, event.clientY);
    
    console.log("\n");
    
    console.log("Mouse is over the button!");
}


/* Event Listeners
node.addEventListener( event, callback )
*/
let btn1 = document.querySelector("#eventListenerButton");
let fnt1 = () => {
    console.log("Event listener button clicked!");
}
let fnt2 = () => {
    console.log("Mouse hovered!");
}

btn1.addEventListener("mouseover", fnt2);
btn1.addEventListener("click", fnt1);

let btn2 = document.querySelector("#anotherButton");
btn2.addEventListener("click", () =>{
    console.log("Event listener button 2 clicked!");
});


/*
node.removeEventListener( event, callback )
Note : the callback reference should be same to remove 
*/
btn1.removeEventListener("mouseover", fnt2);


// Que. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again
let toggleBtn = document.querySelector("#darkModeToggle");
let currtMode = "Light";

let fun = () => {
    if (currtMode === "Light") {
        currtMode = "Dark";
        document.body.style.backgroundColor = "black";
    } 
    else {
        currtMode = "Light";
        document.body.style.backgroundColor = "white";
    }
}

toggleBtn.addEventListener("click", fun);



