$(document).ready(function() {
    $(".increment").click(function() {
      var $parent = $(this).closest('.products__actions-item');
      var $counter = $parent.find('.products__actions-counter p');
      var count = parseInt($counter.text());

      $counter.text(count + 1);
    });

    $(".decrement").click(function() {

      var $parent = $(this).closest('.products__actions-item');
      var $counter = $parent.find('.products__actions-counter p');
      var count = parseInt($counter.text());

      if (count > 1) {
        $counter.text(count - 1);
      }
    });
  });
  