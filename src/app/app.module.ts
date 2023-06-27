import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BooksEffects } from './state/books.effects';

import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { AppComponent } from './app.component';
import { BOOKS_FEATURE, COLLECTION_FEATURE } from './state/books.selectors';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(BOOKS_FEATURE, booksReducer),
    StoreModule.forFeature(COLLECTION_FEATURE, collectionReducer),
    HttpClientModule,
    EffectsModule.forRoot([BooksEffects]),
  ],
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
