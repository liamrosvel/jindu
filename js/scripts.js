//Variables and objects

var toggleMenu = document.getElementById('toggle-menu'),
    toggleSubmenu = document.getElementById('toggle-submenu'),
    mainNav = document.getElementById('main-nav'),
    subMenu = document.getElementById('sub-menu');

//Set functions
var showMenu = function() {
    mainNav.classList.toggle('active');
}

var changeColor = function() {
    this.classList.toggle('active-menu');
}

var showSubMenu = function() {
    subMenu.classList.toggle('show-submenu');
}

//Asigning events

toggleMenu.addEventListener('click', showMenu);

toggleSubmenu.addEventListener('click', showSubMenu);

toggleMenu.addEventListener('click', changeColor);