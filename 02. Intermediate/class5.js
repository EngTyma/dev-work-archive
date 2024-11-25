/*=============================================
=            Section Functions           =
=============================================*/

// function declaration
function square(num){
    return num*num;
}
console.log(square(4));

//function expression
const square2 = function(num1){
    return num1*num1;
}
console.log(square(5));
//defined
function greet(){
    console.log("Hello, World!");
}
//called (invoked)
greet();

//callback function
function add1(a,b){
    return a+b;
}

function divide (a,b){
    return a/b;
}

function calculate(x,y, operation){
    return operation(x,y);
}

console.log(2,2,(add1));

console.log(calculate(2,2,(divide)));


// Function declaration
function work() {
    console.log('Work');
}

// Function expression
const run = function() {
    console.log('Run');
};
run();

// Function expression
const add = function(a, b) {
    return a + b;
};

// Function declaration
function sub(a, b) {
    return a - b;
}

/*=====  End of Section Functions  ======*/
