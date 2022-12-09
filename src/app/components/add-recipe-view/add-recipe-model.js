import { AJAX, createRecipeObject } from '../../services/utils';
import { API_URL } from '../../config/config.js';
import viewService from '../../services/ui-services/viewService.js';
import bookmarkService from '../../services/bookmarkService.js';
import { BehaviorSubject, from } from 'rxjs';

class AddRecipeModel {
  parentElementObserver = new BehaviorSubject(undefined);
  recipeObservable = new BehaviorSubject({});

  constructor() {}

  setParentElement(parentElement) {
    this.parentElementObserver.next(parentElement);
  }

  uploadRecipe(parentElement, newRecipe) {
    // 1) render spinner
    viewService.renderSpinner(parentElement);

    // 2) upload recipe to server
    this.postRecipe(newRecipe);

    // 3) success message
    const message = 'Recipe was successfully uploaded :)';
    viewService.renderMessage(parentElement, message);

    // 4) update bookmarks state
    this.updateBookmarks();
  }

  updateBookmarks() {
    this.recipeObservable.subscribe(recipe => {
      if (Object.keys(recipe).length > 0) {
        console.log('recipe from updateBookmarks', recipe);
        window.history.pushState(null, '', `#${recipe.id}`);
        const bookmarks = localStorage.getItem('bookmarks')
          ? JSON.parse(localStorage.getItem('bookmarks'))
          : [];
        bookmarks.push(recipe);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        bookmarkService.getBookmarksObservable().next(bookmarks);
      }
    });
  }

  postRecipe(newRecipe) {
    try {
      const ingredients = Object.entries(newRecipe)
        .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
        .map(ing => {
          // const ingArr = ing[1].replaceAll(' ', '').split(',');
          const ingArr = ing[1].split(',').map(el => el.trim());
          if (ingArr.length !== 3)
            throw new Error(
              'Wrong ingredient format! Please use the correct format :)'
            );
          const [quantity, unit, description] = ingArr;
          return { quantity: quantity ? +quantity : null, unit, description };
        });

      const recipe = {
        title: newRecipe.title,
        source_url: newRecipe.sourceUrl,
        image_url: newRecipe.image,
        publisher: newRecipe.publisher,
        cooking_time: +newRecipe.cookingTime,
        servings: +newRecipe.servings,
        ingredients,
      };

      // POST request
      // return from(AJAX(`${API_URL}?key=${process.env.FORKIFY_API_KEY}`, recipe));
      from(
        AJAX(`${API_URL}?key=${process.env.FORKIFY_API_KEY}`, recipe)
      ).subscribe(data => {
        console.log(data);
        // update recipe state
        this.recipeObservable.next(createRecipeObject(data));
      });
    } catch (error) {
      throw error;
    }
  }
}

export default new AddRecipeModel();
