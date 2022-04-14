import resetCss from '../scss/reset.scss';
import css from '../scss/style.scss';

import Controller from './Controller/Controller.js';
import { Header } from './Header/main.js';
import { History } from './History/main.js';
// import { dragNdrop } from './dragNdrop';

(function () {
  const controller = new Controller({ Header, History });
  controller.initAlert();
})();

// dragNdrop();
