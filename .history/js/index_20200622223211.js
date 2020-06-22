import Translator from 'js/translator';

var translator = new Translator({
  persist: false,
  languages: ['hu', 'ro'],
  defaultLanguage: 'hu',
  detectLanguage: true,
  filesLocation: '/i18n',
});

translator.load();

document.querySelector('form').addEventListener('click', function (evt) {
  if (evt.target.tagName === 'INPUT') {
    translator.load(evt.target.value);
  }
});
