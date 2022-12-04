import icons from 'url:../../../../img/icons.svg';
import { INITIAL_PAGE, RES_PER_PAGE } from '../../../config';

class PaginationModel {
  constructor() {

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

export default new PaginationModel();