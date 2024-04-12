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

$(".payment__slider").slick({
  arrows: true,
  infinite: true,
  touchThreshold: 1000,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: false,
  nextArrow: document.querySelector(".slick-next-payment"),
  prevArrow: document.querySelector(".slick-prev-payment"),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        adaptiveHeight: true,
      },
    },
  ],
});

function initMobileSlider() {
  $(".payment__slider").slick({
    arrows: true,
    infinite: true,
    touchThreshold: 1000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: $(".slick-next-payment"),
    prevArrow: $(".slick-prev-payment"),
  });
}

$(window).resize(function () {
  if ($(window).width() < 992) {
    $(".payment__slider").slick("unslick"); // Уничтожаем текущий слайдер
    initMobileSlider(); // Инициализируем мобильный слайдер
  }
});
