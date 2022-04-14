import ColumnModel from './Model.js';
import ColumnView from './View.js';

export default class Column {
  constructor({ id, title, cardCount = 0, cards = null }) {
    this.model = new ColumnModel(id, title, cardCount);
    this.view = new ColumnView();

    this.view.render(id, title, cardCount, cards);
  }
}
