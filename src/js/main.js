// Our Custom Javascript or jQuery Codes is given below.
(function ($) {
  // Preloader
	var preloader = document.getElementById("preloader");
  window.addEventListener("load", function(){
    preloader.style.display = "none";
  });
  // Slider
  var owl1 = $('.slider-active');
  owl1.owlCarousel({
    margin: 0,
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    autoplaySpeed: false,
    dragEndSpeed: false,
    freeDrag: false,
    dots: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    startPosition: 0,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });
  var owl2 = $('.project-active');
  owl2.owlCarousel({
    margin: 0,
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    autoplaySpeed: false,
    dragEndSpeed: false,
    freeDrag: false,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    startPosition: 0,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });
  $('.vdo-popup').magnificPopup({
    type: 'iframe'
    // other options
  });
  $('.img-popup').magnificPopup({
    type: 'image'
    // other options
  });
  var owl3 = $('.blog-active');
  owl3.owlCarousel({
    margin: 0,
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    autoplaySpeed: false,
    dragEndSpeed: false,
    freeDrag: false,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    startPosition: 0,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });
  var owl4 = $('.brand-active');
  owl4.owlCarousel({
    margin: 30,
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    autoplaySpeed: false,
    dragEndSpeed: false,
    freeDrag: false,
    dots: false,
    nav: false,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    startPosition: 0,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 6
      },
      1200: {
        items: 6
      }
    }
  });
  // Mean Menu
  $('.mobile-menu').meanmenu({
    meanMenuContainer: "#mobile-menu-active",
    meanScreenWidth: 767
  });
})(jQuery);