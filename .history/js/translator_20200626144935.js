//src : https://codesandbox.io/s/i18n-example-phtsp?file=/src/js/index.js
// 'use strict';
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


        var lang = navigator.languages ?
            navigator.languages[0] :
            navigator.language;
        console.log(navigator.languages);

        console.log("getLanguage Default Language", lang.substr(0, 2));
        window.defLang = lang.substr(0, 2)
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
            languages: ["en"],
            defaultLanguage: "en",
            filesLocation: 'i18n/',
        };
    }
}

//  export default Translator;
var translator = new Translator({
    persist: false,
    languages: ['hu', 'ro', 'en', 'de'],
    defaultLanguage: 'hu',
    detectLanguage: true,
    filesLocation: 'i18n/',
});

translator.load();
//adding a default value to our listener variable nyelv, for the submit.js --to be able to see something if somebody didn't choose any language
var nyelv = defLang;

//defining the flag DIV, and not the SVG --important at the removeTransition function

const fleghu = document.querySelector('.flagHU');
const fleghuSVG = document.querySelector('.flagHU svg');
const fleghuNY = document.querySelector('.navbar-collapse.nyitva li .flagHU');
const flegro = document.querySelector('.flagRO');
const flegen = document.querySelector('.flagEN');
const flegde = document.querySelector('.flagDE');

//click event HU flag
document.querySelector('.flagHU svg').addEventListener('click', function(evt) {
    var nyelv = event.currentTarget.id;
    translator.load(nyelv);
    console.log("nyelv = =", nyelv);
    window.nyelv = nyelv;
     fleghu.classList.add('flagActive');
    // fleghu.classList.replace("flagHU flagSwing");
    // fleghu.style.height="3rem";
     
});

// fleghu.addEventListener('transitionend', removeTransition);
// fleghu.addEventListener('webkitTransitionEnd', removeTransition);
fleghu.addEventListener("transitionend", function(e){
    this.classList.remove('flagActive');
    consol

});







//click event RO flag
document.querySelector('.flagRO svg').addEventListener('click', function(evt) {
    var nyelv = event.currentTarget.id;
    translator.load(nyelv);
    console.log("nyelv = =", nyelv);
    window.nyelv = nyelv;
    flegro.classList.toggle('flagActive');
});
flegro.addEventListener('transitionend', removeTransition);
flegro.addEventListener('webkitTransitionEnd', removeTransition);



//click event EN flag
document.querySelector('.flagEN svg').addEventListener('click', function(evt) {
    var nyelv = event.currentTarget.id;
    translator.load(nyelv);
    console.log("nyelv = =", nyelv);
    window.nyelv = nyelv;
    flegen.classList.toggle('flagActive');
});
flegen.addEventListener('transitionend', removeTransition);
flegen.addEventListener('webkitTransitionEnd', removeTransition);




//click event DE flag
document.querySelector('.flagDE svg').addEventListener('click', function(evt) {
    var nyelv = event.currentTarget.id;
    translator.load(nyelv);
    console.log("nyelv = =", nyelv);
    window.nyelv = nyelv;
    flegde.classList.add('flagActive');
});
flegde.addEventListener('transitionend', removeTransition);
flegde.addEventListener('webkitTransitionEnd', removeTransition);



function removeTransition(evt) {
    if (evt.propertyName !== 'transform') return; //skip if it's not a transform
    this.classList.remove('flagActive');
    console.log('RM TR', this);
}
