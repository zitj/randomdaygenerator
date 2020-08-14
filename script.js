
const generateButton = document.querySelector('button');
const heading = document.querySelector('h1');

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

generateButton.addEventListener('click', (min, max) =>{
    min = 1;
    max = 7;
    let random = Math.floor(Math.random() * (max - min)) + min;
    heading.innerHTML = weekDays[random];    
});