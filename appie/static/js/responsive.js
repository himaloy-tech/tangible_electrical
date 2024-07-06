// burger = document.querySelector('.burger')
// navbar = document.querySelector('#navbar');
// nav_list = document.querySelector('#nav-list');

// burger.addEventListener('click', ()=>{
//     navbar.classList.toggle('h-nav');
//     nav_list.classList.toggle('v-nav');
// })
// script.js
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
var burger_on_off = false;

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    if (burger_on_off == false){
        burger_on_off = true;
        navLinks.forEach((link, index) => {
            link.style.animation = '';
            nav.style.display = 'flex';
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
    }
    else if (burger_on_off == true){
        burger_on_off =false;
        navLinks.forEach((link, index) => {
            link.style.animation = '';
            nav.style.display = 'none';
        });
    }

    // Animate Links
    // navLinks.forEach((link, index) => {
    //     if (window.innerWidth == 768 && burger_on_off == false) {
    //         link.style.animation = '';
    //         nav.style.display = 'none!important';
    //     } else {
    //         nav.style.display = 'flex';
    //         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    //         burger_on_off = true;
    //     }
    // });

    // Burger Animation
    burger.classList.toggle('toggle');
});
