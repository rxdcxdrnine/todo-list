import resetCss from '../scss/reset.scss';
import css from '../scss/style.scss';

import Controller from './Controller/Controller.js';
import { Header } from './Header/main.js';
import { History } from './History/main.js';

(function () {
  const controller = new Controller({ Header, History });
  controller.initAlert({
    target: controller.deleteAlertView,
    content: {
      title: '선택한 카드를 삭제할까요?',
      cancel: '취소',
      accept: '삭제',
    },
  });
})();