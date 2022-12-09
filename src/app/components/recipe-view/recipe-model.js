import { fromEvent, BehaviorSubject, from, mergeMap } from 'rxjs';
import { createRecipeObject } from '../../services/utils';
import viewService from '../../services/ui-services/viewService';
import queryService from '../../services/queryService';
import bookmarkService from '../../services/bookmarkService.js';
import recipeService from '../../services/ui-services/recipeService.js';

class RecipeModel {
  _parentElement;
  recipeObservable = new BehaviorSubject(null);
  bookmarks = [];

  constructor() {}

  setParentElement(element) {
    this._parentElement = element;
  }

  subscribeLoadAndHashChange() {
    from(['load', 'hashchange'])
      .pipe(mergeMap(event => fromEvent(window, event)))
      .subscribe(() => {
        this.render();
      });
  }

  render() {
    // 1) Loading recipe
    const id = window.location.hash.slice(1);
    if (!id) return;

    this.loadRecipe(id);

    // 2) Rendering recipe
    this.updateView();
  }

  addBookmark(recipe) {
    // 1) update bookmark state for UI rendering
    this.bookmarks.push(recipe);
    bookmarkService.setBookmarkObservable(this.bookmarks);

    // 2) update bookmark state for recipe rendering
    recipe.bookmarked = true;
    this.recipeObservable.next(recipe);

    // 3) persist bookmarks in the local storage
    this.persistBookmarks();
  }

  deleteBookmark(id) {
    // 1) locate bookmark
    const index = this.bookmarks.findIndex(el => el.id === id);
    const recipe = this.bookmarks[index];

    // 2) update bookmark state for UI rendering
    recipe.bookmarked = false;
    this.recipeObservable.next(recipe);

    // 3) delete bookmark
    this.bookmarks.splice(index, 1);

    // 4) update bookmark observable
    bookmarkService.setBookmarkObservable(this.bookmarks);

    // 5) persist bookmarks in the local storage
    this.persistBookmarks();
  }

  persistBookmarks() {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }

  clearBookmarks() {
    localStorage.clear('bookmarks');
  }

  clear() {
    this._parentElement.innerHTML = '';
  }

  loadRecipe(id) {
    this._parentElement ??
      viewService.renderSpinner(
        this._parentElement.querySelector('.message')
      );
    try {
      queryService.recipeSubscrption(id).subscribe(data => {
        if (data) {
          // 1) create recipe object
          const recipe = createRecipeObject(data);

          // 2) update recipe observable; if bookmarked, push to bookmarks
          bookmarkService.bookmarks.some(bookmark => bookmark.id === id)
            ? (recipe.bookmarked = true && this.bookmarks.push(recipe))
            : (recipe.bookmarked = false);

          // 3) update recipe observable
          this.recipeObservable.next(recipe);
        }
      });
    } catch (error) {
      throw error;
    }
  }

  updateView() {
    this._parentElement ??
      viewService.renderSpinner(
        this._parentElement.querySelector('.message')
      );
    try {
      this.recipeObservable.subscribe(recipe => {
        if (recipe) {
          const markup = recipeService.generateRecipeMarkup(recipe);
          this._parentElement ?? this.clear();
          viewService.render(true, this._parentElement, markup);
        }
      });
    } catch (error) {
      throw error;
    }
  }

  switchCurrentBookmark() {
    const currentRecipe = this.recipeObservable.value;
    if (!currentRecipe.bookmarked) this.addBookmark(currentRecipe);
    else this.deleteBookmark(currentRecipe.id);
  }

  updateServings(newServings) {
    const currentRecipe = this.recipeObservable.value;
    currentRecipe.ingredients.forEach(ing => {
      ing.quantity = (ing.quantity * newServings) / currentRecipe.servings;
    });

    currentRecipe.servings = newServings;
    this.recipeObservable.next(currentRecipe);
  }
}

export default new RecipeModel();
