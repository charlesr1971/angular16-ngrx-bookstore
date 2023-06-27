import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import { AddBook, RemoveBook, RetrievedBookList } from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Classical Music';

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(new AddBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(new RemoveBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks(this.title)
      .subscribe((books) =>
        this.store.dispatch(new RetrievedBookList({ books }))
      );
  }
}
