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

//start fb-page fb-plugin
(function _(a, b, c, d, e) {
  var f = window.console;
  f &&
    Math.floor(new Date().getTime() / 1e3) - b > 7 * 24 * 60 * 60 &&
    f.warn('The Facebook JSSDK is more than 7 days old.');
  if (window[c]) return;
  if (!window.JSON) return;
  var g = (window[c] = {
    __buffer: {
      replay: function () {
        var a = this,
          b = function (d) {
            var b = window[c];
            a.calls[d][0].split('.').forEach(function (a) {
              return (b = b[a]);
            });
            b.apply(null, a.calls[d][1]);
          };
        for (var d = 0; d < this.calls.length; d++) b(d);
        this.calls = [];
      },
      calls: [],
      opts: null,
    },
    getUserID: function () {
      return '';
    },
    getAuthResponse: function () {
      return null;
    },
    getAccessToken: function () {
      return null;
    },
    init: function (a) {
      g.__buffer.opts = a;
    },
  });
  for (var b = 0; b < d.length; b++) {
    f = d[b];
    if (f in g) continue;
    var h = f.split('.'),
      i = h.pop(),
      j = g;
    for (var k = 0; k < h.length; k++) j = j[h[k]] || (j[h[k]] = {});
    j[i] = (function (a) {
      if (a === 'init') return;
      return function () {
        g.__buffer.calls.push([a, Array.prototype.slice.call(arguments)]);
      };
    })(f);
  }
  k = a;
  h = /Chrome\/(\d+)/.exec(navigator.userAgent);
  h &&
    Number(h[1]) >= 55 &&
    'assign' in Object &&
    'findIndex' in [] &&
    (k += '&ua=modern_es6');
  j = document.createElement('script');
  j.src = k;
  j.async = !0;
  e && (j.crossOrigin = 'anonymous');
  i = document.getElementsByTagName('script')[0];
  i.parentNode && i.parentNode.insertBefore(j, i);
})(
  'https://connect.facebook.net/en_US/sdk.js?hash=81ab4796eb039497e42b245d1a863bd7',
  1592425804,
  'FB',
  [
    'AppEvents.EventNames',
    'AppEvents.ParameterNames',
    'AppEvents.activateApp',
    'AppEvents.clearAppVersion',
    'AppEvents.clearUserID',
    'AppEvents.getAppVersion',
    'AppEvents.getUserID',
    'AppEvents.logEvent',
    'AppEvents.logPageView',
    'AppEvents.logPurchase',
    'AppEvents.setAppVersion',
    'AppEvents.setUserID',
    'AppEvents.updateUserProperties',
    'Canvas.Plugin.showPluginElement',
    'Canvas.Plugin.hidePluginElement',
    'Canvas.Prefetcher.addStaticResource',
    'Canvas.Prefetcher.setCollectionMode',
    'Canvas.getPageInfo',
    'Canvas.scrollTo',
    'Canvas.setAutoGrow',
    'Canvas.setDoneLoading',
    'Canvas.setSize',
    'Canvas.setUrlHandler',
    'Canvas.startTimer',
    'Canvas.stopTimer',
    'Event.subscribe',
    'Event.unsubscribe',
    'XFBML.parse',
    'addFriend',
    'api',
    'getAccessToken',
    'getAuthResponse',
    'getLoginStatus',
    'getUserID',
    'init',
    'login',
    'logout',
    'publish',
    'share',
    'ui',
  ],
  true
);
//end fb-page fb-plugin

