/*=============================================
=            Section objects           =
=============================================*/

//oops
const person ={
name:"hello",
age:25,
};
// console.log(person.name);

//object oriented programming

const circle = {
    radius:1,
    color:"red",
    location:{
        x:1,
        y:2,
    },
    isvisble:true,
draw:function(){
    console.log("Draw");
},
};
// circle.draw;

//factory fuction

function createCircle(radius,location){
    return circle = {
        radius:radius,

        draw(){
            console.log("Draw");
        },
    };
}

const circl1 = createCircle(1);
console.log(circl1);

/*=====  End of Section objects  ======*/

