import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../app.model';

export const BOOKS_FEATURE = 'books';
export const COLLECTION_FEATURE = 'collection';

export const selectBooks =
  createFeatureSelector<ReadonlyArray<Book>>(BOOKS_FEATURE);

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>(COLLECTION_FEATURE);

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);
