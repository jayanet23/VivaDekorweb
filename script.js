const ul = document.querySelector('.ok');
const menuToggle = document.querySelector('.bi-list');
const close = document.querySelector('.close');

menuToggle.addEventListener('click', () => {
    ul.style.display = 'block';
    close.style.display = 'block';
})

close.addEventListener('click', () => {
    ul.style.display = 'none';
    close.style.display = 'none';
})
