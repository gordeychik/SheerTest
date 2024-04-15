$(".rent__overview-right-icon").click(function () {
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
