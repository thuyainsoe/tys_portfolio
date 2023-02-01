const element = document.querySelector('#element');
const navElement = document.querySelector('#nav_element');
const header = document.querySelector('.header');
const social = document.querySelector('.social');
window.addEventListener("scroll", function() {
    if (window.scrollY > 60) {
        header.style.transform = 'translate(0, -60px)'
        header.style.alignItems = 'flex-end'
        header.style.paddingTop = '20px'
        social.style.paddingBottom = '9px'
    } else if (window.scrollY < 60) {
        header.style.transform = null
        header.style.alignItems = 'center'
        header.style.paddingTop = '0px'
    }
});