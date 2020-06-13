$(window).on('load resize orientationchange', normalizeSlideHeights);

$(document).ready(function () {
  $('#carousel').swiperight(function () {
    $(this).carousel('prev');
  });
  $('#carousel').swipeleft(function () {
    $(this).carousel('next');
  });
});

$('.carousel').carousel();
$('.carousel').carousel({
  // percent-per-second
  // default is 50
  // false = disable touch swipe
  swipe: 80,
});


// -----------------
$(document).ready(function () {

$(function(){
  // Bind the swiperightHandler callback function to the swipe event on div.box
$( "carousel" ).on( "swiperight", swiperightHandler );

// Callback function references the event target and adds the 'swiperight' class to it
function swiperightHandler( event ){
  $( event.target ).addClass( "swiperight" );
}
});
$(function(){
  // Bind the swipeleftHandler callback function to the swipe event on div.box
$( "carousel" ).on( "swipeleft", swipeleftHandler );

// Callback function references the event target and adds the 'swipeleft' class to it
function swipeleftHandler( event ){
  $( event.target ).addClass( "swipeleft" );
}
});


}