
/*=============================================
=            Section control flow            =
=============================================*/


/**
 *
 * if else stat...
 *
 */


/**
 *
 * hour app
if the hour is btw 6 adn 12 am - good morning
else if the hour is btw 12 pm and 6 pm - good afternoon
otherwise good evening
 *
 */

let hour = 0;
if(hour >=6 && hour <12)
{
    console.log("good morning");
}

else if(hour >=12 && hour < 18)
{
    console.log("Good Afternoon");
}

else{
    console.log("Good Afternoon");
}

//another way

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
 * switch stat...
 *
 */

let day = 0;
switch(day) {
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
    }


/*=====  End of Section control flow  ======*/

