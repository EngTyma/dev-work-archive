/*=============================================
=            lesson1 Variables            =
=============================================*/
//   first example
let nme = "Taslima";
console.log(nme);

console.log('Hello, world!');

// second example
let name = 'ibtahala';
console.log(name);



// third example
let age = 25;
console.log(age);

//fourth example.
var x = 10;
var y = 6;
var z = x + y;
console.log(z);
// fifth example

/*=====  End of lesson1 Variables  ======*/


/*=============================================
=            lesson2 constants        =
=============================================*/

const i = "intissar";
// i="amjad";

console.log(i);



/*=====  End of lesson2  ======*/





/*=============================================
=            lesson 3 primitive datatypes        =
=============================================*/

let j = "ibtisam"; //string literal
let k = 25; //number literal
let check = true; //boolean literal
// let num; //
let num = undefined; //undefined literal

let color = null; //nul literal

/*=====  End of lesson3  ======*/

/*=============================================
=            lesson 4 objects        =
=============================================*/
let names = "Taslima";
let age1 = 25;

let person = {
    name: names,
    age: age1,
};
console.log(person.name);

//dot notation

console.log(person.name);

//bracket notation

console.log(person["name"]);

const student = {
    id: 1,
    name: "ibtihal",
};

//dot notation
console.log(student.id);

//bracket notation
console.log(student["name"]);
/*=====  End of lesson4  ======*/

/*=============================================
=            JavaScript Objects Assignment        =
=============================================*/

// Task 1: Object Creation
// Create the person object with the specified properties and methods
const person1 = {
    firstName: "Naghma",
    lastName: "Ahmed",
    age: 25,
    isStudent: true,

    // Method to get the full name
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Method to describe the person
    describe: function() {
        const studentStatus = this.isStudent ? 'a student' : 'not a student';
        return `${this.fullName()} is ${this.age} years old and is ${studentStatus}.`;
    }
};

// Example usage
console.log(person1.fullName()); // Output: Naghma Ahmed
console.log(person1.describe()); // Output: Naghma Ahmed is 25 years old and is a student.


/*=====  End of Assignment  ======*/

/*=============================================
=            lesson 5 Arrays        =
=============================================*/

const cars = ['item1', 'item2', 'item3'];
// cars = "items";
console.log(cars[2]);

let selectedcolor = ['red', 'black'];
selectedcolor = "yellow";
// console.log(selectedcolor[0]);
console.log(selectedcolor.length);

/*=====  End of lesson5  ======*/


/*=============================================
=            lesson 6  functions      =
=============================================*/

// function expression performing task
function greet(name, lname) {
    console.log("hello " + name, "", +lname);
}
greet("Anhal", "Ahmed");

//calculating function
function square(number) {
    return number * number;
}
// let calculate = square(2);

console.log(square(2));

/*=====  End of lesson6  ======*/