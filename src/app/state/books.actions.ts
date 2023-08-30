/*

OLD PARADIGM:

import { Action } from '@ngrx/store';
import { Book } from '../app.model';

export const ADD_BOOK = '[Books] Add Book';
export const REMOVE_BOOK = '[Books] Remove Book';
export const RETRIEVED_BOOK_LIST = '[Books API] Retrieved Book List';

export class AddBook implements Action {
  readonly type = ADD_BOOK;
  constructor(public payload: { bookId: string }) {}
}

export class RemoveBook implements Action {
  readonly type = REMOVE_BOOK;
  constructor(public payload: { bookId: string }) {}
}

export class RetrievedBookList implements Action {
  readonly type = RETRIEVED_BOOK_LIST;
  constructor(public payload: { books: ReadonlyArray<Book> }) {}
}

export type BooksActions = AddBook | RemoveBook;
export type BooksApiActions = RetrievedBookList; */

import { createAction, props} from '@ngrx/store';
import { Book } from '../app.model';

export const ADD_BOOK = '[Books] Add Book';
export const REMOVE_BOOK = '[Books] Remove Book';
export const RETRIEVED_BOOK_LIST = '[Books API] Retrieved Book List';

export const AddBook = createAction(ADD_BOOK, props<{ bookId: string }>());
export const RemoveBook = createAction(REMOVE_BOOK, props<{ bookId: string }>());
export const RetrievedBookList = createAction(RETRIEVED_BOOK_LIST, props<{ books: ReadonlyArray<Book> }>());
