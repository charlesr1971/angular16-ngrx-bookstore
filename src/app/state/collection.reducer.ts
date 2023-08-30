/* 

OLD PARADIGM:

import { ADD_BOOK, BooksActions, REMOVE_BOOK } from './books.actions';

export const collectionInitialState: ReadonlyArray<string> = [];

export function collectionReducer(
  state = collectionInitialState,
  action: BooksActions
) {
  switch (action.type) {
    case ADD_BOOK:
      if (state.indexOf(action.payload.bookId) > -1) {
        return state;
      }
      return [...state, action.payload.bookId];

    case REMOVE_BOOK:
      return state.filter((id) => id !== action.payload.bookId);
  }
  return state;
} */

import { createReducer, on } from '@ngrx/store';
import * as BooksActions from './books.actions';

export const collectionInitialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  collectionInitialState,
  on(BooksActions.AddBook, (state, { bookId }) => { 
    return [ ...state, bookId ]
  }),
  on(BooksActions.RemoveBook, (state, { bookId }) => { 
    return state.filter((id) => id !== bookId)
  })
);
