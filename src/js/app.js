import addRecipeView from './components/add-recipe-view/add-recipe-view.js';
import bookmarkView from './components/nav-bar/bookmark-view/bookmark-view.js';
import copyright from './components/copyright/copyright.js';
import navBar from './components/nav-bar/nav-bar.js';
import paginationView from './components/result-view/pagination-view/pagination-view.js';
import recipeView from './components/recipe-view/recipe-view.js';
import resultView from './components/result-view/result-view.js';
import searchBar from './components/search-bar/search-bar.js'

import logo from "url:../img/logo.png";

const declarations = [
  addRecipeView,
  copyright,
  navBar,
  recipeView,
  resultView,
  searchBar
]

// TODO: how to wait for all the elements to be loaded?

class App extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.declare(declarations);
    this.innerHTML =
    `
    <div class="container">
      <header class="header">
        <img src="${logo}" alt="Logo" class="header__logo" />
        <app-search-bar></app-search-bar>
        <app-nav-bar class="nav"></app-nav-bar>
      </header>

      <div class="search-results" id="search-results">
        <app-result-view></app-result-view>
        <app-copy-right></app-copy-right>
      </div>

      <app-recipe-view class="recipe"></app-recipe-view>
    </div>
    <app-add-recipe-view></app-add-recipe-view>
    `
  }

  declare(declarations) {
    declarations.forEach(declaration => {
      let declarationName = ''
      for (const char of declaration.name) {
        if (char.toUpperCase() === char) {
          declarationName += '-' + char.toLowerCase()
        } else {
          declarationName += char
        }
      }
      // console.log(declarationName.slice(1));
      customElements.define(`app-${declarationName.slice(1)}`, declaration);
    });
  }
}

customElements.define('app-root', App);
