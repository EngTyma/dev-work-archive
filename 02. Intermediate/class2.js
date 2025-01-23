/*=============================================
=            Section Operators            =
=============================================*/


/* Arithmetic Operators */

let ab = 10;
let cd = 5;
console.log(ab + cd);

// Addition Operator
let x = 10;
let y = 5;
console.log(x + y);

// Multiplication Operator
console.log(x * y);

//increment Operator
console.log(x++);
console.log(x);

//decrement Operator
console.log(x--);
console.log(x);



/**
 *
 * Assignment Operator
 *
 */

console.log("Hello, world!");
let dh = 10;
// dh++;
dh = dh + 1;
dh += 1;
console.log(dh);

let mod = 5 % 5;
console.log(mod);


let a = 5;
let b = 9;
let z = a + b;
a = a + b;
a *= a;
a -= a;
console.log(a);


/**
 *
 * Comparison Operators
 *
 */
console.log("Show!");
let var1 = '3';
let var2 = 5;
// equal == not eaqual != strict equal === not strict equal !== greater than > greater than or equal to >== less than < less than or equal to <= 

console.log(3 !== var1);

let c = 1;
// relational oper...
console.log(c > 4);
console.log(c >= 1);
console.log(c <= 4);

//equality oper...
//strinct oper...(same type and value)
console.log(c == 1);


//lost euqlity..

console.log(c === 1);


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

// AND(&&) t/t = t , t/f = f
let a1 = 10;
let b1 = 20;
// true && true
console.log(a1 > 5 && b1 > 5);
// false && true
console.log(a1 < 5 && b1 > 5);
// true && false
console.log(a1 > 5 && b1 < 5);
// false && false
console.log(a1 < 5 && b1 < 5);

let xam = 4 && 5;
let yam = 5;

// true && true

console.log(xam);

// OR(||) t/f = t f/t = f 
let highIncome = true;
let goodcreditscore = true;
let eligibleforloan = highIncome || goodcreditscore;
console.log(eligibleforloan);

//logical NOT (!)

let a2 = 10;
let b2 = 20;
// true
console.log(!a2 > 5);
// false
console.log(!a2 < 5);



/**
 *
 * bitwise operator
 *
 */

// bitwise AND(&)
let a3 = 10;
let b3 = 20;
console.log(a3 & b3);
// bitwise OR(|)
let a4 = 10;
let b4 = 20;
console.log(a4 | b4);
// bitwise XOR(^)
let a5 = 10;
let b5 = 20;
console.log(a5 ^ b5);
// bitwise NOT(~)
let a6 = 10;
console.log(~a6);


/**
 *
 * Operator Precedence
 *
 */

let xy = 2 + 4 * 3;
console.log(xy);
let z = 2 + 4 * 3;
console.log(z);
let a7 = 2 + 4 * 3;
console.log(a7);
let b7 = 2 + 4 * 3;
console.log(b7);




/*=====  End of Section operators  ======*/