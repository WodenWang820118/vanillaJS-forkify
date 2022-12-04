import { API_URL } from "../config";
import { AJAX } from "../helpers";
import { from, BehaviorSubject } from "rxjs";

class QueryService {
  queryObservable = new BehaviorSubject('');

  getQuery(selector) {
    console.log('getQuery with selector: ', selector);
    const parentElement = document.querySelector(`.${selector}`);
    console.log('parentElement: ', parentElement);
    const recipe = parentElement.querySelector(`.${selector}__field`).value;
    console.log('recipe: ', recipe);
    parentElement.querySelector(`.${selector}__field`).value = '';
    return recipe;
  }

  searchResultsSubscription(query) {
    try {      
      return from(AJAX(`${API_URL}?search=${query}&key=${process.env.FORKIFY_API_KEY}`));
    } catch (error) {
      throw error;
    }
  }

  recipeSubscrption(id) {
    try {
      return from(AJAX(`${API_URL}/${id}?key=${process.env.FORKIFY_API_KEY}`));
    } catch (error) {
      throw error;
    }
  }
}

export default new QueryService();