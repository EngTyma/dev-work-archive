const para = document.getElementById("para"),
    profileImg = document.getElementById("profileImg").querySelector("img"),
    authorName = document.getElementById("authorName");

const testimonial = [{
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
        src: "https://i.pinimg.com/736x/36/29/5f/36295f47ead1da925e8be94e9a595268.jpg",
        name: "ali",
    },
    {
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
        src: "https://i.pinimg.com/1200x/9a/39/3a/9a393a3c21080f4feaa4b76bed8f246e.jpg",
        name: "Cherise G",
    },
    {
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
        src: "https://i.pinimg.com/736x/e8/13/ab/e813ab6a4a09ba901a672e1599ad9a27.jpg",
        name: "Constantine V",
    },
    {
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
        src: "https://i.pinimg.com/736x/51/ff/4e/51ff4ea56d6dab4e166ccf1a6a236e3f.jpg",
        name: "Cherise G",
    },
];

let i = 0;

function slider() {
    const t = testimonial[i];
    para.innerText = t.text;
    profileImg.src = t.src;
    authorName.innerText = t.name;

    i++;
    if (i >= testimonial.length) i = 0;
}

setInterval(slider, 9000);