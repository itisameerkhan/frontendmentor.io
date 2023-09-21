AOS.init();

const menuBar = document.getElementById('menubar');
const navBar = document.querySelector('header nav');

let flag = 0;
menuBar.addEventListener('click', () => {
    navBar.classList.toggle('show-menu')
})