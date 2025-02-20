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


// dom function

// select all elements with class name(getelemtnsByClassName),(getElementsByTagName),(getelementsById)



const hello = document.getElementsByTagName("h1")[0].style.color = "#FFF";