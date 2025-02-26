const container1 = document.querySelector('.container');
const careers = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'UI/UX Designer', 'Mobile Developer'];
let careerIndex = 0;
let characterIndex = 0;

function changeText() {
    container1.innerHTML = `<h1>Hello World I'm ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
    characterIndex++;
    if (characterIndex > careers[careerIndex].length) {
        careerIndex = (careerIndex + 1) % careers.length;
        characterIndex = 0;
    }
    setTimeout(changeText, 100);
}

changeText();