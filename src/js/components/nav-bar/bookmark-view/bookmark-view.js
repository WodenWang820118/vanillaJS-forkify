import bookmarkModel from "./bookmark-model";

export default class BookMarkView extends HTMLElement {
  model;
  
  constructor() {
    super();
    this.setModel(bookmarkModel);
  }

  setModel(model) {
    this.model = model;
  }

  connectedCallback() {
    this.innerHTML = 
    `
    <ul class="bookmarks__list">
      <div class="message">
        <div>
          <svg>
            <use href="src/img/icons.svg#icon-smile"></use>
          </svg>
        </div>
        <p>
          No bookmarks yet. Find a nice recipe and bookmark it :)
        </p>
      </div>
    </ul>
    `
    this.model.setParentElement(this.querySelector('.bookmarks__list'));
    // the parent element is valid after setting the innerHTML
    this.model.renderBookmarks();
  }
}
