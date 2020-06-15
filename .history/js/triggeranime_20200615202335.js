var myElement = document.getElementById('count1');
var bounding = myElement.getBoundingClientRect();
var myElementHeight = myElement.offsetHeight;
var myElementWidth = myElement.offsetWidth;
let inviewport = [];
console.log(myElement.offsetWidth);
console.log(myElement.offsetHeight);
console.log(myElement.getBoundingClientRect);
console.log(window.innerHeight);

function elementInViewport() {
  var bounding = myElement.getBoundingClientRect();

  if (
    bounding.top >= -myElementHeight &&
    bounding.left >= -myElementWidth &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) +
        myElementWidth &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        myElementHeight
  ) {
      var inviewport = 1;
    console.log('Element is in the viewport!');
    document.getElementById("count1").style.color = "blue";
  } else {
    console.log('Element is NOT in the viewport!');
    var inviewport = 2;
  }
 
}
console.log('inviewport',inviewport);

//id="svgFacebookwhiteHeart" class="st1 beatheart"
