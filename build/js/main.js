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

  var contacts = (function () {
    var parent = document.querySelector(".contacts__right");
    var frame = document.createElement("iframe");
    frame.setAttribute("src", "https://www.google.com/maps/d/u/0/embed?mid=1K1-Ng_AzxC6SD8lJuJxZL__T9gvKXyc&ehbc=2E312F");
    frame.classList.add("contacts__map");
    parent.appendChild(frame);
  });

  var promo = (function () {
    var block = document.querySelector(".clean-process");
    block.classList.add("animate");
  });

  var callback = (function () {
    var target = document.querySelector(".callback");
    var form = document.querySelector(".callback-form");
    var formWrap = document.querySelector(".callback__form");
    var answer = document.querySelector(".callback__answer");

    function toggleCallback() {
      var btn = document.querySelector(".js-open-callback");
      btn.addEventListener("click", function () {
        target.classList.toggle("callback--open");
        answer.classList.remove("callback__answer--open");
        formWrap.style.display = "";
      });
    }

    toggleCallback();
    target.addEventListener("click", function (e) {
      console.log(e.target);

      if (e.currentTarget === e.target) {
        e.currentTarget.classList.toggle("callback--open");
      } else if (e.target.classList.contains("callback__close")) {
        e.currentTarget.classList.toggle("callback--open");
      }
    });

    function submitRequest() {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        formWrap.style.display = "none";
        answer.classList.add("callback__answer--open");
        form.reset();
      });
    }

    submitRequest();
  });

  // import './helpers/postDate';

  function main() {
    contacts();
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
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: true,
      responsive: [{
        breakpoint: 1920,
        settings: {
          slidesToShow: 1
        }
      }]
    });
    promo();
    callback(); // $(".twentytwenty-container").twentytwenty({
    //   default_offset_pct: 0.5, // How much of the before image is visible when the page loads
    //   orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
    //   no_overlay: true, //Do not show the overlay with before and after
    //   move_slider_on_hover: true, // Move slider on mouse hover?
    //   move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
    //   click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
    // });

    scrollSmooth();
    setTimeout(function () {
      hideLoader();
    }, 10000);
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

  function toggleMenu() {
    var btn = document.querySelector(".header__btn");
    var menu = document.querySelector(".header-mob");
    btn.addEventListener('click', function (e) {
      menu.style.display = "block";
      setTimeout(function () {
        menu.classList.add("header-mob--open");
      }, 100);
    });
    menu.addEventListener("click", function (e) {
      if (e.target.classList.contains("header-mob__close") || e.target === e.currentTarget) {
        menu.classList.remove("header-mob--open");
        setTimeout(function () {
          menu.style.display = "none";
        }, 400);
      } else if (e.target.classList.contains("menu__link")) {
        menu.classList.remove("header-mob--open");
        setTimeout(function () {
          menu.style.display = "none";
        }, 400);
      }
    });
  }

  toggleMenu();

  function toggleCredits() {
    var btn = document.querySelector('.credits-btn');
    var creditsBlock = document.querySelector('.credits');
    btn.addEventListener('click', function (e) {
      creditsBlock.classList.toggle('open');
    });
    creditsBlock.addEventListener('click', function (e) {
      if (e.target === e.currentTarget || e.target.classList.contains('credits__close')) {
        creditsBlock.classList.remove('open');
      }
    });
  }

  toggleCredits();

}());
//# sourceMappingURL=main.js.map
