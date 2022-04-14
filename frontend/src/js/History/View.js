import { historyTemplate } from '../utils/template.js';

export default class HistoryView {
  constructor() {
    this.historyContainer;
  }

  render() {
    const main = document.querySelector('main');
    const historyContainer = historyTemplate();
    main.insertAdjacentHTML('afterbegin', historyContainer);
    this.historyContainer = document.querySelector('.history_container');
  }

  eventInit(closeBtnHandler) {
    const closeBtn = document.querySelector('.history_container .close_btn');

    closeBtn.addEventListener('click', closeBtnHandler);
  }

  animation(menuStatus) {
    if (menuStatus) {
      this.historyContainer.classList.add('show');
      return;
    }
    this.historyContainer.classList.remove('show');
  }
}
