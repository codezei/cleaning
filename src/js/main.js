// import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';

function main() {
  scrollSmooth();
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
} else {
  main();
};

let wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)

window.addEventListener("load", function() {
  wow.init();
  hideLoader ()
  $('.works__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true
  });
  $(".twentytwenty-container").twentytwenty({
    default_offset_pct: 0.5, // How much of the before image is visible when the page loads
    orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
    no_overlay: true, //Do not show the overlay with before and after
    move_slider_on_hover: true, // Move slider on mouse hover?
    move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
    click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
  });


})


function hideLoader () {
  let loader = document.querySelector(".loader-wrap")
  loader.style.display = "none"
}


function hoverProcessItems () {
  let items = document.querySelectorAll('.process__item')
  let visualItems = document.querySelectorAll('.process-visual__item')
  for(let i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseover', function (e) {
      visualItems[i].classList.add("active")
    })
    items[i].addEventListener('mouseout', function (e) {
      visualItems[i].classList.remove("active")
    })
  }
}

hoverProcessItems ()

function toggleMenu () {
  let btn = document.querySelector(".header__btn")
  let menu = document.querySelector(".header-mob")


  btn.addEventListener('click', function(e) {
    menu.style.display = "block"
    setTimeout(function(){
      menu.classList.add("header-mob--open")
    }, 100)
  })

  menu.addEventListener("click", function (e) {
    if (e.target.classList.contains("header-mob__close") || e.target === e.currentTarget) {
      menu.classList.remove("header-mob--open")
      setTimeout(function(){
        menu.style.display = "none"
      }, 400)
    } else if (e.target.classList.contains("menu__link")) {
      menu.classList.remove("header-mob--open")
      setTimeout(function(){
        menu.style.display = "none"
      }, 400)
    }
  })
}

toggleMenu ()