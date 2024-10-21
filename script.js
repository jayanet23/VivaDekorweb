const menuIcon = document.querySelector('#menu-icon');
const dropdown = document.querySelector('.dropdown');
menuIcon.addEventListener('click', function () {
    dropdown.classList.toggle('open');
    const isOpen = dropdown.classList.contains('open');
    if (isOpen) {
        menuIcon.className = 'bi bi-x-lg';
    } else {
        menuIcon.className = 'bi bi-list';
    }
})

