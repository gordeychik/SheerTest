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
  
    $(".rent__overview-right").not($parent).removeClass("active").find(".rent__overview-right-items").slideUp(200);
  });