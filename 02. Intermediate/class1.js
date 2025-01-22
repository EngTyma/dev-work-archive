/*=============================================
=            lesson1 Variables            =
=============================================*/
//first example
// How to create variables:
var x;
let c;

// how to use variables:
x = 5;
c = 6;
let d = x + c;
console.log(d);

let nme = "Taslima";
console.log(nme);

var ages = 23;
console.log(ages);

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

let fname = "Intisar";
let yrAge = 23;
let isActive = true;

let FirstName = undefined;
let color = null;

// Dynamic Type



/*=====  End of lesson3  ======*/

/*=============================================
=            lesson 4 objects        =
=============================================*/

let person = {
    name: "Intisar",
    age: 23,
    isActive: true
};
// dot notation
person.name = "Anhar";
console.log(person.name);

// bracket notation
person["name"] = "Taslima";

console.log(person.name);


/*=====  End of lesson4  ======*/


/*=============================================
=            Array Section            =
=============================================*/

let selectedColors = ['red', 'black', 'yellow', 'tomato'];
selectedColors[1] = 'blue';
// console.log(selectedColors[0]);
console.log(selectedColors.length);


/*=====  End of Section of Array  ======*/



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
function great() {
    console.log("Hello world!");
}

great();

/*=====  End of lesson6  ======*/