$(".rent__slider").slick({
  arrows: true,
  infinite: true,
  touchThreshold: 1000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  nextArrow: document.querySelector(".slick-next"),
  prevArrow: document.querySelector(".slick-prev"),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        adaptiveHeight: true,
      },
    },
  ],
});
