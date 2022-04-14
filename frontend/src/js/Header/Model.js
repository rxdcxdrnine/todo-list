export default class HeaderModel {
  constructor() {
    this.menuStatus = false;
  }

  updateStatus() {
    this.menuStatus = !this.menuStatus;
  }

  getMenuStatus() {
    return this.menuStatus;
  }
}
