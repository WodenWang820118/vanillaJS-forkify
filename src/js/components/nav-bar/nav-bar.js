import icons from "url:../../../img/icons.svg";
import BookMarkView from "./bookmark-view/bookmark-view";

customElements.define('app-bookmark-view', BookMarkView);

export default class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = 
    `
    <nav>
      <ul class="nav__list">
        <li class="nav__item">
          <button class="nav__btn nav__btn--add-recipe">
            <svg class="nav__icon">
              <use href="${icons}#icon-edit"></use>
            </svg>
            <span>Add recipe</span>
          </button>
        </li>
        <li class="nav__item">
          <button class="nav__btn nav__btn--bookmarks">
            <svg class="nav__icon">
              <use href="${icons}#icon-bookmark"></use>
            </svg>
            <span>Bookmarks</span>
          </button>
          <!-- bookmarks component -->
          <app-bookmark-view class="bookmarks"></app-bookmark-view>
        </li>
      </ul>
    </nav>
    `
  }
}
