(function () {
  tippy('[data-tippy-content]');
})();

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'showImageNumberLabel': false,
});

if (window.matchMedia("(min-width: 768px)").matches) {
  $('.select').select2({
    minimumResultsForSearch: -1
  });
  $('.select--search').select2({
    minimumResultsForSearch: 1
  });
  $('.select--datalist').select2({
    tags: true
  });
}

$('.popup--link').magnificPopup({
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function () {
      this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

//Mask

$("#phone").mask("(999) 999-99-99");

$("#date").mask("99/99/9999");

//Presents

$(".car__presents-item").on("click", function () {

  var present = $(".car__presents-item");

  // Удаляем классы active
  present.removeClass("car__presents-item--active");
  // Добавляем классы active
  $(this).addClass("car__presents-item--active");

  return false;
});

//Tabs-Car

$(".car__details-block").on("click", ".car__info-tab", function () {

  var tabs = $(".car__info-tab"),
    cont = $(".car__info-block");

  // Удаляем классы active
  tabs.removeClass("car__info-tab--active");
  cont.removeClass("car__info-block--active");
  // Добавляем классы active
  $(this).addClass("car__info-tab--active");
  cont.eq($(this).index()).addClass("car__info-block--active");

  return false;
});

//Tabs-Car-Mobile

$(".car__details-block--mobile").on("click", ".car__info-tab", function () {

  var tabs = $(".car__details-block--mobile .car__info-tab"),
    cont = $(".car__details-block--mobile .car__info-block");

  // Удаляем классы active
  tabs.removeClass("car__info-tab--active");
  cont.removeClass("car__info-block--active");

  // Добавляем классы active
  $(this).addClass("car__info-tab--active");
  cont.eq($(this).index()).addClass("car__info-block--active");

});

//Slider

//Filter

$(".catalog__filter-btn").click(function () {
  $('.form__select-wrapper .select2').css('width', '100%');
  $(".catalog__credit-wrap").slideToggle(50);
  $(".catalog__form-wrap").slideToggle(50);

  $(".catalog__filter-btn").toggleClass("catalog__filter-btn--active");
})

//Catalog-Credit

$(".catalog__credit-btn").click(function () {
  $('.form__select-wrapper .select2').css('width', '100%');
  $(".catalog__form-wrap").slideToggle(50);
  $(".catalog__credit-wrap").slideToggle(50);

  $(".catalog__credit-btn").toggleClass("catalog__credit-btn--active");
})

//Mobile-Menu

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

// navToggle.addEventListener("click", function() {
//   if (navMain.classList.contains("main-nav--closed")) {
//     navMain.classList.remove("main-nav--closed");
//     navMain.classList.add("main-nav--opened");
//   } else {
//     navMain.classList.add("main-nav--closed");
//     navMain.classList.remove("main-nav--opened");
//   }
// });
//
// navToggle.addEventListener("click", function() {
//   if (navToggle.classList.contains("main-nav__toggle--active")) {
//     navToggle.classList.remove("main-nav__toggle--active");
//   } else {
//     navToggle.classList.add("main-nav__toggle--active");
//   }
// });

$(".main-nav__toggle").click(function () {
  $('.main-nav__list').slideToggle();
  $(this).toggleClass("main-nav__toggle--active");
});


//Input-Error

$(".form__button").click(function () {
  $(".form__input[required]").each(function () {
    if ($(this).val().length == 0) {
      $(this).addClass("form__input--error");
    } else {
      $(this).removeClass("form__input--error");
    }
  });
});

$(document).on("input change", ".form__input", function () {
  $(this).removeClass("form__input--error");
});

$(".goods__button").attr("href", "modal.html");

$(".goods-add__button").attr("href", "modal.html");

$(".more__button").attr("href", "");

//Input-Error

if (window.matchMedia("(min-width: 768px)").matches) {
  $(document).ready(function () {
    $(".compare__img").brazzersCarousel();
  });
}

if (window.matchMedia("(min-width: 768px)").matches) {
  $(document).ready(function () {
    $(".catalog__car-img").brazzersCarousel();
  });
}

// if (window.matchMedia("(min-width: 768px)").matches) {
//   $(document).ready(function() {
//     $('.select').select2({
//       minimumResultsForSearch: -1
//     });
//     $('.select--search').select2({
//       minimumResultsForSearch: 1
//     });
//   });
// }

//New

$('.car__photos').slick({
  dots: true,
  responsive: [{
    breakpoint: 767,
    settings: {
      arrows: false
    }
  }]
});


$('.slider-new--main').slick({
  arrows: false,
  dots: false,
  slidesToShow: 1,
  rows: 0,
  asNavFor: '.slider-nav--main',
  fade: true
});

$('.slider-nav--main').slick({
  asNavFor: '.slider-new--main',
  dots: false,
  focusOnSelect: true,
  infinite: true,
  rows: 0,
  arrows: true,
  responsive: [{
      breakpoint: 1900,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4
      }
    }
  ]
});


$('.slider-new--configurator').slick({
  arrows: false,
  dots: false,
  slidesToShow: 1,
  rows: 0,
  asNavFor: '.slider-nav--configurator',
  fade: true
});

$('.slider-nav--configurator').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-new--configurator',
  dots: false,
  focusOnSelect: true,
  infinite: true,
  rows: 0,
  arrows: true
});

$(".configurator__tabs").on("click", ".configurator__tab", function () {

  var tabs = $(".configurator__tab"),
    cont = $(".configurator__step");

  // Удаляем классы active
  tabs.removeClass("configurator__tab--active");
  cont.addClass("visually-hidden");
  // Добавляем классы active
  $(this).addClass("configurator__tab--active");
  cont.eq($(this).index()).removeClass("visually-hidden");

  return false;
});

$('.configurator__next').click(function () {
  $('.configurator__tab--active').next('.configurator__tab').trigger('click');
});

//Header
if (window.matchMedia("(min-width: 1199px)").matches) {
  $(window).scroll(function () {
    var sticky = $('.page-header'),
      scroll = $(window).scrollTop(),
      container = $('.page-main');

    if (scroll >= 480) {
      sticky.addClass('page-header--sticky');
      container.addClass('page-main--sticky');
    } else {
      sticky.removeClass('page-header--sticky');
      container.removeClass('page-main--sticky');
    }
  });
}

//Header
if (window.matchMedia("(max-width: 767px)").matches) {

  $('.page-banner__wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    rows: 0,
    arrows: true
  });
}

$('.popup--link').magnificPopup({
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function () {
      this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});