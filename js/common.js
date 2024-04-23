// бургер

$(document).ready(function () {
  $(".header__burger").click(function () {
    $(".header__burger-wrapper").toggleClass("header__burger-wrapper--active");
    $(".header__burger").toggleClass("header__burger--active");
  });
});

//счетчик

$(document).ready(function () {
  $(".increment").click(function () {
    var $parent = $(this).closest(".products__actions-item");
    var $counter = $parent.find(".products__actions-counter p");
    var count = parseInt($counter.text());

    $counter.text(count + 1);
  });

  $(".decrement").click(function () {
    var $parent = $(this).closest(".products__actions-item");
    var $counter = $parent.find(".products__actions-counter p");
    var count = parseInt($counter.text());

    if (count > 1) {
      $counter.text(count - 1);
    }
  });
});

//аккордеон

$(".rent__overview-right-wrapper").click(function () {
  var $parent = $(this).closest(".rent__overview-right");
  var $items = $parent.find(".rent__overview-right-items");
  var $arrow = $(this).find(".arrow-icon");

  $parent.toggleClass("active");
  $items.slideToggle(200);

  if ($parent.hasClass("active")) {
    $arrow.addClass("up");
  } else {
    $arrow.removeClass("up");
  }

  $(".rent__overview-right")
    .not($parent)
    .removeClass("active")
    .find(".rent__overview-right-items")
    .slideUp(200);
});

$(".products__categories-item-parent").click(function () {
  var $parent = $(this).closest(".products__categories-item");
  var $items = $parent.find(".products__categories-accordion");
  var $arrow = $(this).find(".products-icon");

  $parent.toggleClass("active");
  $items.slideToggle(200);

  if ($parent.hasClass("active")) {
    $arrow.addClass("up");
  } else {
    $arrow.removeClass("up");
  }

  $(".products__categories-item")
    .not($parent)
    .removeClass("active")
    .find(".products__categories-accordion")
    .slideUp(200);
});

$(".products__filter-parent").click(function (event) {
  event.stopPropagation();

  var $parent = $(this).closest(".products__filter");
  var $items = $parent.find(".filter-popup");
  var $arrow = $(this).find("svg");

  $parent.toggleClass("active");
  $items.slideToggle(200);

  if ($parent.hasClass("active")) {
    $arrow.addClass("up");
  } else {
    $arrow.removeClass("up");
  }

  $(".products__filter")
    .not($parent)
    .removeClass("active")
    .find(".filter-popup")
    .slideUp(200);
});

$(document).click(function (event) {
  if (!$(event.target).closest(".products__filter").length) {
    $(".filter-popup").slideUp(200);
    $(".products__filter").removeClass("active");
    $(".products__filter-parent svg").removeClass("up");
  }
});

//модалка

$(document).ready(function () {
  $(".fancybox").fancybox();
});

// модалка (полит конфиденц)

$(document).ready(function () {
  const $link = $("#policyLink");
  const $modal = $("#policyModal");
  const $closeIcon = $("#closeIcon");
  const $body = $("body");

  $link.on("click", function () {
    $modal.css("display", "flex");
    $body.css("overflow", "hidden");
  });

  $closeIcon.on("click", function () {
    $modal.css("display", "none");
    $body.css("overflow", "auto");
  });

  $(window).on("click", function (e) {
    if ($(e.target).is($modal)) {
      $modal.css("display", "none");
      $body.css("overflow", "auto");
    }
  });
});

//попапы

$(".header__navbar-icon1").click(function (e) {
  e.preventDefault();
  if ($(".header__navbar-popup1").is(":hidden")) {
    $(".header__navbar-popup1").slideDown(200);
    $(".header__navbar-popup2").slideUp(200);
    $(".header__navbar-icon2").removeClass("active");
    $(this).addClass("active");
  } else {
    $(".header__navbar-popup1").slideUp(200);
    $(this).removeClass("active");
  }
});

$(".header__navbar-icon2").click(function (e) {
  e.preventDefault();
  if ($(".header__navbar-popup2").is(":hidden")) {
    $(".header__navbar-popup2").slideDown(200);
    $(".header__navbar-popup1").slideUp(200);
    $(".header__navbar-icon1").removeClass("active");
    $(this).addClass("active");
  } else {
    $(".header__navbar-popup2").slideUp(200);
    $(this).removeClass("active");
  }
});

{
  if ($(window).width() > 1919) {
    $(document).mouseup(function (e) {
      var container = $(".header__navbar-popup1");
      if (container.has(e.target).length === 0) {
        $(".header__navbar-popup1").slideUp(200);
        $(".header__navbar-icon1").removeClass("active");
      }
    });
  }
}

// поиск в header

$(document).ready(function () {
  // Обработчик клика на иконку поиска
  $(".header__search-icon").click(function () {
    // Закрытие меню, если ширина окна меньше 992 пикселей
    if ($(window).width() < 992) {
      $(".header-bottom").slideUp(200);
      $(".sandwich").removeClass("active");
    }

    // Плавное открытие/закрытие поля поиска
    $(".header__search input[type='text']").slideToggle(200);

    // Переключение прозрачности иконок
    $(".header__search-icon").toggleClass("hidden");
    $(".open-search").toggleClass("hidden", !$(this).hasClass("hidden"));

    // Переключение видимости кнопки поиска
    $(".btn-search").toggleClass("hidden");
  });

  // Обработчик клика на иконку закрытия поиска
  $(".open-search").click(function () {
    // Плавное закрытие поля поиска
    $(".header__search input[type='text']").slideUp(200);

    // Переключение прозрачности иконок
    $(".header__search-icon").toggleClass("hidden");
    $(".open-search").toggleClass("hidden", !$(this).hasClass("hidden"));

    // Переключение видимости кнопки поиска
    $(".btn-search").toggleClass("hidden");
  });
});

//слайдеры

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

//табы

$(document).ready(function () {
  const $tabs = $(".services__tab");
  const $tabContents = $(".services__content");

  function hideAllTabContents() {
    $tabContents.hide();
  }

  function showTabContent(index) {
    hideAllTabContents();
    $tabContents.eq(index).show();
  }

  $tabs.each(function (index) {
    $(this).on("click", function () {
      $tabs.removeClass("tab--active");
      $(this).addClass("tab--active");
      showTabContent(index);
    });
  });

  showTabContent(1);
});
