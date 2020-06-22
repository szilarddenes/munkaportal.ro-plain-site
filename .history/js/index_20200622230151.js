// import Translator from 'js/translator';

var translator = new Translator({
  persist: false,
  languages: ['hu', 'ro'],
  defaultLanguage: 'hu',
  detectLanguage: true,
  filesLocation: '/i18n',
});

translator.load();

document.querySelector('#flag').addEventListener('click', function (evt) {
  var nyelv = document.querySelector('#flag').id;
  console.log(nyelv);
    translator.load(evt.nyelv);
 
  
});
