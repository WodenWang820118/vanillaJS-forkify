import { BookMarkView } from './bookmark-view/bookmark-view';
import { implement } from '../../services/utils';
import { AfterViewInit } from '../../../app/interfaces/afterViewInit';

customElements.define('app-bookmark-view', BookMarkView);

export class NavBar extends implement(HTMLElement, [AfterViewInit]) {
  constructor() {
    super();
  }

  afterViewInit() {}
}
