import { API_URL } from '../config/config';
import { AJAX } from './utils';
import { from, BehaviorSubject } from 'rxjs';

class QueryService {
  queryObservable = new BehaviorSubject('');

  getQuery(selector) {
    const parentElement = document.querySelector(`.${selector}`);
    const recipe = parentElement.querySelector(`.${selector}__field`).value;
    parentElement.querySelector(`.${selector}__field`).value = '';
    return recipe;
  }

  searchResultsSubscription(query) {
    try {
      return from(
        AJAX(`${API_URL}?search=${query}&key=${process.env.FORKIFY_API_KEY}`)
      );
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
