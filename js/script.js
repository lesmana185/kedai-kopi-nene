// Toggle Class Active untuk Hamburger Menu
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di Klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Toggle Class Active Untuk Search Form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

// ketika search di klik
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// ketika di klik diluar Element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
    if( !hm.contains(e.target) && !navbarNav.contains(e.target) ) {
        navbarNav.classList.remove('active');
    }

    if( !sb.contains(e.target) && !searchForm.contains(e.target) ) {
        searchForm.classList.remove('active');
    }
});






