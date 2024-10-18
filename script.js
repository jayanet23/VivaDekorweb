const menu = document.querySelector('.bi-list');
const navmenu = document.querySelector('.nav-menu');
const btnClose = document.querySelector('.close'); 

menu.addEventListener('click', () => {
    navmenu.style.display = 'grid';
    btnClose.style.display = 'block';
    
    btnClose.addEventListener('click', ()=> {
        navmenu.style.display = 'none';
        btnClose.style.display = 'none';
        
    })
})