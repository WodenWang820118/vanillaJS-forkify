import paginationModel from './pagination-model';
export class PaginationView extends HTMLElement {
  _parentElement;
  model;

  constructor() {
    super();
  }

  connectedCallback() {
    // nested custom element cannot use fetch
    // since it's the asynchronous operation
    // ouside custom element won't wait for it
    this.innerHTML = `
    <div class="pagination"></div>
    `;
    this._parentElement = document.querySelector('.pagination');
    this.setModel(paginationModel);
  }

  setModel(model) {
    this.model = model;
  }
}
