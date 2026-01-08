// Class is a program - code template for creating objects.
// It defines properties and methods that objects of that class will have.
// Classes are blueprints for creating objects with specific properties and methods.

// Those objects will have some state(variables) and some behaviour (functions) inside it.

/*
    class MyClass {
    constructor( ) { ... }
    myMethod( ) { ... }
    }
    let myObj = new MyClass( ) ;
*/

class car {
    start () {
        console.log("Start");
    }

    stop (){
        console.log("Stop");
        // alert("Stop");
    }

    setBrand(brand){
        this.brandName = brand;
        console.log(`The name of the brand is ${this.brandName}`)
    }
    // this is the object for which the function is called
    // this.brandName => it is the property of the object
    // brand => it the argument which comes from the function 
}

let myNewCar = new car();
myNewCar.start(); //This will call start function from class of car.
console.log("\n");

let mySecondCar = new car();
mySecondCar.setBrand("Nano");
mySecondCar.stop();
console.log("\n");

let BMW = new car();
BMW.setBrand("BMW");
console.log("\n");


/* A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.
    If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty
    class MyClass {    
    constructor( ) {
        }    
    myMethod( ) {
        }
    }
*/

class student {
    constructor (name, rollNo) {
        this.name = name;
        this.roll = rollNo;
        console.log(`The name of the student is ${this.name}`);
        console.log(`The Roll No of the student is ${this.roll}`);
    }

    isPassed(){
        console.log(`The student ${this.name} has passed!`);
    }

    isFailed(){
        console.log(`The student ${this.name} has not passed!`);
    }
}

let ram = new student("Ram" , 10);
ram.isPassed();
console.log("\n");

let shyam = new student("Shyam", 11);
shyam.isFailed();
console.log("\n");



/* Inheritance => inheritance is passing down properties & methods from parent class to child class. 
child class is also called derived class
syntax ==> class ChildClass extends ParentClass { // //}
*/

/* Super keyword => It is used to call the constructor of its parent class to access the parent's properties and methods
syntax => super( args ), calls Parent‘s constructor
          super.parentMethod( args )
*/

class writers {
    constructor (name){
        this.name = name;
        console.log(`The name of writer is ${this.name}`);   
    }
    work(){
        console.log("They can work anywhere and anytime.");
    }
    eat(){
        console.log("They don't eat.")
    }
}

class author extends writers{
    constructor(name){
        super(name);
        console.log("They are author")
    }
    work() {
        super.eat();
        console.log("They specifically write novel")
    }
    // If Child & Parent have same method, child's method will be used. [Method Overriding]
}

let evie = new author("Evie");
evie.work();
console.log("\n");

evie = new writers();
evie.work();
