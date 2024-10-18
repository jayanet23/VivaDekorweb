const menu = document.querySelector('.bi-list');
const navmenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    navmenu.classList.toggle('nav-mobile-version');
})