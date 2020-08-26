(function ($) {
  $(function () {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

  });
})(jQuery);


$(document).ready(function () {




  $(".section-2 .slider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]

  });

  $(".section-5 .slider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,


  });

  $(".section-18 .slider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });




  $(".section-two .slider").slick({
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendDots: $(".section-two .navigation-dots"),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,

        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,

        }
      },

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,

        }
      }





    ]

  });


  $(".header .lang .select").click(function () {
    $(this).next().slideToggle();
  });

  $(".page-account .board-history .search-show .show-select").click(function () {
    $('.page-account .board-history .search-show .show-select .click').slideToggle();
  });

  $(".page-account .head-account .select").click(function () {
    $(this).next().slideToggle();
  });

  $(".page-help-center .tabs__content .item-question .name").click(function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass('active');
  });

  $(".header .lang .hover span").click(function () {
    $('.header .lang .hover').slideToggle();
  });

  $(".section-services .how-much-you-will .select-col .select").click(function () {
    $('.section-services .how-much-you-will .select-col .hover').slideToggle();
  });



  /* popup */

  $(".signinopen").click(function () {
    $('#signin').slideToggle(0);
  });

  $(".signupopen").click(function () {
    $('#signup').slideToggle(0);
  });

  $(".popup-block .block .close").click(function () {
    $('.popup-block').hide(0);
  });

  $(".popup-bg").click(function () {
    $('.popup-block').hide(0);
  });


  $(".moneybox button").click(function () {
    $('.page-account .section-six').slideDown(100)
  })

  // Tarif spoiler

  $(".holder button").click(function () {
    $('.page-account .section-six').slideDown(500)
  })

  // Deposit page slider

  $('.depositcards__content').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })

  // Webinar slider
  $('.pastweb__items').slick({
    slidesToShow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })
});





jQuery(document).ready(function ($) {
  var windowWidth = $(window).width();
  if (windowWidth > 1000) {


    Revealator.scroll_padding = '-550';
    Revealator.effects_padding = '-550';

  }

  else {


    $(".mobile-menu-icon").click(function () {
      $('.header .menu').slideToggle();
    });

    $(".open-sidebar-menu").click(function () {
      $('.page-account .sidebar').slideToggle();
    });

    $(".page-account .sidebar .close-sidebar").click(function () {
      $('.page-account .sidebar').slideToggle();
    });

    $(".open-menu-main").click(function () {
      $('.page-account .head-account .menu').slideToggle();
    });

    $(".header .menu li.sub").click(function () {
      $(this).find('ul').slideToggle();
    });
    $(".footer .col li.sub").click(function () {
      $(this).find('ul').slideToggle();
    });



    Revealator.scroll_padding = '-5250';
    Revealator.effects_padding = '-5250';

  }

});


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll()
  }, 300);
}