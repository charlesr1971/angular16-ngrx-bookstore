import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import { AddBook, RemoveBook, RetrievedBookList } from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Classical Music';

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    /* 
    
    OLD PARADIGM:

    this.store.dispatch(new AddBook({ bookId }));
    */
    this.store.dispatch(AddBook({ bookId }));
  }

  onRemove(bookId: string) {
    /* 
    
    OLD PARADIGM:

    this.store.dispatch(new RemoveBook({ bookId }));
    */
    this.store.dispatch(RemoveBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {
    console.log('AppComponent: constructor()');
  }

  ngOnInit() {
    console.log('AppComponent: ngOnInit()');
    this.booksService
      .getBooks(this.title)
      .subscribe((books) => {
        /* 

        OLD PARADIGM:

        return this.store.dispatch(new RetrievedBookList({ books }));
        */
        return this.store.dispatch(RetrievedBookList({ books }));
      }
    );
  }
}
