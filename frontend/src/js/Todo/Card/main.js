import CardModel from './Model.js';
import CardView from './View.js';

export default class Card {
  constructor({ cardId = '', title = '', content = '' }) {
    this.model = new CardModel({ cardId, title, content });
    this.view = new CardView();
  }
}
