if (window.matchMedia("(max-width: 767px)").matches) {
  $('.slider-car--vertical').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    rows: 0,
    arrows: true,
  });
};

$('.popular__list').slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  autoplay: false,
  rows: false,
  responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//Slider

$('.reviews__list--slider').slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  autoplay: false,
  infinite: false,
  rows: false,
  responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


//Slider

$('.slider-index').slick({
  dots: false,
  rows: false,
  responsive: [{
    breakpoint: 767,
    settings: {
      arrows: false
    }
  }]
});

$('.slider-reviews').slick({
  arrows: false,
  dots: true,
  responsive: [{
      breakpoint: 1900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-achieve').slick({
  arrows: false,
  dots: true
});

$('.benefits--slider').slick({

});

$('.slider-tech').slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  rows: false,
  responsive: [{
    breakpoint: 767,
    settings: {
      dots: true
    }
  }]
});

$(".slider-car a").click(function (evt) {
  evt.preventDefault();
});

$('.slider-car--pc').slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  asNavFor: '.slider-nav-car',
  rows: false,
});

$('.slider-car--mobile').slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  asNavFor: '.slider-nav-car'
});

$('.slider-nav-car').slick({
  arrows: false,
  dots: false,
  slidesToShow: 5,
  rows: false,
  asNavFor: '.slider-car--pc',
  centerMode: false,
  focusOnSelect: true,
  slidesToScroll: 1,
  focusOnSelect: true
});

if (window.matchMedia("(max-width: 767px)").matches) {
  $('.slider-car--vertical').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    rows: 0,
    arrows: true,
  });
};


$('.slider-banks').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  rows: false,
  infinite: true,
  responsive: [{
      breakpoint: 1900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.slider-dealer').slick({
  arrows: true,
  dots: false,
  autoplay: true,
  slidesToShow: 3,
  responsive: [{
      breakpoint: 1900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
