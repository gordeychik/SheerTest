$(".header__navbar-icon1").click(function(e) {
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

$(".header__navbar-icon2").click(function(e) {
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
            if (container.has(e.target).length === 0){
                $(".header__navbar-popup1").slideUp(200);
                $(".header__navbar-icon1").removeClass("active");
            }
        });
    }
}	
