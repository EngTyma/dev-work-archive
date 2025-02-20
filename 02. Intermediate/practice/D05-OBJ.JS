const circle = {
    radius: 10,
    location: {
        x: 10,
        y: 10
    },
    area: function() {
        return Math.PI * this.radius * this.radius;
    }
};


// increment like count
var count = 0;

function likePost() {
    count++;
    document.getElementById("likeCount").innerText = count;

}

function decrement() {
    count--;
    document.getElementById("likeCount").innerText = count;
    document.getElementsByClassName("btn-decr")[0].style.background = "crimson";

}



// dom function

// select all elements with class name(getelemtnsByClassName),(getElementsByTagName),(getelementsById)



const hello = document.getElementsByTagName("h1")[0].style.color = "#FFF";