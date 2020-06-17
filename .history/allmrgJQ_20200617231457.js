// start mailchimp JQ
(function ($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = 'EMAIL';
  ftypes[0] = 'email';
  fnames[1] = 'FNAME';
  ftypes[1] = 'text';
  /*
   * Translated default messages for the $ validation plugin.
   * Locale: HU
   */
  $.extend($.validator.messages, {
    required: 'Kötelező megadni.',
    maxlength: $.validator.format('Legfeljebb {0} karakter hosszú legyen.'),
    minlength: $.validator.format('Legalább {0} karakter hosszú legyen.'),
    rangelength: $.validator.format(
      'Legalább {0} és legfeljebb {1} karakter hosszú legyen.'
    ),
    email: 'Érvényes e-mail címnek kell lennie.',
    url: 'Érvényes URL-nek kell lennie.',
    date: 'Dátumnak kell lennie.',
    number: 'Számnak kell lennie.',
    digits: 'Csak számjegyek lehetnek.',
    equalTo: 'Meg kell egyeznie a két értéknek.',
    range: $.validator.format('{0} és {1} közé kell esnie.'),
    max: $.validator.format('Nem lehet nagyobb, mint {0}.'),
    min: $.validator.format('Nem lehet kisebb, mint {0}.'),
    creditcard: 'Érvényes hitelkártyaszámnak kell lennie.',
  });
})(jQuery);
var $mcj = jQuery.noConflict(true);

// end mailchimp JQ

// start carousel normalize and toggle back
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
  
  //Start Close Bootstrap 3 navbar when a nav item is clicked
  $('.navbar-collapse ul li a:not(.dropdown-toggler)').bind('click', function () {
    $('.navbar-toggler:visible').click();
  });
  //Start Close Bootstrap 3 navbar when a nav item is clicked
// end carousel normalize and toggle back
