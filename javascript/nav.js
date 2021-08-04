const burger_nav = document.querySelector('.burger-nav');
const menuItems = document.querySelector('.menu-items-main');

burger_nav.addEventListener('click', () => {
    burger_nav.classList.toggle('toggle-nav');
    menuItems.classList.toggle('menu-items-main-active');
});