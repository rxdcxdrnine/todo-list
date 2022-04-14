import { targetQuerySelector } from '../../utils/createTemplate';
import { cardWriteTemplate } from '../../utils/template';

export default class CardView {
  constructor() {}

  eventInit({
    cardId,
    cardInputHandler,
    cardAddHandler,
    cardDeleteHandler,
    hoverHandler,
  }) {
    const card = document.querySelector(`[data-cardId="${cardId}"]`);
    const accentBtn = card.querySelector('.accent_btn');
    const deleteBtn = card.querySelector('.delete_btn');
    card.addEventListener('input', cardInputHandler);
    accentBtn.addEventListener('click', cardAddHandler);
    deleteBtn.addEventListener('click', cardDeleteHandler);
    deleteBtn.addEventListener('mouseover', hoverHandler);
    deleteBtn.addEventListener('mouseout', hoverHandler);
  }

  renderAddCard(targetColumn, cardId) {
    const cardHtml = cardWriteTemplate({ cardId });
    const targetList = targetQuerySelector({
      target: targetColumn,
      className: 'start',
    });
    targetList.insertAdjacentHTML('afterend', cardHtml);
  }

  changeEditMode(card, targetText) {
    card.classList.add('write', 'edit');
    card.querySelector('.accent_btn').innerText = '수정';
    if (!targetText) return;
    targetText.nextElementSibling.focus();
  }

  cancelEditMode({ targetCard, titleInput, contentInput, value }) {
    targetCard.classList.remove('write', 'edit');
    titleInput.value = value.title;
    contentInput.value = value.content;
  }

  renderDeleted(card) {
    card.remove();
  }

  changeDeleteMode(card) {
    if (card.classList.contains('delete_hover')) {
      card.classList.remove('delete_hover');
      return;
    }
    card.classList.add('delete_hover');
  }
}
