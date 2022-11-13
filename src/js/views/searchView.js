import View from './view.js';

class SearchView extends View{
  _parentElement = document.querySelector('.search');

  getQuery() {
    const recipe = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return recipe;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function(e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();