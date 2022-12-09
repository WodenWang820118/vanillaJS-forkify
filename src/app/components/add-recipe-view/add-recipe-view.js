import addRecipeModel from './add-recipe-model';
import { waitForElm, implement } from '../../services/utils';
import { fromEvent } from 'rxjs';
import { AfterViewInit } from '../../../app/interfaces/afterViewInit';

export class AddRecipeView extends implement(HTMLElement, [AfterViewInit]) {
  _parentElement;
  _message;
  _window;
  _overlay;
  _btnOpen;
  _btnClose;
  model = addRecipeModel;

  constructor() {
    super();
  }

  resetInnerHTML() {
    this._parentElement.innerHTML = this._innerHTML;
  }

  afterViewInit() {
    waitForElm('.overlay').then(() => {
      // waiting for the element from the nav-bar component
      waitForElm('.nav__btn--add-recipe').then(() => {
        const parentElement = document.querySelector('.upload');
        this._parentElement = parentElement;
        if (!this._innerHTML) this._innerHTML = parentElement.innerHTML;
        this._message = 'Recipe was successfully uploaded :)';
        this._window = document.querySelector('.add-recipe-window');
        this._overlay = document.querySelector('.overlay');
        this._btnOpen = document.querySelector('.nav__btn--add-recipe');
        this._btnClose = document.querySelector('.btn--close-modal');
        (this.model && parentElement) ??
          this.model.setParentElement(parentElement);

        this.addHandlerOpenWindow();
        this.addHandlerCloseWindow();
        this.addHandlerUploadRecipe(parentElement, this.model);
      });
    });
  }

  addHandlerOpenWindow() {
    fromEvent(this._btnOpen, 'click').subscribe(() => {
      this._innerHTML ? this.resetInnerHTML() : '';
      this._overlay.classList.remove('hidden');
      this._window.classList.remove('hidden');
    });
  }

  addHandlerCloseWindow() {
    fromEvent(this._btnClose, 'click').subscribe(() => {
      this._overlay.classList.add('hidden');
      this._window.classList.add('hidden');
    });
  }

  addHandlerUploadRecipe(parentElement, model) {
    fromEvent(parentElement, 'submit').subscribe(e => {
      // 1) stop form from submitting
      e.preventDefault();
      const originalHTML = parentElement.innerHTML;
      // this._innerHTML = originalHTML;

      // 2) construct FormData object
      const dataArr = [...new FormData(parentElement)];
      const data = Object.fromEntries(dataArr);

      // 3) upload recipe
      // 3.1) render spinner while waiting for response
      // 3.2) post recipe to server; update current recipe state
      // 3.3) render success message
      // 3.4) update bookmarks view
      model.uploadRecipe(parentElement, data);

      // 4) close the form window
      // reset form and re-activate event listeners
      setTimeout(() => {
        this._overlay.classList.add('hidden');
        this._window.classList.add('hidden');
        this.afterViewInit();
      }, 1500);
    });
  }
}
