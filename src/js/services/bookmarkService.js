import { BehaviorSubject } from "rxjs";

class BookmarkService {

  bookmarksObservable = new BehaviorSubject([]);
  bookmarks = [];

  constructor() {
    this.loadBookmarks();
  }

  getBookmarksObservable() {
    return this.bookmarksObservable;
  }

  setBookmarkObservable(bookmark) {
    this.bookmarksObservable.next(bookmark);
  }

  loadBookmarks() {
    this.bookmarks = localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks')) : [];
    this.bookmarksObservable.next(this.bookmarks);
  }
}

export default new BookmarkService();