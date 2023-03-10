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

// class AnimatedElement {
//   constructor(elementId) {
//     this.element = document.querySelector(elementId);
//     this.observer = new IntersectionObserver(this.handleIntersection.bind(this));
//     this.observer.observe(this.element);
//   }

//   handleIntersection(entries) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         this.element.style.animation = 'scrollDownAnimation 1s ease-in-out';
//         this.element.style.opacity = '1';
//       } else {
//         this.element.style.animation = 'scrollUpAnimation 1s ease-in-out';
//         this.element.style.opacity = '0';
//       }
//     });
//   }
// }

// const skills = new AnimatedElement('#skills');
// const projects = new AnimatedElement('#projects');
// const education = new AnimatedElement('#education');