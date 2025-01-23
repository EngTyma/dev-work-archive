/*=============================================
=            Section objects           =
=============================================*/

const man = {
    name: "John",
    age: 25,
    job: "Developer",
    hobby: "Programming",
};

console.log(man.name + " " + man.age + " " + man.job + " " + man.hobby);

const man1 = {
    name: "hamda",
    age: 25,
    job: "Developer",
    hobby: "Programming",
};

console.log(man1.name + " " + man1.age + " " + man1.job + " " + man1.hobby);

const man2 = {
    name: "Intisar",
    age: 23,
    job: "Developer",
    hobby: "Programming",
};
console.log(man2.name + " ", man2.age + " ", man2.job + " ", man2.hobby);

//oops
const person = {
    name: "hello",
    age: 25,
};
// console.log(person.name);

//object oriented programming

const circle = {
    radius: 1,
    color: "red",
    location: {
        x: 1,
        y: 2,
    },
    isvisble: true,
    draw: function() {
        console.log("Draw");
    },
};
// circle.draw;

//factory fuction

// function createCircle(radius, location) {
//     return circle = {
//         radius: radius,

//         draw() {
//             console.log("Draw");
//         },
//     };
// }

// const circl1 = createCircle(1);
// console.log(circl1);

/*=====  End of Section objects  ======*/