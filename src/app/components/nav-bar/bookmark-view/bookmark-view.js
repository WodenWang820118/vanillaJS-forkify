import bookmarkModel from './bookmark-model';
import { readHTML } from '../../../services/utils';
import html from 'url:./bookmark-view.html';

export class BookMarkView extends HTMLElement {
  model = bookmarkModel;

  constructor() {
    super();
  }

  connectedCallback() {
    readHTML(html).then(html => {
      this.innerHTML = html;
      this.model.setParentElement(this.querySelector('.bookmarks__list'));
      // the parent element is valid after setting the innerHTML
      this.model.renderBookmarks();
    });
  }
}
