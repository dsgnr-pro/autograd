$(`.catalog__toggle-view--cards`).click(function () {
  $(`.catalog__car-item`).removeClass(`catalog__car-item--long`);
  $(`.catalog__car-item`).addClass(`col-lg-3`);
  $(`.catalog__car-item`).removeClass(`col-lg-12`);
});

$(`.catalog__toggle-view--rows`).click(function () {
  $(`.catalog__car-item`).addClass(`catalog__car-item--long`);
  $(`.catalog__car-item`).removeClass(`col-lg-3`);
  $(`.catalog__car-item`).addClass(`col-lg-12`);
});

if (window.matchMedia("(max-width: 768px)").matches) {
  $(`.catalog__toggle-view--cards`).click(function () {
    $(`.catalog__car-item`).addClass(`catalog__car-item--card`);
    $(`.catalog__car-item`).addClass(`col-6`);
    $(`.catalog__car-item`).removeClass(`col-12`);
  });

  $(`.catalog__toggle-view--rows`).click(function () {
    $(`.catalog__car-item`).removeClass(`catalog__car-item--card`);
    $(`.catalog__car-item`).removeClass(`col-6`);
    $(`.catalog__car-item`).addClass(`col-12`);
  });
}
