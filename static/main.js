const jokeBtn = document.querySelector('.joke-btn');
const text = document.querySelector('.result');
let number = 1;
jokeBtn.addEventListener('click', ()=>{
    text.innerHTML = number; 
})
