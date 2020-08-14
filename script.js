
const generateButton = document.querySelector('button');
const heading = document.querySelector('h1');
const images = document.querySelector('img');
const paragraph = document.querySelectorAll('p');

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


generateButton.addEventListener('click', (min, max) =>{
    min = 1;
    max = 7;
    let random = Math.floor(Math.random() * (max - min)) + min;
    heading.innerHTML = weekDays[random];
    images.classList.add('active');
    images.addEventListener('animationend', () => {
        paragraph[1].classList.add('active');
      });
    paragraph[1].addEventListener('animationend', ()=>{
        heading.classList.add('active');
    });  
});