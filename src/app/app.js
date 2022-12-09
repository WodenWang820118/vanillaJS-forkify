import { readHTML, implement } from './services/utils';
import { AfterViewInit } from '../app/interfaces/afterViewInit';
import { declarations } from './declarations';
import appHTML from 'url:./app.html';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept(function () {
    location.reload();
  });
}

class App extends implement(HTMLElement, [AfterViewInit]) {
  constructor() {
    super();
    this.declare();
  }

  connectedCallback() {
    readHTML(appHTML).then(html => {
      this.innerHTML = html;
      this.afterViewInit();
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
