const navBtn = document.querySelector('.nav__hamburger');
const navBtnsOne = document.querySelector('.nav__hamburger-btn--one');
const navBtnsTwo = document.querySelector('.nav__hamburger-btn--two');
const navBtnsThree= document.querySelector('.nav__hamburger-btn--three');
const navMenu = document.querySelector('.header__burger-menu');
const navMenuLink = document.querySelectorAll('.header__burger-menu-link');

const burgerIconTransform = () => {
    navBtnsTwo.classList.toggle('opacity');
    navBtnsOne.classList.toggle('rotate-right');
    navBtnsThree.classList.toggle('rotate-left');
}

const mobileNav = () => {
    navMenu.classList.toggle('header__burger-menu--active');

    navMenuLink.forEach(item => {
        item.addEventListener('click', () => {
            navMenu.classList.remove('header__burger-menu--active');
        })
    })
}

navBtn.addEventListener('click', burgerIconTransform);
navBtn.addEventListener('click', mobileNav);
navMenuLink.addEventListener('click', mobileNavRemover);



