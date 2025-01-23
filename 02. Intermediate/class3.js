/*=============================================
=            Section control flow            =
=============================================*/


/**
 *
 * if-else statements
 *
 */

let car = 80;
if (car > 100) {
    console.log("car is Too Much Expensive");
} else if (car > 90) {
    console.log("car is expensive");
} else {
    console.log("car is cheap");
}
/**
 *
 * Hour app:
 * If the hour is between 6 AM and 12 PM - Good morning
 * If the hour is between 12 PM and 6 PM - Good afternoon
 * Otherwise - Good evening
 *
 */

let hour = 0;
if (hour >= 6 && hour < 12) {
    console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}

// Another way to get the greeting based on the current time
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
        return 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        return 'Good afternoon';
    } else {
        return 'Good evening';
    }
}

// Example usage:
console.log(getGreeting());


/**
 *
 * switch statements
 *
 */

const expr = 'Tomato';
switch (expr) {
    case 'apple':
        console.log('It is an apple');
        break;
    case 'banana':
        console.log('It is a banana');
        break;
    default:
        console.log("sorry we are out of stock" + "", expr);
        // console.log('It is neither an apple nor a banana');
        break;

}

let day = 0;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}

let role = 'admin'; // Added initialization for `role` variable
switch (role) {
    case '0':
        console.log('Admin');
        break;
    case 'moderator':
        console.log('Moderator');
        break;
    case 'user':
        console.log('User');
        break;
    default:
        console.log('Invalid role');
        break;
}

// Alternative approach to determine role
if (role === 'admin') {
    console.log('Admin');
} else if (role === 'moderator') {
    console.log('Moderator');
} else {
    console.log('Invalid role');
}
/**
 *
 * Loops
 *
 */
// start point , end, increment
for (let j = 1; j <= 100; j++) {
    console.log(j);
}


// For loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//for loop
// for (let i = 0; i <= 5; i++) {
//     if (i %= 2 !== 0)
//         console.log(i);
//     else {
//         console.log("Hello World");

//     }
// }

// While loop
// let j = 0;
// while (j <= 5) {
//     console.log(j);
//     j++;
// }



/**
 *
 * Do While
 *
 */

let k = 0;
do {
    k += 6;
    console.log(k);
}

while (k < 5);

let n = 0;
while (n < 5) {
    n++;
    console.log(n);
}

/*=====  End of Section control flow  ======*/