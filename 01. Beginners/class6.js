
/*=============================================
=            Section Array           =
=============================================*/

const numbers = [1, 2, 3, 4, 5];

//end 
numbers.push(6);
// console.log(numbers)
//begining
numbers.unshift(8,9)
// console.log(numbers)

//midle
numbers.splice(0,0,10,11);
console.log(numbers)

//remove
numbers.splice(0,2);
console.log(numbers)
/**
 *
 * finding element in an array (primitivite Types)
 *
 */

const numbers2 = [1, 2, 3, 4, 5];
// console.log(numbers2.indexOf(1));

console.log(numbers2.indexOf('a')!== -1);
/*=====  End of Section Array  ======*/

