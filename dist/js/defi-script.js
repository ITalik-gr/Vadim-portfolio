// let text1 = document.querySelector('.header-name');
// let text2 = document.querySelector('.header-title'),
//     text3 = document.querySelector('.header-subtitle'),
    nav = document.querySelector('.nav-wrap'),
    logo = document.querySelector('.preloader-card');

    // function text_anim () {
    //   text2.classList.add('text-anim');
    //   text3.classList.add('text-anim');
    // }
    function opacity () {
      nav.classList.add('opacity-animate')
    }
    function scale () {
      logo.classList.add('preloader-card__active')
    }

window.onload = function () {
  let ab = setTimeout(function() {
    scale();
    document.querySelector('.preloader').classList.add('preloader-none');
  }, 1000)
  let aa = setTimeout(function() {
    // text_anim();
    opacity();
  }, 1800)

}



let nav_toggle = document.querySelector('.nav-toggle'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu-close');


nav_toggle.addEventListener('click', function() {
  menu.classList.add('menu-active')
});
close.addEventListener('click', function() {
  menu.classList.remove('menu-active')
});


AOS.init({
  // Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 125, // offset (in px) from the original trigger point
  delay: 340,
  duration: 900, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});