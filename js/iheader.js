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
        /*
         ** Find the direction of scroll
         ** 0 - initial, 1 - up, 2 - down
         */
        //set transparent by default

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
        if (direction === 2 && curScroll > 20) {
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

// What it does
// First, we calculate the initial scroll position and assign it to the variable prevScroll.Also, we initiate a variable direction with value zero.

// The

// function checkScroll()
// The

// function checks the current scroll position and saves it to the variable curScroll Then we check its value against the previous scroll position to find whether the user has scrolled up or down.We assign the value to the variable direction.

// For better performance, we want to toggle the visibility of the header only
// if the direction of scrolling has changed.So we compare the current direction against the previous direction and call the

// function toggleHeader accordingly.

// The

// function toggleHeader()
// This

// function receives the direction and scroll amount as parameters.It adds the class hide when the direction is down and scroll amount is greater than 52 px(the header height).Otherwise, it removes the class hide.