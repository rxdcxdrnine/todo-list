import {
  htmlString2htmlElement,
  targetQuerySelector,
} from '../util/template.js';

class AlertView {
  constructor({ title, cancel, accept }) {
    this.$alert_container = null;
    this.title = title;
    this.cancel = cancel;
    this.accept = accept;
  }

  setTemplate() {
    const htmlString = `
    <div class="alert_box">
        <p class="alert_message">${this.title}</p>
        <div class="alert_btn_box">
            <button type="button" class="btn normal_btn">${this.cancel}</button>
            <button type="button" class="btn accent_btn">${this.accept}</button>
        </div>
    </div>
    `;

    this.$alert_container = htmlString2htmlElement({
      htmlString,
      className: 'alert_container hidden',
    });
  }

  render() {
    this.setTemplate();

    const $todo_container = targetQuerySelector({
      className: 'todo_container',
    });

    $todo_container.insertAdjacentElement('afterend', this.$alert_container);
  }

  onClickAccept(fn) {
    const $accent_btn = targetQuerySelector({
      target: this.$alert_container,
      className: 'accent_btn',
    });

    $accent_btn.addEventListener('click', fn);
  }
}

export default AlertView;
