
let nav = document.querySelector('.nav');

function opacity () {
  nav.classList.add('opacity-animate')
}
window.onload = function () {
let ab = setTimeout(function() {
document.querySelector('.preloader').classList.add('preloader-none');
}, 300)
let aa = setTimeout(function() {
opacity();
}, 3500)

}
let nav_toggle = document.querySelector('.nav-toggle'),
menu = document.querySelector('.menu');

nav_toggle.addEventListener('click', function() {
nav_toggle.classList.toggle('nav-toggle-active')
menu.classList.toggle('menu-active')
});

console.log('Frontend developing by italik');