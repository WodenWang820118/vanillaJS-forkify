import resultModel from "./result-model";
import PaginationView from "./pagination-view/pagination-view";

customElements.define("app-pagination-view", PaginationView);

export default class ResultView extends HTMLElement {
  selector = "results";
  model;
  paginationService;

  constructor() {
    super();
    this.setModel(resultModel);
  }

  setModel(model) {
    this.model = model;
  }

  setPaginationService(service) {
    this.paginationService = service;
  }

  connectedCallback() {
    // TODO: how to wait for component to be loaded?
    // FIXME: <ul></ul> and <pagination-view></pagination-view> aren't being rendered
    // use mutation observer
    this.innerHTML = 
    `
    <div id="result-data">
      <ul class="${this.selector}"></ul>
      <app-pagination-view></app-pagination-view>
    </div>
    `
    console.log('result view connectedCallback');
    console.log('result view addEventListner');
    const parentElement = this.querySelector(`.${this.selector}`);
    const paginationElement = this.querySelector('.pagination');
    this.model.setParentElement(parentElement);
    this.model.render(1, paginationElement);
  }
}
