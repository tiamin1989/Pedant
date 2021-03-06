export default class Select {
  constructor(select) {
    this._select = document.querySelector(select);
    this._resized = false;
  }
  resizeSelect() {
    if (this._resized) return;
    for (let i = 0; i < this._select.options.length; i++) {
      this._select.options[i].title = this._select.options[i].innerHTML;
      if (i != this._select.options.selectedIndex) this._select.options[i].innerHTML = '';
    }
    this._resized = true;
    this._select.blur();
  }
  restoreSelect() {
    if (!this._resized) return;
    for (let i = 0; i < this._select.options.length; i++) {
      this._select.options[i].innerHTML = this._select.options[i].title;
    }
    this._resized = false;
  }
}
