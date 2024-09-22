// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di Klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// ketika di klik diluar sidebar menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if( !hamburger.contains(e.target) && !navbarNav.contains(e.target) ) {
        navbarNav.classList.remove('active');
    }
});