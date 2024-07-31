const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add(`active`);
})
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove(`active`);
})
}
//end responsive nav bar
//loader
var loader = document.getElementById('preloader');
window.addEventListener("load", function(){
    loader.style.display = 'none';
})




