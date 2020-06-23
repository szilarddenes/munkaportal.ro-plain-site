import Translator from './translator';

var translator = new Translator({
  persist: false,
  languages: ['hu', 'ro'],
  defaultLanguage: 'hu',
  detectLanguage: true,
  filesLocation: '/i18n',
});

translator.load();

document.querySelector('.flags').addEventListener('click', function (evt) {
  var nyelv = evt.target.id;
    console.log(evt.target.id);
    console.log("nyelv=",nyelv);


   //translator.load(nyelv);
});


