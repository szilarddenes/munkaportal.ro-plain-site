/***the goal is to normalize the height of the BS. Carousel slides.
 * src: https://snook.ca/archives/javascript/normalize-bootstrap-carousel-heights?fbclid=IwAR31WXAwZHInpbVKG9nx3O2LVit1FiO8jlhh2xdXflq63ueIH_cU58RZ_ZE */

function normalizeSlideHeights() {
    $('.carousel').each(function() {
        var items = $('.carousel-item', this);
        // reset the height
        items.css('min-height', 0);
        // set the height
        var maxHeight = Math.max.apply(
            null,
            items
            .map(function() {
                return $(this).outerHeight();
            })
            .get()
        );
        items.css('min-height', maxHeight + 'px');
    });
}

$(window).on('load resize orientationchange', normalizeSlideHeights);

$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});