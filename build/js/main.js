(function () {
  'use strict';

  var scrollSmooth = (function () {
    $(document).on("click", "a[href^=\"#\"]", function (event) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
      }, 500);
    });
  });

  // import './helpers/postDate';

  function main() {
    scrollSmooth();
  }

  if (document.documentElement.clientWidth < 480) {
    window.addEventListener('scroll', function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
  } else {
    main();
  }
  var wow = new WOW({
    boxClass: 'wow',
    // default
    animateClass: 'animated',
    // default
    offset: 0,
    // default
    mobile: true,
    // default
    live: true // default

  });
  window.addEventListener("load", function () {
    wow.init();
    hideLoader();
    $('.works__list').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: true
    });
    $(".twentytwenty-container").twentytwenty({
      default_offset_pct: 0.5,
      // How much of the before image is visible when the page loads
      orientation: 'horizontal',
      // Orientation of the before and after images ('horizontal' or 'vertical')
      no_overlay: true,
      //Do not show the overlay with before and after
      move_slider_on_hover: true,
      // Move slider on mouse hover?
      move_with_handle_only: true,
      // Allow a user to swipe anywhere on the image to control slider movement. 
      click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.

    });
  });

  function hideLoader() {
    var loader = document.querySelector(".loader-wrap");
    loader.style.display = "none";
  }

  function hoverProcessItems() {
    var items = document.querySelectorAll('.process__item');
    var visualItems = document.querySelectorAll('.process-visual__item');

    var _loop = function _loop(i) {
      items[i].addEventListener('mouseover', function (e) {
        visualItems[i].classList.add("active");
      });
      items[i].addEventListener('mouseout', function (e) {
        visualItems[i].classList.remove("active");
      });
    };

    for (var i = 0; i < items.length; i++) {
      _loop(i);
    }
  }

  hoverProcessItems();

}());
//# sourceMappingURL=main.js.map
