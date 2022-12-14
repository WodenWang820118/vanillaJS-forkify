# VanillaJS-forkify
# Overview
The purpose of the project is to showcase the ability to:
1. read and understand Javascript
- Promise
- event loop, execution context, call stack
- async-await asynchronous and synchronous implementations
- ES6 class syntax
2. refactor and debug the application
3. software modeling using UML; implement the model structure
4. attempts to apply OOP [GRASP principles](https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)), particularly polymorphism in this project although Javascript is not a class-based language

Firstly, thanks to [Jonas](https://twitter.com/jonasschmedtman) for the course and his MVC capstone project. I refactored the project with custom elements and decoupled as much as possible from using the single `controller.js` file. The folder structure is carefully managed for different purposes under the `src` folder.
- `components` for custom elements
- `interfaces` for ES6 interfaces, allowing polymorphism
- `services` for dynamically generated HTML markups, API operations, and utility functions
- `config` for constant parameters

The UML illustrates the overall code structure as the following:
<details>
<summary>image</summary>

![image info](./design/VallinaJS%20-%20forkify.drawio.svg)
</details>

# Features
Several techniques and tools are used according to the provided UML:

## Custom Elements
[Custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) aim to avoid managing HTML code in one `index.html` file; separated components could be possibly reusable.
## Interface
The class which implements the interface without implementing defined methods will be warned on the console. For example:
```
export class Example extends implement(BaseClass, [Interfaces]) {}
```
## Manage HTML out of Javascript files
on top of custom elements, I separate the HTML code of Javascript files. It's easier to write and debug HTML code. Use `search-bar` as an example:
<details>
<summary>code</summary>

```
// [search-bar.js]
// imports

export class SearchBar extends implement(HTMLElement, [AfterViewInit]) {
  _selector = 'search';

  constructor() {
    super();
  }

  afterViewInit() {
    this.addHandlerSearch(queryService, this._selector);
  }

  addHandlerSearch(service, selector) {
    waitForElm(`.${selector}`).then(() => {
      fromEvent(this, 'submit').subscribe(e => {
        e.preventDefault();
        const query = service.getQuery(selector);
        service.queryObservable.next(query);
      });
    });
  }
}


[search-bar.html]
<form class="search">
  <input
    type="text"
    class="search__field"
    placeholder="Search over 1,000,000 recipes..."
  />
  <button class="btn search__btn">
    <svg class="search__icon">
      <use href="../../../assets/icons.svg#icon-search"></use>
    </svg>
    <span>Search</span>
  </button>
</form>

```
</details>

Using Parcel and the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to serve the static HTML:
```
export const readHTML = async function(file) {
  const response = await fetch(file);
  const text = await response.text();
  return text;
}
```

We'll see how to render the markup later.

## Component definition and HTML rendering
define all custom elements and insert static HTML contents inside the `App` class, allowing components to independently manage HTML and Javascript files.

<details>
<summary>code</summary>

```
// [app.js]
class App extends implement(HTMLElement, [AfterViewInit]) {
  constructor() {
    super();
    this.declare();
  }

  connectedCallback() {
    // insert app.html text
    readHTML(appHTML).then(html => {
      this.innerHTML = html;
      this.afterViewInit(); // insert other web components accordingly
    });
  }

  declare() {
    declarations.forEach(declaration => {
      customElements.define(declaration.selector, declaration.class);
    });
  }

  afterViewInit() {
    declarations.forEach(declaration => {
      // console.log('build ' + declaration.selector);
      const component = document.querySelector(declaration.selector);
      if (declaration.html) {
        readHTML(declaration.html).then(html => {
          component.innerHTML = html;
          component.afterViewInit();
        });
      }
    });
  }
}

customElements.define('app-root', App);

// [app.html]
<div class="container">
  <header class="header">
    <img src="../assets/logo.png" alt="Logo" class="header__logo" />
    <app-search-bar></app-search-bar>
    <app-nav-bar class="nav"></app-nav-bar>
  </header>

  <div class="search-results" id="search-results">
    <app-result-view></app-result-view>
    <app-copyright></app-copyright>
  </div>

  <app-recipe-view class="recipe"></app-recipe-view>
</div>
<app-add-recipe-view></app-add-recipe-view>
```
</details>

## RxJS
[RxJS](https://rxjs.dev/guide/overview) manages asynchronous operations and events that the project becomes reactive and avoids performing async/await promises manually, which is prone to errors. For example:
<details>
<summary>code</summary>

```
// [API]
searchResultsSubscription(query) {
  try {
    // the AJAX function return a Promise     
    return from(AJAX(`${API_URL}?search=${query}&key=${process.env.FORKIFY_API_KEY}`));
  } catch (error) {
    throw error;
  }
}

searchResultsSubscription(query).subscribe((data) => {
  // business logic
});

// [events]
fromEvent(this, 'submit').subscribe(e => {
    e.preventDefault();
    // business logic
  });
});
```
</details>

## Nested custom elements
the nested custom elements are situated inside their parent custom elements. For example, `bookmark-view` is nested inside the `nav-bar`; I avoid using shadow DOM for code simplicity and global [sass](https://sass-lang.com/) styles application

## Mutation observer
use mutation observer to assert the specific element is ready in DOM.
<details>
<summary>code</summary>

```
// [utils.js]
export const waitForElm = function(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

// [add-recipe-view.js]
waitForElm('.overlay').then(() => {
  // waiting for the element from the nav-bar component
  waitForElm('.nav__btn--add-recipe').then(() => {
    // business logic
    // add eventListeners
    this.addHandlerOpenWindow();
    this.addHandlerCloseWindow();
    this.addHandlerUploadRecipe(parentElement, this.model);
  });
});
```
</details>

## Models
all custom elements may have their models interacting with shared service objects to manage data. For example,

<details>
<summary>code</summary>

```
// [result-model.js]
class ResultModel {
  render(page, element) {
    // business logic
  }
}
export default new ResultModel();

// [result-view.js]
import resultModel from "./result-model";
export class ResultView extends implement(HTMLElement, [AfterViewInit]) {
  selector = "results";
  model;

  constructor() {
    super();
    this.setModel(resultModel);
  }

  setModel(model) {
    this.model = model;
  }

  afterViewInit() {
    const parentElement = this.querySelector(`.${this.selector}`);
    const paginationElement = this.querySelector('.pagination');
    this.model.setParentElement(parentElement);
    // pass parameters to model to handle
    this.model.render(1, paginationElement);
  }
}
```
</details>

