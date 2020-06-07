// src:https://codepen.io/kathee/details/JjYMYgm

// let myAnimation = anime
// ({
/* describe the animation details */

// var x = 800;
// var tl = anime.timeline({

//     easing: 'linear',
//     direction: 'forward',
//     duration: 1000,
//     loop: true,

// });


// // Add children
// tl
// .add
const myAnimation = anime({
    easing: 'linear',
    direction: 'forward',
    duration: 1000,
    loop: true,
    targets: '#svgFacebookwhiteHeart',
    translateY: [
        { value: 250, duration: 150 },

        { value: 50, duration: 250 },

        { value: 0, duration: 400 },

    ],
    rotate: [

        { value: 25, duration: 150 },



        { value: -25, duration: 250 },


        { value: 0, duration: 400 },

    ],
    scale: [
        { value: 0.7, duration: 150 },
        { value: 1.5, duration: 250 },
        { value: 1, duration: 400 },
        { value: 1, duration: 400 },


    ],


}, '+=' + 1000)

anime({
    targets: 'svgFacebookwhiteHeart .el',
    left: '240px',
    backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad'
  });