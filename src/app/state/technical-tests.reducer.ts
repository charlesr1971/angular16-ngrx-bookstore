/* 

OLD PARADIGM:

import { TechnicalTestsApiActions, RETRIEVED_TECHNICAL_TEST_LIST } from './technical-tests.actions';
import { TechnicalTest } from '../app.model';

export const technicalTestsInitialState: ReadonlyArray<TechnicalTest> = [];

export function technicalTestsReducer(
  state = technicalTestsInitialState,
  action: TechnicalTestsApiActions
) {
  switch (action.type) {
    case RETRIEVED_TECHNICAL_TEST_LIST:
      return action.payload.technicalTests;
  }
  return state;
} */

import { createReducer, on } from '@ngrx/store';
import * as TechnicalTestsActions from './technical-tests.actions';
import { TechnicalTest } from '../app.model';

export const technicalTestsInitialState: ReadonlyArray<TechnicalTest> = [];

export const technicalTestsReducer = createReducer(
  technicalTestsInitialState,
  on(TechnicalTestsActions.RetrievedTechnicalTestList, (state, { technicalTests }) => { 
    console.log('technicalTests.reducer: technicalTestsReducer(): technicalTests', technicalTests);
    return technicalTests
  })
);
