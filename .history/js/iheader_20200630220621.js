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

//Close Bootstrap 3 navbar when a nav item is clicked
$('.navbar-collapse ul li a:not(.dropdown-toggler)').bind('click', function () {
  var hasflagActive = document.querySelector('.flagActive');

  $('.navbar-toggler:visible').click();
 });

 //nyitva
 const menuBtn = document.querySelector('.navbar-toggler');
const navbarBcg = document.querySelector('.navbar');
const navbarFlexJustify = document.querySelector('.navbar-collapse');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('nyitva');
    navbarBcg.classList.add('nyitva');
    navbarFlexJustify.classList.add('nyitva');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('nyitva');
    navbarBcg.classList.remove('nyitva');
    navbarFlexJustify.classList.remove('nyitva');
    menuOpen = false;
  }
});




