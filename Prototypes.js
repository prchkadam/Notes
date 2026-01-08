// A javaScript object is an entity having state and behavior (properties and method).

// Direct way to create an object
let obj = {
    name: "John",
    age: 30,
    city: "New York",
    printDetails: function() {
        console.log("Details: " + this.name + ", " + this.age + ", " + this.city);
    }
}
/* To prinf the object
obj.printDetails(); */

// this is used to refer to the current object => this = obj

let studData = {
    name : "Diyva",
    marks : 8.04,
    printData : function() {
        alert(`Details: \n Name =${this.name}, \n Marks = ${this.marks}`);
    }
}


/* JS objects have a special property called prototype.
And this prototype itself is an object. */

/* When we define a object, a prototype object is created automatically. 
And this prototype already has some defined methods and properties (functions) which are shared by all objects.
So object inherit these methods and properties from its prototype. */

// Example to set a new prototype
//_ _proto_ _
const employee = {
    calcTax() {
        console.log("The tax rate is 10%");
    },

    calcBonus : function() {
        console.log("The bonus is 1000"); 
    }  
    // both are the right way to write a function 
}

const newEmployee = {
    salary : 500000,
}

newEmployee.__proto__ = employee; // This inherited prototypes from employee to newEmployee


// Type of prototype = Reference to an object
//  IF object & prototype have same method, object's method will be used.