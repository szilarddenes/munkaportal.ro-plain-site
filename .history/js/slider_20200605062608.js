/***the goal is to normalize the height of the BS. Carousel slides.
 * src: https://gist.github.com/marcbacon/eff3015fe96582806da5?fbclid=IwAR3Oyyo4-8POupH4EEWOCSbj8eVUXIllK6OGoLXzZ3N0QYQFcdMqS-jE6qA */

 // Set all carousel items to the same height
 function carouselNormalization() {
        
    window.heights = [], //create empty array to store height values
    window.tallest; //create variable to make note of the tallest slide

    
    function normalizeHeights() {


        jQuery('.sc_slides .item').each(function() { //add heights to array
            window.heights.push(jQuery(this).outerHeight());
        });
        window.tallest = Math.max.apply(null, window.heights); //cache largest value
        jQuery('.sc_slides .item').each(function() {
            jQuery(this).css('min-height',tallest + 'px');
        });
    }
    normalizeHeights();

    

    jQuery(window).on('resize orientationchange', function () {
        
        window.tallest = 0, window.heights.length = 0; //reset vars
        jQuery('.sc_slides .item').each(function() {
            jQuery(this).css('min-height','0'); //reset min-height
        }); 
        
        normalizeHeights(); //run it again 

    });
    
}

jQuery( document ).ready(function() {
    carouselNormalization();
});
