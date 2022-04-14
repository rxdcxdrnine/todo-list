import { columnBoxTemplate, cardReadTemplate } from '../../utils/template.js';

export default class ColumnView {
  constructor() {}

  render(id, title, cardCount, cards) {
    const columnHTML = columnBoxTemplate({ id, title, cardCount });
    const todoContainer = document.querySelector('.todo_container');
    todoContainer.insertAdjacentHTML('beforeend', columnHTML);
    const column = todoContainer.querySelector(`[data-columnid="${id}"]`);
    if (!cards) return;
    cards.forEach((card) => {
      const cardHtml = cardReadTemplate(card);
      column
        .querySelector('.card_list')
        .insertAdjacentHTML('beforeend', cardHtml);
    });
  }

  renderCardCount(targetColumn, cardCount) {
    const countText = targetColumn.querySelector('.card_count');

    countText.innerText = cardCount;
  }
}
