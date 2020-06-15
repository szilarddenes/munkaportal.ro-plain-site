var myElement = document.getElementById('my-element');

function elementInViewport() {

    var bounding = myElement.getBoundingClientRect();
console.log(bounding.top)
    if (bounding.top >= 0 
        && bounding.left >= 0 
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) 
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

        alert('Element is in the viewport!');
    } else {

        alert('Element is NOT in the viewport!');
    }
}

    //id="svgFacebookwhiteHeart" class="st1 beatheart"