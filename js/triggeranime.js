/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function(elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//heartbeat start
var heart = document.getElementById('svgFacebookwhiteHeart');
window.addEventListener('scroll', function(event) {
    if (isInViewport(svgFacebookwhiteHeart)) {
        heart.classList.add("beatheart");
        // console.log(`in viewport`);
    } else {
        // console.log(`NOT in viewport`);
    }
});

//heartbeat end

//counter start
let start // set on the first step to the timestamp provided
const el1 = document.getElementById('count1') // get the element
const el2 = document.getElementById('count2') // get the element
const el3 = document.getElementById('count3') // get the element
const final1 = parseInt(el1.textContent, 10) // parse out the final number
const final2 = parseInt(el2.textContent, 10) // parse out the final number
const final3 = parseInt(el3.textContent, 10) // parse out the final number
const duration = 3500 // duration in ms
var countedUp = false;
window.addEventListener('scroll', function(event) {
    if (isInViewport(count1) && (countedUp == false)) {

        el1.classList.add("animate__headShake");
        el2.classList.add("animate__headShake");
        el3.classList.add("animate__headShake");
        countUp();

        console.log(`count1 in viewport`);
    } else {
        console.log(`count1 NOT in viewport`);
    }
});

function countUp() {
    const step = ts => {
        if (!start) {
            start = ts
        }
        // get the time passed as a fraction of total duration
        let progress = (ts - start) / duration

        el1.textContent = Math.floor(progress * final1) // set the text
        el2.textContent = Math.floor(progress * final2) // set the text
        el3.textContent = Math.floor(progress * final3) // set the text
        if (progress < 1) {
            // if we're not 100% complete, request another animation frame
            requestAnimationFrame(step)
        }
        countedUp = true;
    }

    // start the animation
    requestAnimationFrame(step)

}

//counter end

// social start
var soc1 = document.getElementById('socIG');
var soc2 = document.getElementById('socFB');
var soc3 = document.getElementById('socIN');
window.addEventListener('scroll', function(event) {
    if (isInViewport(soc1)) {
        setTimeout(flash(soc1, 2000));
        // setTimeout(flash(soc2, 2000));
        // setTimeout(flash(soc3, 2000));
        console.log(`soci in VP`);
        flash(soc1);

        // console.log(`in viewport`);
    } else {
        console.log(`soci NOT in viewport`);
    }
    console.log(`soc1`, soc1);
    console.log(`soc2`, soc2.classList);
    // console.log(`soc3`, soc3);
});

function flash(input) {
    const soci = document.getElementById('socIG');
    soci.classList.add('model-3d-0');
    soci.classList.add('back');
    soci.classList.add('instagram');
    soci.classList.add('a:hover');
    // soci.classList.add('model-3d-0');
    // soci.classList.remove('back');
    console.log(soci.classList);
}

function uflash(input) {
    const soci = document.getElementById('socIG');
    soci.classList.add('model-3d-0');
    soci.classList.add('back');
    // soci.classList.add('model-3d-0');
    // soci.classList.remove('back');
    console.log(soci.classList);
}

// social end