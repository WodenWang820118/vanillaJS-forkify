import queryService from "../../services/queryService";
import icons from "url:../../../img/icons.svg";
import { fromEvent } from "rxjs";
import { waitForElm } from "../../helpers";

export default class SearchBar extends HTMLElement {
  _selector = 'search';
  queryService;

  constructor() {
    super();
    this.setQueryService(queryService);
    this.addHandlerSearch(this.queryService, this._selector);
  }

  setQueryService(queryService) {
    this.queryService = queryService;
  }

  connectedCallback() {
    this.innerHTML =
    `
    <form class="${this._selector}">
      <input
        type="text"
        class="${this._selector}__field"
        placeholder="Search over 1,000,000 recipes..."
      />
      <button class="btn ${this._selector}__btn">
        <svg class="${this._selector}__icon">
          <use href="${icons}#icon-search"></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
    `;
  }

  addHandlerSearch(service, selector) {
    waitForElm(`.${selector}`).then(() => {
      // console.log('search bar addEventListner');
      fromEvent(this, 'submit').subscribe(e => {
        e.preventDefault();
        const query = service.getQuery(selector);
        service.queryObservable.next(query);
      });
    });
  }
}
