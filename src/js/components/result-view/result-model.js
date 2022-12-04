import queryService from "../../services/queryService";
import viewService from "../../services/ui-services/viewService";
import previewService from "../../services/ui-services/previewService";
import paginationService from "../../services/ui-services/paginationService";
import icons from "url:../../../img/icons.svg";
import { INITIAL_PAGE, RES_PER_PAGE } from "../../config";
import { BehaviorSubject, fromEvent } from "rxjs";

class ResultModel {
  searchResultsObservable = new BehaviorSubject([]);
  searchResults = [];
  _parentElement;
  queryService;
  previewService;
  viewSerivce;
  paginationService;

  constructor() {
    this.setQueryService(queryService);
    this.setPreviewService(previewService);
    this.setViewService(viewService);
    this.setPaginationService(paginationService);
  }

  setQueryService(service) {
    this.queryService = service;
  }

  setPreviewService(service) {
    this.previewService = service;
  }

  setViewService(service) {
    this.viewService = service;
  }

  setPaginationService(service) {
    this.paginationService = service;
  }

  setParentElement(parentElement) {
    this._parentElement = parentElement;
  }

  render(page = INITIAL_PAGE, paginationElement) {
    console.log('pagination in the render in the result-model', paginationElement);
    try {
      this.queryService.queryObservable.subscribe(query => {
        if (query) {
          console.log('query in result-model', query);
          // 1) load search results
          this.loadSearchResults(query);
  
          // 2) update the result view
          this.updateView(page, paginationElement);
        }
      });

      // 3) handle pagination clicks
      this.handlePaginationClicks(paginationElement);
    } catch (error) {
      throw error;
    }
  }

  handlePaginationClicks(paginationElement) {
    fromEvent(paginationElement, 'click').subscribe((e) => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      this.updateView(goToPage, paginationElement);
    });
  }

  clear() {
    this._parentElement.innerHTML = '';
  }

  loadSearchResults(query) {
    try {
      // 1) render the spinner while loading the data
      this.viewService.renderSpinner(this._parentElement);

      // 2) load the search results
      this.queryService.searchResultsSubscription(query).subscribe((data) => {
        const recipes  = data.data.recipes.map(rec => {
          return {
            id: rec.id,
            title: rec.title,
            publisher: rec.publisher,
            image: rec.image_url,
            sourceUrl: rec.source_url,
            ...(rec.key && { key: rec.key }),
          };
        });

        this.searchResultsObservable.next(recipes);
        this.searchResults = recipes;
      });
    } catch (error) {
      throw error;
    }
  }

  updateView(page, paginationElement) {
    this.searchResultsObservable.subscribe((data) => {
      if (data && data.length > 0) {
        // // 1) render results
        this.clear();
        const paginationData = this.getSearchResultsPaginationPage(data, page);
        const markup = this.generatePreviewMarkup(paginationData);
        this.viewService.render(true, this._parentElement, markup);

        // // 2) pagination buttons
        this.paginationService.clear(paginationElement);
        const paginationMarkup = this.paginationService.generateMarkup(data, page);
        this.viewService.render(true, paginationElement, paginationMarkup);
        console.log('data ', data);
      }
    });
  }

  getSearchResultsPaginationPage(results, page = INITIAL_PAGE) {
    const start = (page - 1) * RES_PER_PAGE;
    const end = page * RES_PER_PAGE;
    return results.slice(start, end);
  }

  generatePreviewMarkup(results) {
    return results.map(result => this.viewService.render(false, '', this.previewService.generateMarkup(result))).join('');
  }
}

export default new ResultModel();