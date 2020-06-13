$(window).on(
    'load resize orientationchange',
    normalizeSlideHeights);


$(document).ready(function() {
    $("#carousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $("#carousel").swipeleft(function() {
        $(this).carousel('next');
    });
});

$(".carousel").carousel();
$(".carousel").carousel({

    // percent-per-second
    // default is 50
    // false = disable touch swipe
    swipe: 80

});