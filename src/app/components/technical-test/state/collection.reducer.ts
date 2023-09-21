/* 

OLD PARADIGM:

import { ADD_TECHNICAL_TEST, TechnicalTestsActions, REMOVE_TECHNICAL_TEST } from './technical-tests.actions';

export const collectionInitialState: ReadonlyArray<string> = [];

export function collectionReducer(
  state = collectionInitialState,
  action: TechnicalTestsActions
) {
  switch (action.type) {
    case ADD_TECHNICAL_TEST:
      if (state.indexOf(action.payload.technicalTestId) > -1) {
        return state;
      }
      return [...state, action.payload.technicalTestId];

    case REMOVE_TECHNICAL_TEST:
      return state.filter((id) => id !== action.payload.technicalTestId);
  }
  return state;
} */

import { createReducer, on } from '@ngrx/store';
import * as TechnicalTestsActions from './technical-tests.actions';

export const collectionInitialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  collectionInitialState,
  on(TechnicalTestsActions.AddTechnicalTest, (state, { technicalTestId }) => { 
    return [ ...state, technicalTestId ]
  }),
  on(TechnicalTestsActions.RemoveTechnicalTest, (state, { technicalTestId }) => { 
    return state.filter((id) => id !== technicalTestId)
  })
);
