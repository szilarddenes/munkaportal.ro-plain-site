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
