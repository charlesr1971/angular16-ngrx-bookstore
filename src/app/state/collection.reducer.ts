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
}
