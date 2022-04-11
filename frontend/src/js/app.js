import resetCss from '../scss/reset.scss';
import css from '../scss/style.scss';

import Controller from './controller.js';
import { Header } from './Header/main.js';
import { History } from './History/main.js';

(function () {
  const body = document.querySelector('body');
  const mainTag = '<main></main>';
  body.insertAdjacentHTML('afterbegin', mainTag);

  new Controller({ Header, History });
})();
