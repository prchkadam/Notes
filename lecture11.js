// Practice Question

// Q1.  You are creating a website for your college. Create a class (User) with 2 properties, name &email. It also has a method called viewData( ) that allows user to view website data. 
let websiteData = "We are cooked"
class User  {
    constructor(name , email){
        this.name = name;
        this.email = email;
        console.log(`The name of the user is ${this.name} and their email is ${this.email}.`)
    }
    viewData(){
        console.log("Data :", websiteData);
    }
}

let student1 = new User("ABC", "abc@gmail.com");
console.log(student1);
console.log("\n");


// Q2. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
class Admin extends User {
    editData(){
        websiteData = "We are cooked and roasted"
        super.viewData();
    }
}

let student2 = new Admin("XYZ", "xyz@gmail.com");
console.log("\n");
// console.log(student2.editData());