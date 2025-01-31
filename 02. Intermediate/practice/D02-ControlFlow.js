/*=============================================
=            Control Flow Practice            =
=                                              =
=  This is a practice file for the Control    =
=  Flow section of the Zero to Full Stack     =
=  JavaScript Course.  Feel free to          =
=  change this file for practice.             =
=============================================*/
let myAge = 23;
if (myAge >= 21) {
    console.log("You are old enough to vote.");

} else {
    console.log("You are not old enough to vote.");
}



/**
 *
 * Write a conditional statement that checks if a variable
 * is equal to a number.  If it is, print "You are old enough to vote."
 * If it is not, print "You are not old enough to vote."
 *
 */


// switch

let dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "monday":
        console.log("It's Monday!");
        break;
    case "tuesday":
        console.log("It's Tuesday!");
        break;
    case "wednesday":
        console.log("It's Wednesday!");
        break;
    case "thursday":
        console.log("It's Thursday!");
        break;
    case "friday":
        console.log("It's Friday!");
        break;
    case "saturday":
        console.log("It's Saturday!");
        break;
    case "sunday":
        console.log("It's Sunday!");
        break;
    default:
        console.log("It's not a day of the week!");
        break;
}

/**
 * Write a switch statement that checks the value of a variable and
 * prints out the day of the week.
 *
 * Use the switch statement to check the value of the variable dayOfWeek.
 * If the value is "Monday", print "It's Monday!"
 * If the value is "Tuesday", print "It's Tuesday!"
 * If the value is "Wednesday", print "It's Wednesday!"
 * If the value is "Thursday", print "It's Thursday!"
 * If the value is "Friday", print "It's Friday!"
 * If the value is "Saturday", print "It's Saturday!"
 * If the value is "Sunday", print "It's Sunday!"
 * If the value is anything else, print "It's not a day of the week!"
 */

// while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

/**
 * Write a while loop that prints out the numbers 0 through 4.
 */

// do while
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

/**
 * Write a do-while loop that prints out the numbers 0 through 4.
 */





/*=====  End of Control Flow Practice   ======*/