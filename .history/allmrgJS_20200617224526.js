// start navbar nyitva
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

// end navbar nyitva

//fb-page fb-p