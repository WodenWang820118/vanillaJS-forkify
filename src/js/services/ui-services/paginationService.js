import icons from 'url:../../../img/icons.svg'; // Parcel 2
import { INITIAL_PAGE, RES_PER_PAGE } from '../../config';
import { BehaviorSubject, fromEvent } from 'rxjs';

// TODO: will be combined inside the result-view
class PaginationService {
  // _parentElement = document.querySelector('.pagination');
  pageObservable = new BehaviorSubject(INITIAL_PAGE);

  constructor() {
  }

  addHandlerClick(element, handler) {
    // this._parentElement.addEventListener('click', function (e) {
    //   const btn = e.target.closest('.btn--inline');
    //   if (!btn) return;
    //   const goToPage = +btn.dataset.goto;
    //   handler(goToPage);
    // });

    // should pass document.querySelector('.pagination') as element
    console.log('element', element);
    console.log('handler', handler);
    fromEvent(element, 'click').subscribe((e) => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  clear(parentElement) {
    parentElement.innerHTML = '';
  }

  generateMarkup(results, page = INITIAL_PAGE) {
    if (!results) return '';

    const curPage = page;
    const numPages = Math.ceil(
      results.length / RES_PER_PAGE
    );
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this.generateNextMarkup(curPage);
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this.generatePrevMarkup(curPage);
    }
    // Other page
    if (curPage < numPages) {
      return `${this.generatePrevMarkup(curPage)}${this.generateNextMarkup(curPage)}`;
    }
    // Page 1, and there are NO other pages
    return '';
  }

  generateNextMarkup(curPage) {
    return `
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
  }

  generatePrevMarkup(curPage) {
    return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
    `;
  }
}

export default new PaginationService();