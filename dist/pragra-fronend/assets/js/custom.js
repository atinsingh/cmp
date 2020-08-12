// SCROLL TOP TO BOTTOM
$(document).on('click', '#scrollToTop', function () {
  $('html,body').animate({
    scrollTop: 0
  }, 500);
  return false;

});
//BUTTON CONTROL
$(document).scroll(function (e) {
  var scrollPos = $(this).scrollTop();
  if (scrollPos < 100) {
    $('#scrollToTop').addClass('scroll-hide');
  } else {
    $('#scrollToTop').removeClass('scroll-hide');
  }
});
// SCROLL TOP TO BOTTOM
//NAVIGATION FIXED
// $(window).scroll(function(){
//      if($(this).scrollTop()>100){
//        $('.navigation-strip').addClass("sticky");
//     }
//     else{
//       $('.navigation-strip').removeClass("sticky");
//     }
//   })
//NAVIGATION FIXED
$(document).ready(function () {
  var owl = $('#owl-introducing-courses-slider');
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      576: {
        items: 2,
        nav: true
      },
      768: {
        items: 3,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
      }
    }
  });
});
//INTRODUCING-COURSES-SLIDER
//CLOUD-DEVOPS-SLIDER
$(document).ready(function () {
  var owl = $('#owl-cloud-devops-slider');
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      576: {
        items: 2,
        nav: true
      },
      768: {
        items: 3,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
      }
    }
  });
});
//CLOUD-DEVOPS-SLIDER
//POPULAR-COURSES-INCLASS-SLIDER
$(document).ready(function () {
  var owl = $('#owl-popular-courses-inclass-slider');
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      576: {
        items: 2,
        nav: true
      },
      768: {
        items: 3,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
      }
    }
  });
});
//POPULAR-COURSES-INCLASS-SLIDER
//INTRODUCING-COURSES-INCLASS-SLIDER
$(document).ready(function () {
  var owl = $('#owl-introducing-courses-inclass-slider');
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      576: {
        items: 2,
        nav: true
      },
      768: {
        items: 3,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
      }
    }
  });
});
//INTRODUCING-COURSES-INCLASS-SLIDER
//CLOUD-DEVOPS-INCLASS-SLIDER
$(document).ready(function () {
  var owl = $('#owl-cloud-devops-inclass-slider');
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      576: {
        items: 2,
        nav: true
      },
      768: {
        items: 3,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
      }
    }
  });
});
//INTRODUCING-COURSES-INCLASS-SLIDER
//NEW-HOME-COURSES-SLIDER
$(document).ready(function () {
  var owl = $('#owl-new-home-courses-slider');
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      576: {
        items: 2,
        nav: true
      },
      768: {
        items: 3,
        nav: true
      },
      992: {
        items: 4,
        nav: true,
      }
    }
  });
});
//NEW-HOME-COURSES-SLIDER
//NEW-HOME-BEST-MENTORS
$(document).ready(function () {
  var owl = $('#owl-new-home-best-mentors');
  owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 15,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      576: {
        items: 3,
        nav: true
      },
      768: {
        items: 3,
        nav: true
      },
      992: {
        items: 5,
        nav: true,
      }
    }
  });
});
//NEW-HOME-BEST-MENTORS
//CORPORATE-TRAINING-MOBILE-SLIDER
$(document).ready(function () {
  var owl = $('#owl-corporate-training-mobile-slider');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      576: {
        items: 2,
        nav: true
      },
    }
  });
});
//CORPORATE-TRAINING-MOBILE-SLIDER




//COURSE-CURRICULUM-ACCORDION//
$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });
});
