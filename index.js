const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

// Display Mobile Menu

const mobileMenu = () => {
menu.classList.toggle('is-active')
menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu);

// Show Active Menu when scrolling

const highligthMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY;
// adds  highligghts to my menu items

if (window.innerWidth> 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
} else if(window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
} else if (window.innerWidth> 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlght');
    aboutMenu.classList.remove('highlight');
    return;
}
if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
}
};

window.addEventListener('scroll', highligthMenu);
window.addEventListener('click', highligthMenu);

// Close mobile menu when clicking on a menu item

const hidemobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth<= 768 && menuBars) {
         menu.classList.toggle('is-active')
         menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hidemobileMenu);
navLogo.addEventListener('click', hidemobileMenu);



