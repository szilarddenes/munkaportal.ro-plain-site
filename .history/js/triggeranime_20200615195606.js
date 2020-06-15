var myElement = document.getElementById('my-element');
var bounding = myElement.getBoundingClientRect();
var myElementHeight = myElement.offsetHeight;
var myElementWidth = myElement.offsetWidth;

function elementInViewport() {

    var bounding = myElement.getBoundingClientRect();

    if (bounding.top >= -myElementHeight 
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

        console.log('Element is in the viewport!');
    } else {

        console.log('Element is NOT in the viewport!');
    }
}

    //id="svgFacebookwhiteHeart" class="st1 beatheart"