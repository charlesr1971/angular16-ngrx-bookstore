import { BooksApiActions, RETRIEVED_BOOK_LIST } from './books.actions';
import { Book } from '../app.model';

export const booksInitialState: ReadonlyArray<Book> = [];

export function booksReducer(
  state = booksInitialState,
  action: BooksApiActions
) {
  switch (action.type) {
    case RETRIEVED_BOOK_LIST:
      return action.payload.books;
  }
  return state;
}