// start ga-js
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  (i[r] =
    i[r] ||
    function () {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.defer = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  'script',
  'https://www.google-analytics.com/analytics.js',
  'ga'
);

ga('create', 'UA-4383973-13', 'auto');
ga('send', 'pageview');
// end ga-js

//start iheader.js
(function () {
  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;
  var header = document.getElementById('site-header');
  var pageYOffset = 0;
  header.classList.add('transpp');

  var checkScroll = function () {
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

  var toggleHeader = function (direction, curScroll) {
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

//end iheader.js

// start submit.js
// function validations() {
//variables
const form = document.getElementById('gsheetForm');
const scriptURL =
  'https://script.google.com/macros/s/AKfycbxLcct6zTG82ECD9tt0fM6W8sRjmNHFfgT69DZr71kPeDlC1m4/exec';
const email = document.getElementById('email');
const JobCategory = document.getElementById('JobCategory');
const JobType = document.getElementById('JobType');
const joblocation = document.getElementById('joblocation');
const company = document.getElementById('company');
const phone = document.getElementById('phone');
const deaDline = document.getElementById('deaDline');
const TermsConditions = document.getElementById('TermsConditions');
var today = Math.floor(new Date().getTime() / 1000.0);
//var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

const checkFacebook = document.getElementById('CheckFacebook');
const CheckInstagram = document.getElementById('CheckInstagram');
const CheckWebSearch = document.getElementById('CheckWebSearch');
const CheckElse = document.getElementById('CheckElse');

let messages = [];

form.addEventListener('submit', (e) => {
  messages = [];

  e.preventDefault();

  checkInputs();
  console.log(messages);
  if (messages.length > 0) {
    console.log('Too many messages.');
    submitDenied();
    return false;
    
  } else {
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => console.log('Success!', response))
      .catch((error) => console.error('Error!', error.message));
      submitButtonA();
      console.log('submitButton',submit.value);
      console.log('clicked?',clicked.value);
  
  }
});

function checkInputs() {
  //get the values from the inputs
  const emailValue = email.value;
  const JobCategoryValue = JobCategory.value;
  const JobTypeValue = JobType.value;
  const joblocationValue = joblocation.value;
  const companyValue = company.value;
  const phoneValue = phone.value;
  const deadlineValue = deaDline.value;
  const deadlineUNIX = new Date(deadlineValue.toString()).getTime() / 1000.0;
  const JobAnnouncementValue = JobAnnouncement;
  const TermsConditionsValue = TermsConditions.value;

  //email
  if (emailValue === '') {
    //show error
    //add error class
    setErrorFor(email, 'Az e-mail cím nincs megadva.');
  } else if (!isEmail(emailValue)) {
    //add success class
    setErrorFor(email, 'AZ e-mail cím helytelen.');
    checker = checker + 1;
  } else {
    setSuccessFor(email);
  }

  // jobcategory
  if (JobCategoryValue === 'válassz') {
    //show error
    //add error class
    setErrorFor(JobCategory, 'Válassz egy kategóriát.');
  } else {
    setSuccessFor(JobCategory);
  }

  // jobtype
  if (JobTypeValue === 'válassz') {
    //show error
    //add error class
    setErrorFor(JobType, 'Válassz egy típust.');
  } else {
    setSuccessFor(JobType);
  }

  // job location

  if (joblocationValue === '') {
    //show error
    //add error class
    setErrorFor(joblocation, `Add meg a munkavégzés helyét.`);
  } else {
    setSuccessFor(joblocation);
  }

  //company name

  if (companyValue === '') {
    //show error
    //add error class
    setErrorFor(company, `Add meg a munkaadó cég nevét.`);
  } else {
    setSuccessFor(company);
  }

  //phone number

  if (phoneValue === '' || phoneValue.length < 8) {
    //show error
    //add error class
    setErrorFor(phone, `Telefonszám érvénytelen.`);
  } else {
    setSuccessFor(phone);
  }

  //deadline
if (checkboxDeadline.checked === false){
  if (deadlineUNIX < today || deadlineValue.toString() == '') {
    //show error
    //add error class
    setErrorForDeadline(deadlineDiv, `A megadott dátum helytelen.`);
  } else {
    setSuccessForDeadline(deadlineDiv);
  }
}
  // console.log('deadlineUNIX', deadlineUNIX);
  // console.log('deadline', deaDline);
  // console.log('Today is:', today);
  // console.log('elso ag', deadlineUNIX < today);
  // console.log('deadlineDiv', deadlineDiv);
  // console.log('string', deadlineUNIX == '');
  // console.log('masodik ag:', deadlineUNIX.toString() == '');

  

  //   FindUS
  if (
    checkFacebook.checked === true ||
    CheckInstagram.checked === true ||
    CheckWebSearch.checked === true ||
    CheckElse.checked === true
  ) {
    setSuccessFor(findUS);
  } else {
    setErrorFor(findUS, `Jelölj meg egy, vagy több mezőt.`);
  }
  // console.log('checkFacebook', checkFacebook.checked);
  // console.log('CheckInstagram', CheckInstagram.value);
  // console.log('CheckWebSearch', CheckWebSearch.value);
  // console.log('CheckElse', CheckElse.value);

  //jobannouncement

  const jobAdiv = document.getElementById('jobAdiv'); //JobAnnouncement
  const karakterhossz = document.getElementById('JobAnnouncement').length;
  const karakterures = document.getElementById('JobAnnouncement').value;

  console.log (`khossz`,karakterhossz);
  console.log (`kures`,karakterures);

  if (karakterures === '' || karakterhossz > 2000) {
    //show error
    //add error class
    //        jobAdiv.classList.add('error')
    setErrorFor(jobAdiv, `Kérjük add meg a hírdetés leírását legfeljebb 2000 karakterben.`);
  } else {
    setSuccessFor(jobAdiv);
  }

  //Terms And Conditions
  console.log('checkbox TermsConditions is ', form.TermsConditions.checked);
  if (!form.TermsConditions.checked) {
    document.getElementById('chkMessage').style.visibility = 'visible';
    messages.push('Terms and Conditions not accepted');
    return false;
  } else {
    document.getElementById('chkMessage').style.visibility = 'hidden';
    return true;
  }
}

//----------------------------------//
//add success or
function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  formGroup.className = 'form-group error';
  small.innerText = message;
  messages.push('common error');
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group success';
}

function setErrorForDeadline(input, message) {
  const formControl = document.getElementById('deadlineDiv');
  const small = formControl.querySelector('small');
  // formControl.ClassList.remove("success"); //= 'form-group error';
  document.getElementById('deadlineDiv').classList.remove('success'); //= 'form-group error';
  document.getElementById('deadlineDiv').classList.add('error'); //= 'form-group error';
  small.innerText = message;
  messages.push('common error');
}

function setSuccessForDeadline(input) {
  const formControl = document.getElementById('deadlineDiv');
  // formControl.ClassList.remove("error"); //= 'form-group success';
  document.getElementById('deadlineDiv').classList.remove('error'); //= 'form-group success';
  document.getElementById('deadlineDiv').classList.add('success'); //= 'form-group success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function submitButtonA() {
    var clicked = false;
    var submit = document.querySelector('.submit');
    //submit.addEventListener("click", function(){
      // Make sure user cannot click button again until it has been reset
      // if( !clicked ){
      //   clicked = true;
        submit.classList.remove("return");
        submit.blur();
        document.querySelector('.loading-dock').classList.add('loaded');
        document.getElementById('load').style.display= 'initial';
        document.getElementById('load-b').style.display= 'initial';
        setTimeout(function(){
          document.getElementById('load').style.opacity = 1;
        }, 550);
        setTimeout(function(){
          document.getElementById('load-b').style.opacity = 1;
        }, 700);
        setTimeout(function(){
          document.querySelector('.loading-dock').classList.remove('loaded');
          document.getElementById('load').style.display = 'none';
          document.getElementById('load-b').style.display = 'none';
          document.getElementById('load').style.opacity = 0;
          document.getElementById('load-b').style.opacity = 0;
          let submit = document.querySelector('.submit');
          submit.classList.add("popout");
          submit.innerHTML = "";
          setTimeout(function(){
          document.getElementById('check').style.display = "block";
          }, 500);
        },2000);
    
        //reset all
        setTimeout(function(){
          submit.classList.remove("popout");
          submit.classList.remove("denied");
          submit.classList.add("return");
          submit.innerHTML = "Beküldés";
          document.getElementById('check').style.display = "none";
          clicked = false;
        }, 4500);
      // }
   // });

}

function submitDenied(){
  var submit = document.querySelector('.submit');
  submit.classList.add('denied');
  // document.getElementById('xMark').style.visibility = "visible";
  // document.getElementById('xMark').style.marginRight = ".5rem";
  submit.innerHTML = "Sikertelen";

   //reset all
   setTimeout(function(){
    submit.classList.remove("popout");
    submit.classList.remove("denied");
    submit.classList.add("return");
        submit.innerHTML = "Beküldés";
    document.getElementById('check').style.display = "none";
  //   document.getElementById('xMark').style.display = "none";
  // document.getElementById('xMark').style.marginRight = "0rem";
        clicked = false;
  }, 3000);

}

//deadline checkbox 

var checkboxDeadline = document.getElementById("DeadlineContInp");
  var deadline = document.getElementById("deaDline");

    document.getElementById('DeadlineContInp').onclick = function() {
     if(checkboxDeadline.checked) {
        deaDline.setAttribute("disabled", "disabled");
        deadlineDiv.classList.remove('error');
        deadlineDiv.classList.remove('success');
    //    setSuccessFor(DeadlineCont);
     } else {
        deaDline.removeAttribute("disabled");
     }
 };
console.log ('checkboxDeadline',checkboxDeadline);
console.log ('checkboxDeadline.checked',checkboxDeadline.checked);
console.log ('deadline',deadline);

// end submit.js

//start
