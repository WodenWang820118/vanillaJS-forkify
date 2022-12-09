import queryService from '../../services/queryService';
import { fromEvent } from 'rxjs';
import { waitForElm, implement } from '../../services/utils';
import { AfterViewInit } from '../../../app/interfaces/afterViewInit';

export class SearchBar extends implement(HTMLElement, [AfterViewInit]) {
  _selector = 'search';

  constructor() {
    super();
  }

  afterViewInit() {
    this.addHandlerSearch(queryService, this._selector);
  }

  addHandlerSearch(service, selector) {
    waitForElm(`.${selector}`).then(() => {
      fromEvent(this, 'submit').subscribe(e => {
        e.preventDefault();
        const query = service.getQuery(selector);
        service.queryObservable.next(query);
      });
    });
  }
}
