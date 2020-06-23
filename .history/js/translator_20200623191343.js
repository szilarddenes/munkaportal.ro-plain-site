//src : https://codesandbox.io/s/i18n-example-phtsp?file=/src/js/index.js
'use strict';
class Translator {
  constructor(options = {}) {
    this._options = Object.assign({}, this.defaultConfig, options);
    this._lang = this.getLanguage();
    this._elements = document.querySelectorAll('[data-i18n]');
  }
  //get default language start
  getLanguage() {
    if (!this._options.detectLanguage) {
      return this._options.defaultLanguage;
    }

    var stored = localStorage.getItem('language');

    if (this._options.persist && stored) {
      return stored;
    }

    var lang = navigator.languages
      ? navigator.languages[0]
      : navigator.language;
    // console.log(navigator.languages);
    // console.log(lang);

    return lang.substr(0, 2);
  }

  //get default language end

  load(lang = null) {
    if (lang) {
      if (!this._options.languages.includes(lang)) {
        return;
      }

      this._lang = lang;
    }

    var path = `${this._options.filesLocation}/${this._lang}.json`;

    fetch(path)
      .then((res) => res.json())
      .then((translation) => {
        this.translate(translation);
        this.toggleLangTag();

        if (this._options.persist) {
          localStorage.setItem('language', this._lang);
        }
      })
      .catch((err) => {
        console.error(
          `Could not load ${path}.json. Please make sure that the path is correct.`,
          err
        );
      });
  }

  toggleLangTag() {
    if (document.documentElement.lang !== this._lang) {
      document.documentElement.lang = this._lang;
    }
  }

  translate(translation) {
    function replace(element) {
      var text = element.dataset.i18n
        .split('.')
        .reduce((obj, i) => obj[i], translation);

      if (text) {
        element.innerHTML = text;
      }
    }

    this._elements.forEach(replace);
  }

  get defaultConfig() {
    return {
      persist: false,
      // languages: ["en"],
      // defaultLanguage: "en",
      filesLocation: '/i18n',
    };
  }
}

//  export default Translator;
var translator = new Translator({
  persist: false,
  languages: ['hu', 'ro', 'en', 'de'],
  defaultLanguage: 'hu',
  detectLanguage: true,
  filesLocation: '/i18n',
});

translator.load();

document.querySelector('.flags svg').addEventListener('click', function (evt) {
 var ez = this.parent;
  // var nyelv = event.currentTarget.id;
  var nyelv = evt.target.
  translator.load(nyelv);

});

// document.querySelector('.flagRO svg').addEventListener('click', function (evt) {
//     var nyelv = event.currentTarget.id;
//   this.classList.add('flagActive');
//   translator.load(nyelv);

// });


  // var otherFlags = ["ro", "en","de"];
  
  // otherFlags.forEach(function(entry){
  //   var theFlag = document.getElementById (entry);
  //   console.log("x = ",theFlag);
  //     theFlag.classList.remove('flagActive');
    //  console.log('classlist THFLAG',this.classList);
  // });
  // function classToggle(ez){
  //   this.classList.add('animate__pulse');
  //     }