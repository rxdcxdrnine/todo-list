import {
  createTagTemplate,
  targetQuerySelector,
} from '../utils/createTemplate.js';

export default class TodoView {
  constructor() {
    this.columnContainer = null;
  }

  init() {
    this.render();
    this.setContainer();
  }

  eventInit({ ColumnClickHanlder }) {
    this.columnContainer.addEventListener('click', ColumnClickHanlder);
    this.columnContainer.addEventListener('dblclick', ColumnClickHanlder);
  }

  setContainer() {
    this.columnContainer = targetQuerySelector({ className: 'todo_container' });
  }

  render() {
    document
      .querySelector('main')
      .insertAdjacentHTML(
        'afterbegin',
        createTagTemplate('article', '', 'todo_container')
      );
  }
}
