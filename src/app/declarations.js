// classes
import { AddRecipeView } from './components/add-recipe-view/add-recipe-view.js';
import { Copyright } from './components/copyright/copyright.js';
import { NavBar } from './components/nav-bar/nav-bar.js';
import { RecipeView } from './components/recipe-view/recipe-view.js';
import { ResultView } from './components/result-view/result-view.js';
import { SearchBar } from './components/search-bar/search-bar.js';

// htmls
import addRecipeViewHTML from 'url:./components/add-recipe-view/add-recipe-view.html';
import copyrightHTML from 'url:./components/copyright/copyright.html';
import navBarHTML from 'url:./components/nav-bar/nav-bar.html';
import resultViewHTML from 'url:./components/result-view/result-view.html';
import searchBarHTML from 'url:./components/search-bar/search-bar.html';

export const declarations = [
  {
    class: AddRecipeView,
    selector: 'app-add-recipe-view',
    html: addRecipeViewHTML,
  },
  {
    class: SearchBar,
    selector: 'app-search-bar',
    html: searchBarHTML,
  },
  {
    class: NavBar,
    selector: 'app-nav-bar',
    html: navBarHTML,
  },
  {
    class: ResultView,
    selector: 'app-result-view',
    html: resultViewHTML,
  },
  {
    class: Copyright,
    selector: 'app-copyright',
    html: copyrightHTML,
  },
  {
    class: RecipeView,
    selector: 'app-recipe-view',
    html: '',
  },
];
