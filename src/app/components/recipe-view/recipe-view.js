import recipeModel from './recipe-model';
import icons from 'url:../../../assets/icons.svg';
import { fromEvent } from 'rxjs';
import { implement } from '../../services/utils';
import { AfterViewInit } from '../../../app/interfaces/afterViewInit';

export class RecipeView extends implement(HTMLElement, [AfterViewInit]) {
  _errorMessage = 'We could not find that recipe. Please try another one!';
  _message = 'Start by searching for a recipe or an ingredient. Have fun!';
  model = recipeModel;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = window.location.hash
      ? `
      <div class="message">
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
      </div>
    `
      : `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      </div>
    `;
    this.afterViewInit();
  }

  afterViewInit() {
    this.model.setParentElement(this);
    this.addHandlerAddBookmark(this, this.model);
    this.addHandlerUpdateServings(this, this.model);
    this.model.subscribeLoadAndHashChange();
  }

  setModel(model) {
    this.model = model;
  }

  updateServings(newServings) {
    this.model.updateServings(newServings);
  }

  addHandlerUpdateServings(element, handler) {
    fromEvent(element, 'click').subscribe(e => {
      const btn = e.target.closest('.btn--update-servings');
      if (!btn) return;
      const updateTo = +btn.dataset.updateTo;
      if (updateTo > 0) handler.updateServings(updateTo);
    });
  }

  addHandlerAddBookmark(element, handler) {
    fromEvent(element, 'click').subscribe(e => {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;
      handler.switchCurrentBookmark();
    });
  }
}
