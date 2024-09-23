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

// Toggle Class Active Untuk Shopping Cart
const shoppingCart = document.querySelector('.shopping-cart');

// Ketika shopping cart di klik
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}

// ketika di klik diluar Element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const scb = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if( !hm.contains(e.target) && !navbarNav.contains(e.target) ) {
        navbarNav.classList.remove('active');
    }

    if( !sb.contains(e.target) && !searchForm.contains(e.target) ) {
        searchForm.classList.remove('active');
    }
    if( !scb.contains(e.target) && !shoppingCart.contains(e.target) ) {
        shoppingCart.classList.remove('active');
    }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelectorAll('.item-detail-button');

// Ketika tombol mata di klik
itemDetailButton.forEach ((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    }

}) 




// Ketika tombol close di klik

document.querySelector('.modal-container .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}


// Ketika di klik di luar element
window.onclick = (e) => {
    if ( e.target === itemDetailModal ) {
        itemDetailModal.style.display = 'none';
    }
}




