const burger = document.querySelector('.header__burger');
const navbar = document.querySelector('.header__burger-wrapper');

burger.addEventListener('click', () => {
    navbar.classList.toggle('header__burger-wrapper--active');
    burger.classList.toggle('header__burger--active');
})
