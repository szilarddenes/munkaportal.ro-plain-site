// start mailchimp JQ
(function($) {
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
        required: "Kötelező megadni.",
        maxlength: $.validator.format("Legfeljebb {0} karakter hosszú legyen."),
        minlength: $.validator.format("Legalább {0} karakter hosszú legyen."),
        rangelength: $.validator.format("Legalább {0} és legfeljebb {1} karakter hosszú legyen."),
        email: "Érvényes e-mail címnek kell lennie.",
        url: "Érvényes URL-nek kell lennie.",
        date: "Dátumnak kell lennie.",
        number: "Számnak kell lennie.",
        digits: "Csak számjegyek lehetnek.",
        equalTo: "Meg kell egyeznie a két értéknek.",
        range: $.validator.format("{0} és {1} közé kell esnie."),
        max: $.validator.format("Nem lehet nagyobb, mint {0}."),
        min: $.validator.format("Nem lehet kisebb, mint {0}."),
        creditcard: "Érvényes hitelkártyaszámnak kell lennie."
    });
}(jQuery));
var $mcj = jQuery.noConflict(true);
</script>
// end mailchimp JQ

//start iheader.js
(function() {
    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
    var header = document.getElementById('site-header');
    var pageYOffset = 0;
    header.classList.add('transpp');

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop || pageYOffset;
        if (curScroll > prevScroll) {
            //scrolled up
            direction = 2;
        } else if (curScroll < prevScroll) {
            //scrolled down
            direction = 1;
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }
        if (window.pageYOffset <= 5) {
            header.classList.add('transpp');
            // prevDirection = direction;
        } else if (window.pageYOffset >= 30) {
            header.classList.remove('transpp');
            // prevDirection = direction;
        }

        prevScroll = curScroll;
    };

    var toggleHeader = function(direction, curScroll) {
        if (direction === 2 && curScroll > 100) {
            //replace 52 with the height of your header in px

            header.classList.add('hide');
            prevDirection = direction;
        } else if (direction === 1) {
            header.classList.remove('hide');
            prevDirection = direction;
        }
    };

    window.addEventListener('scroll', checkScroll);
})();


//end iheader.js
