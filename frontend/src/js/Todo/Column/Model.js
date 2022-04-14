export default class ColumnModel {
  constructor(id, title, cardCount) {
    this.id = id;
    this.title = title;
    this.cardCount = cardCount;
    this.cardList = {};
    this.addStatus = false;
  }

  updateAddStstue() {
    this.addStatus = !this.addStatus;
    return this.addStatus;
  }

  addCardList(card) {
    this.cardList[card.model.id] = card;
    this.updateCardCount();
  }

  deleteCard(cardId) {
    delete this.cardList[cardId];
  }

  updateCardCount() {
    this.cardCount = Object.keys(this.cardList).length;
  }

  getCardCount() {
    return this.cardCount;
  }
}
