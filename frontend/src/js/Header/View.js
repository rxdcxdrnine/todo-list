import { headerTemplate } from '../utils/template.js';

export default class HeaderView {
  constructor() {}

  render() {
    const body = document.querySelector('body');
    const headerHtml = headerTemplate();
    body.insertAdjacentHTML('afterbegin', headerHtml);
  }

  eventInit(menuBtnHandler) {
    const menuBtn = document.querySelector('.menu_btn');

    menuBtn.addEventListener('click', menuBtnHandler);
  }
}
