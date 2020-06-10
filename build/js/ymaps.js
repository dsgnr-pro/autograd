//Yandex.Maps

var coordinates = [55.579720, 37.590434];
var iconSize = [48, 48];

if (window.matchMedia("(max-width: 767px)").matches) {
  iconSize = [48, 48];
  iconOffset = [-24, -24];
}

ymaps.ready(function() {

  var myMap = new ymaps.Map("map", {
      center: coordinates,
      zoom: 15,
      behaviors: ["default", "scrollZoom"],
      controls: [],
    }, {
      searchControlProvider: "yandex#search"
    }),

    myPlacemark = new ymaps.Placemark([55.579720, 37.590434],

      {

      },

      {
        iconLayout: "default#image",
        iconImageHref: "../img/map-pin.svg",
        iconImageSize: iconSize
      });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("scrollZoom");

});
