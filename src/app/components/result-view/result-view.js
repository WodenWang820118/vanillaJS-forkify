import resultModel from "./result-model";
import { PaginationView } from "./pagination-view/pagination-view";
import { implement } from "../../services/utils";
import { AfterViewInit } from "../../../app/interfaces/afterViewInit";

customElements.define("app-pagination-view", PaginationView);

export class ResultView extends implement(HTMLElement, [AfterViewInit]) {
  selector = "results";
  model;

  constructor() {
    super();
    this.setModel(resultModel);
  }

  setModel(model) {
    this.model = model;
  }

  afterViewInit() {
    const parentElement = this.querySelector(`.${this.selector}`);
    const paginationElement = this.querySelector('.pagination');
    this.model.setParentElement(parentElement);
    this.model.render(1, paginationElement);
  }
}
