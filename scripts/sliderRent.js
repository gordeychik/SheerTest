$('.rent__slider').slick({
    arrows: true,
    infinite: true,
    touchThreshold: 1000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    appendArrows: $(".controls-slider_company"),
    prevArrow: '<div class="slick-prev slick-arrow"><img src="./assets/icons/prevSlide.svg" alt="prev" /></div>',
    nextArrow: '<div class="slick-next slick-arrow"><img src="./assets/icons/nextSlide.svg" alt="next" /></div>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                adaptiveHeight: true
            }
        }
    ]
});

