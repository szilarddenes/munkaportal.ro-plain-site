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

// start carousel normalize and
