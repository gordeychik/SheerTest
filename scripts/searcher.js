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
