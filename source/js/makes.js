'use strict';

(function(){

  $(".makes__toggle").click(function () {
    $(".makes__list--makes").toggleClass("makes__list--full");

    $(".makes__toggle").toggleClass("makes__toggle--less");
  })

})();
