import addRecipeModel from "./add-recipe-model";
import icons from "url:../../../img/icons.svg";
import { waitForElm } from "../../helpers";
import { fromEvent } from "rxjs";

export default class AddRecipeView extends HTMLElement {
  _parentElement;
  _message;
  _window;
  _overlay;
  _btnOpen;
  _btnClose;
  model;

  constructor() {
    super();
    this.setModel(addRecipeModel);
  }

  setModel(model) {
    this.model = model;
  }

  connectedCallback() {
    this.innerHTML =
    `
    <div class="overlay hidden"></div>
    <div class="add-recipe-window hidden">
      <button class="btn--close-modal">&times;</button>
      <form class="upload">
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST123" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST123" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST123" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST123" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="${icons}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>
    </div>
    `
    this.ready();
  }

  ready() {
    waitForElm('.overlay').then(() => {
      // waiting for the element from the nav-bar component
      waitForElm('.nav__btn--add-recipe').then(() => {
        const parentElement = document.querySelector('.upload');
        this._message = 'Recipe was successfully uploaded :)';
        this._window = document.querySelector('.add-recipe-window');
        this._overlay = document.querySelector('.overlay');
        this._btnOpen = document.querySelector('.nav__btn--add-recipe');
        this._btnClose = document.querySelector('.btn--close-modal');
        (this.model && parentElement) ?? this.model.setParentElement(parentElement);

        this.addHandlerOpenWindow();
        this.addHandlerCloseWindow();
        this.addHandlerUploadRecipe(parentElement, this.model);
      });
    });
  }

  addHandlerOpenWindow() {
    // console.log('test the add recipe view');
    // console.log('this._btnOpen', this._btnOpen);
    // console.log('this._overlay', this._overlay);
    // console.log('this._window', this._window);

    fromEvent(this._btnOpen, 'click').subscribe(() => {
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
    fromEvent(parentElement, 'submit').subscribe((e) => {
      // 1) stop form from submitting
      e.preventDefault();

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
      setTimeout(() => {
        this._overlay.classList.add('hidden');
        this._window.classList.add('hidden');
        this.connectedCallback(); // restore initial state
      }, 1500);
    });
  }
}
