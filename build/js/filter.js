(function(){

  $(".filter__toggle").click(function (event) {
    event.preventDefault();
    $(".filter__form").toggleClass("filter__form--full");

    $(".filter__toggle").toggleClass("filter__toggle--less");
  });

})();
