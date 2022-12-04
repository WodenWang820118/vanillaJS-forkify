import viewService from "../../../services/ui-services/viewService";
import previewService from "../../../services/ui-services/previewService";
import bookmarkService from "../../../services/bookmarkService";

class BookMarkModel {
  viewService;
  _parentElement;
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';

  constructor() {
    this.setViewService(viewService);
    this.setPreviewService(previewService);
    this.setBookmarkService(bookmarkService);
  }

  setViewService(service) {
    this.viewService = service;
  }

  setPreviewService(service) {
    this.previewService = service;
  }

  setParentElement(parentElement) {
    this._parentElement = parentElement;
  }

  setBookmarkService(bookmarkService) {
    this.bookmarkService = bookmarkService;
  }

  generateMarkup(bookmarks) {
    return bookmarks
      .map(bookmark => previewService.generateMarkup(bookmark))
      .join('');
  }

  renderBookmarks() {
    this.bookmarkService.getBookmarksObservable().subscribe(bookmarks => {
      bookmarks && bookmarks.length > 0
      ? this.viewService.render(true, this._parentElement, this.generateMarkup(bookmarks))
      : this.viewService.renderMessage(this._parentElement, this._errorMessage);
    });
  }
}

export default new BookMarkModel();