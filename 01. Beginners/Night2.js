
/*=============================================
=            Section Operators            =
=============================================*/


/* Arithmetic Operators */



// Addition Operator
let x = 10;
let y = 5;
console.log(x+y);

// Multiplication Operator
console.log(x*y);

//increment Operator
console.log(x++);
console.log(x);

//decrement Operator
console.log(x--);
console.log(x);


// Assignment Operator
let a = 5;
let b = 9;
let z = a+b;
a=a+b;
a *=a;
a -=a;
console.log(a);


/**
 *
 * Comparison Operators
 *
 */

let c = 1;
// relational oper...
console.log(c>4);
console.log(c>=1);
console.log(c<=4);

//equality oper...
//strinct oper...(same type and value)
console.log(c==1);


//lost euqlity..

console.log(c===1);


/**
 *
 * ternary ope...
 *
 */

let pionts = 110;
let type = pionts > 100 ? 'Gold' : 'Silver';
console.log(type);

let pt = 100;
let type1 = pt > 100 ? 'Gold' : 'Silver';
console.log(type1);
/**
 *
 * Logical operator ---> And, OR , NOT
 *
 */

// AND(&&)
let a1 = 10;
let b1 = 20;
// true && true
console.log(a1>5 && b1>5);
// false && true
console.log(a1<5 && b1>5);
// true && false
console.log(a1>5 && b1<5);
// false && false
console.log(a1<5 && b1<5);
// OR(||)

/*=====  End of Section operators  ======*/

