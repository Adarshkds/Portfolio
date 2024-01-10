const contactMe = document.querySelector('.continue-application');

contactMe.addEventListener('click', () => {
    // window.location.href = "https://www.linkedin.com/in/adarsh-sinh/";
    window.location.href = "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwPkQqcGCLSGJZTBFCNKlMRggCqpntmkWWCnTzRDZGtSttDPbxVDSPdSfmbNPJTkdTnqfML";
})

// About 2 Section
const frontEnd = document.querySelector('#frontend');
const backEnd = document.querySelector('#backend');
const tools = document.querySelector('#tools');

const para = document.querySelector('#para')

const skills = document.querySelector('.skill-logo');
let logos;

frontEnd.classList.add('about-color-add');
backEnd.classList.remove('about-color-add');
tools.classList.remove('about-color-add');

frontEnd.previousSibling.style.backgroundColor = "orangered";
backEnd.previousSibling.style.backgroundColor = "";
tools.previousSibling.style.backgroundColor = "";

para.innerHTML = `Currently developing RouteSync's front-end interface, the focus lies on crafting a responsive, user-friendly platform. Implementation of customization features is ongoing, ensuring a seamless cross-platform experience for users.`

right('f', 9);

frontEnd.addEventListener('click', (e) => {
    frontEnd.classList.add('about-color-add');
    backEnd.classList.remove('about-color-add');
    tools.classList.remove('about-color-add');

    frontEnd.previousSibling.style.backgroundColor = "orangered";
    backEnd.previousSibling.style.backgroundColor = "";
    tools.previousSibling.style.backgroundColor = "";

    para.innerHTML = `Currently developing RouteSync's front-end interface, the focus lies on crafting a responsive, user-friendly platform. Implementation of customization features is ongoing, ensuring a seamless cross-platform experience for users.`

    right('f', 9);
})

backEnd.addEventListener('click', (e) => {
    frontEnd.classList.remove('about-color-add');
    backEnd.classList.add('about-color-add');
    tools.classList.remove('about-color-add');

    frontEnd.previousSibling.style.backgroundColor = "";
    backEnd.previousSibling.style.backgroundColor = "orangered";
    tools.previousSibling.style.backgroundColor = "";

    para.innerHTML = `Also integrating Node.js APIs into RouteSync, emphasizing robust and efficient back-end development. Ongoing work includes optimizing data retrieval and ensuring seamless communication for a cohesive user experience.`

    right('b', 5);
})

tools.addEventListener('click', (e) => {
    frontEnd.classList.remove('about-color-add');
    backEnd.classList.remove('about-color-add');
    tools.classList.add('about-color-add');

    frontEnd.previousSibling.style.backgroundColor = "";
    backEnd.previousSibling.style.backgroundColor = "";
    tools.previousSibling.style.backgroundColor = "orangered";

    para.innerHTML = `Well I've replaced Google with ChatGPT, so that's that..Plus, I've got a bunch of nifty tools in my toolkit, all working together to supercharge my efficiency.`

    right('t', 9);
})

function right(word, num) {
    if (logos) {
        skills.removeChild(logos)
    }

    logos = document.createElement('div');
    logos.classList.add('logos');

    for (let i = 1; i < num; i++) {
        const img = document.createElement('img');
        img.setAttribute('src', `media/svg/${word}${i}.svg`);
        logos.append(img);
    }

    skills.append(logos);
}



// Pop up projects
const popUp = document.querySelectorAll('.projects1 ul li');
popUp.forEach(e=>{

})