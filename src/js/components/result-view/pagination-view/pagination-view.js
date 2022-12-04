import paginationModel from './pagination-model';

export default class PaginationView extends HTMLElement {
  
  _parentElement;
  model;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = 
    `
    <div class="pagination"></div>
    `;
    this._parentElement = document.querySelector('.pagination');
    this.setModel(paginationModel);
  }

  setModel(model) {
    this.model = model;
  }
}
