var basicTimeline = anime.timeline({
  autoplay: false,
});

var pathEls = $('.checkSubmit');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
}

basicTimeline
  .add({
    targets: '.textSubmit',
    duration: 1,
    opacity: '0',
  })
  .add({
    targets: '.buttonSubmit',
    duration: 1300,
    height: 10,
    width: 300,
    backgroundColor: '#2B2D2F',
    border: '0',
    borderRadius: 100,
  })
  .add({
    targets: '.progress-barSubmit',
    duration: 2000,
    width: 300,
    easing: 'linear',
  })
  .add({
    targets: '.buttonSubmit',
    width: 0,
    duration: 1,
  })
  .add({
    targets: '.progress-bar',
    width: 80,
    height: 80,
    delay: 500,
    duration: 750,
    borderRadius: 80,
    backgroundColor: '#71DFBE',
  })
  .add({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: 200,
    easing: 'easeInOutSine',
  });

$('.button').click(function () {
  basicTimeline.play();
});

$('.text').click(function () {
  basicTimeline.play();
});
