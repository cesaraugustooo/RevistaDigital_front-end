const prox = document.getElementById('avancar');
const img = document.getElementsById('carousel-item');

prox.addEventListener('click', () =>{

    img.classList.add('prox-animation');
    setTimeout(()=>{
       img.classList.remove('prox-animation');
    },500);


})