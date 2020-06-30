/***the goal is to normalize the height of the BS. Carousel slides.
 * src: https://snook.ca/archives/javascript/normalize-bootstrap-carousel-heights?fbclid=IwAR31WXAwZHInpbVKG9nx3O2LVit1FiO8jlhh2xdXflq63ueIH_cU58RZ_ZE */

function normalizeSlideHeights() {
  $('.carousel').each(function () {
    var items = $('.carousel-item', this);
    // reset the height
    items.css('min-height', 0);
    // set the height
    var maxHeight = Math.max.apply(
      null,
      items
        .map(function () {
          return $(this).outerHeight();
        })
        .get()
    );
    items.css('min-height', maxHeight + 'px');
  });
}

$(window).on('load resize orientationchange', normalizeSlideHeights);

// swiper function
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